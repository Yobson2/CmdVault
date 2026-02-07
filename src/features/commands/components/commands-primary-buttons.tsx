import { IconPlus } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { useCommands } from '../context/commands-context'

export function CommandsPrimaryButtons() {
  const { setOpen } = useCommands()
  return (
    <div className='flex gap-2'>
      <Button className='space-x-1' onClick={() => setOpen('create')}>
        <span>New Command</span> <IconPlus size={18} />
      </Button>
    </div>
  )
}
