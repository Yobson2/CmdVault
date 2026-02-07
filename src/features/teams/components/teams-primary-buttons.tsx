import { IconPlus } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { useTeams } from '../context/teams-context'

export function TeamsPrimaryButtons() {
  const { setOpen } = useTeams()
  return (
    <div className='flex gap-2'>
      <Button className='space-x-1' onClick={() => setOpen('create')}>
        <span>New Team</span> <IconPlus size={18} />
      </Button>
    </div>
  )
}
