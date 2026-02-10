import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { IconAlertTriangle } from '@tabler/icons-react'
import { toast } from 'sonner'
import { useAuthStore } from '@/stores/authStore'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { ConfirmDialog } from '@/components/confirm-dialog'

export default function DangerZoneActions() {
  const { user, signOut } = useAuthStore((s) => s.auth)
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [deleteCommandsOpen, setDeleteCommandsOpen] = useState(false)
  const [deleteAccountOpen, setDeleteAccountOpen] = useState(false)

  const deleteAllCommands = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from('commands')
        .delete()
        .eq('user_id', user!.id)
      if (error) throw error
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['commands'] })
      queryClient.invalidateQueries({ queryKey: ['dashboard'] })
      queryClient.invalidateQueries({ queryKey: ['tags'] })
      toast.success('All commands deleted')
      setDeleteCommandsOpen(false)
    },
    onError: () => {
      toast.error('Failed to delete commands')
    },
  })

  const deleteAccount = useMutation({
    mutationFn: async () => {
      const userId = user!.id

      // Delete commands (FK cascade handles command_tags)
      await supabase.from('commands').delete().eq('user_id', userId)

      // Delete team_members
      await supabase.from('team_members').delete().eq('user_id', userId)

      // Delete profile
      await supabase.from('profiles').delete().eq('id', userId)

      // Toast before sign-out since the component will unmount
      toast.success(
        'Account data deleted. Your auth record will be queued for removal.'
      )

      await signOut()
      navigate({ to: '/sign-in' })
    },
    onError: () => {
      toast.error('Failed to delete account')
    },
  })

  return (
    <div className='space-y-6'>
      {/* Delete All Commands */}
      <div className='border-destructive/50 rounded-lg border p-4'>
        <div className='flex items-start gap-3'>
          <IconAlertTriangle className='text-destructive mt-0.5 h-5 w-5 shrink-0' />
          <div className='flex-1 space-y-2'>
            <h4 className='font-medium'>Delete All Commands</h4>
            <p className='text-muted-foreground text-sm'>
              Permanently delete all your commands and associated tags. This
              action cannot be undone.
            </p>
            <Button
              variant='destructive'
              size='sm'
              onClick={() => setDeleteCommandsOpen(true)}
            >
              Delete all commands
            </Button>
          </div>
        </div>
      </div>

      {/* Delete Account */}
      <div className='border-destructive/50 rounded-lg border p-4'>
        <div className='flex items-start gap-3'>
          <IconAlertTriangle className='text-destructive mt-0.5 h-5 w-5 shrink-0' />
          <div className='flex-1 space-y-2'>
            <h4 className='font-medium'>Delete Account</h4>
            <p className='text-muted-foreground text-sm'>
              Permanently delete your account data including all commands,
              profile, and team memberships. Your auth record will be queued for
              removal. This action cannot be undone.
            </p>
            <Button
              variant='destructive'
              size='sm'
              onClick={() => setDeleteAccountOpen(true)}
            >
              Delete account
            </Button>
          </div>
        </div>
      </div>

      {/* Confirm: Delete All Commands */}
      <ConfirmDialog
        open={deleteCommandsOpen}
        onOpenChange={setDeleteCommandsOpen}
        title='Delete All Commands'
        desc='Are you sure you want to delete all your commands? This action is permanent and cannot be undone.'
        destructive
        confirmText='Delete all commands'
        handleConfirm={() => deleteAllCommands.mutate()}
        isLoading={deleteAllCommands.isPending}
      />

      {/* Confirm: Delete Account */}
      <ConfirmDialog
        open={deleteAccountOpen}
        onOpenChange={setDeleteAccountOpen}
        title='Delete Account'
        desc='Are you sure you want to delete your account? All your data — commands, profile, and team memberships — will be permanently removed. This cannot be undone.'
        destructive
        confirmText='Delete my account'
        handleConfirm={() => deleteAccount.mutate()}
        isLoading={deleteAccount.isPending}
      />
    </div>
  )
}
