import { useState } from 'react'
import { IconTrash, IconUser } from '@tabler/icons-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import type { Team, TeamMember } from '../data/schema'
import {
  useTeamMembersQuery,
  useAddTeamMember,
  useUpdateMemberRole,
  useRemoveTeamMember,
} from '../hooks/use-teams-queries'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  team: Team
}

export function MembersDrawer({ open, onOpenChange, team }: Props) {
  const { data: members = [], isLoading } = useTeamMembersQuery(team.id)
  const addMember = useAddTeamMember()
  const updateRole = useUpdateMemberRole()
  const removeMember = useRemoveTeamMember()
  const [email, setEmail] = useState('')

  const isAdmin = team.user_role === 'admin'

  const handleAddMember = () => {
    const trimmed = email.trim()
    if (!trimmed) return
    addMember.mutate(
      { teamId: team.id, email: trimmed },
      {
        onSuccess: () => setEmail(''),
      }
    )
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className='flex flex-col'>
        <SheetHeader className='text-left'>
          <SheetTitle>Team Members</SheetTitle>
          <SheetDescription>
            Manage members of <strong>{team.name}</strong>.
          </SheetDescription>
        </SheetHeader>

        {isAdmin && (
          <div className='flex gap-2 px-4'>
            <Input
              placeholder='Add by email...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddMember()}
              className='h-9'
            />
            <Button
              size='sm'
              className='h-9'
              onClick={handleAddMember}
              disabled={addMember.isPending || !email.trim()}
            >
              {addMember.isPending ? 'Adding...' : 'Add'}
            </Button>
          </div>
        )}

        <div className='flex-1 overflow-y-auto px-4'>
          {isLoading ? (
            <div className='flex h-24 items-center justify-center'>
              <p className='text-muted-foreground'>Loading members...</p>
            </div>
          ) : (
            <div className='space-y-2'>
              {(members as TeamMember[]).map((member) => (
                <div
                  key={member.user_id}
                  className='flex items-center justify-between rounded-md border p-3'
                >
                  <div className='flex items-center gap-3'>
                    <div className='bg-muted flex h-8 w-8 items-center justify-center rounded-full'>
                      <IconUser size={16} />
                    </div>
                    <div>
                      <p className='text-sm font-medium'>
                        {member.profiles?.full_name ?? 'Unknown'}
                      </p>
                      <p className='text-muted-foreground text-xs'>
                        {member.profiles?.email}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    {isAdmin ? (
                      <Select
                        value={member.role}
                        onValueChange={(role) =>
                          updateRole.mutate({
                            teamId: team.id,
                            userId: member.user_id,
                            role,
                          })
                        }
                      >
                        <SelectTrigger className='h-7 w-[100px] text-xs'>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='admin'>Admin</SelectItem>
                          <SelectItem value='member'>Member</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Badge
                        variant={
                          member.role === 'admin' ? 'default' : 'secondary'
                        }
                      >
                        {member.role}
                      </Badge>
                    )}
                    {isAdmin && (
                      <Button
                        variant='ghost'
                        size='icon'
                        className='h-7 w-7'
                        onClick={() =>
                          removeMember.mutate({
                            teamId: team.id,
                            userId: member.user_id,
                          })
                        }
                      >
                        <IconTrash size={14} />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
