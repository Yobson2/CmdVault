import { useEffect } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useAuthStore } from '@/stores/authStore'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'

const profileFormSchema = z.object({
  full_name: z
    .string()
    .min(2, 'Name must be at least 2 characters.')
    .max(100, 'Name must not be longer than 100 characters.'),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export default function ProfileForm() {
  const { user } = useAuthStore((s) => s.auth)
  const queryClient = useQueryClient()

  const { data: profile, isLoading } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('full_name, email')
        .eq('id', user!.id)
        .single()
      if (error) throw error
      return data
    },
    enabled: !!user,
  })

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      full_name: '',
    },
  })

  useEffect(() => {
    if (profile) {
      form.reset({
        full_name: profile.full_name ?? '',
      })
    }
  }, [profile, user, form])

  const updateProfile = useMutation({
    mutationFn: async (data: ProfileFormValues) => {
      const { error } = await supabase.rpc('update_own_profile', {
        new_full_name: data.full_name,
      })
      if (error) throw error
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile', user?.id] })
      toast.success('Profile updated successfully')
    },
    onError: (error) => {
      toast.error('Failed to update profile', {
        description: error instanceof Error ? error.message : 'Unknown error',
      })
    },
  })

  if (isLoading) {
    return (
      <div className='space-y-6'>
        <Skeleton className='h-10 w-full' />
        <Skeleton className='h-10 w-full' />
        <Skeleton className='h-10 w-24' />
      </div>
    )
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => updateProfile.mutate(data))}
        className='space-y-6'
      >
        <FormField
          control={form.control}
          name='full_name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder='Your name' {...field} />
              </FormControl>
              <FormDescription>
                This is your display name visible to others.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='space-y-2'>
          <p className='text-sm font-medium'>Email</p>
          <p className='text-sm'>{profile?.email ?? user?.email}</p>
          <p className='text-muted-foreground text-[0.8rem]'>
            Your email address is managed through authentication settings.
          </p>
        </div>
        <Button type='submit' disabled={updateProfile.isPending}>
          {updateProfile.isPending ? 'Saving...' : 'Update profile'}
        </Button>
      </form>
    </Form>
  )
}
