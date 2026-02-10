import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Row } from '@tanstack/react-table'
import { IconCopy, IconHeart, IconTrash } from '@tabler/icons-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useCommands } from '../context/commands-context'
import { commandSchema } from '../data/schema'
import {
  useToggleFavorite,
  useIncrementUsage,
} from '../hooks/use-commands-queries'

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const command = commandSchema.parse(row.original)
  const { setOpen, setCurrentRow } = useCommands()
  const toggleFavorite = useToggleFavorite()
  const incrementUsage = useIncrementUsage()

  const handleCopy = () => {
    navigator.clipboard.writeText(command.command_text)
    incrementUsage.mutate(command.id)
    toast.success('Command copied to clipboard')
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='data-[state=open]:bg-muted flex h-8 w-8 p-0'
        >
          <DotsHorizontalIcon className='h-4 w-4' />
          <span className='sr-only'>Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-[160px]'>
        <DropdownMenuItem
          onClick={() => {
            setCurrentRow(command)
            setOpen('update')
          }}
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopy}>
          Copy
          <DropdownMenuShortcut>
            <IconCopy size={16} />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            toggleFavorite.mutate({
              id: command.id,
              isFavorite: !command.is_favorite,
            })
          }
        >
          {command.is_favorite ? 'Unfavorite' : 'Favorite'}
          <DropdownMenuShortcut>
            <IconHeart size={16} />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            setCurrentRow(command)
            setOpen('delete')
          }}
        >
          Delete
          <DropdownMenuShortcut>
            <IconTrash size={16} />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
