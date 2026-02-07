import { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from '@/components/shared/data-table/data-table-column-header'
import { Tag } from '../data/schema'
import { DataTableRowActions } from './data-table-row-actions'

export const columns: ColumnDef<Tag>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Name' />
    ),
    cell: ({ row }) => {
      const color = row.original.color
      return (
        <div className='flex items-center gap-2'>
          <div
            className='h-3 w-3 rounded-full border'
            style={
              color
                ? { backgroundColor: color, borderColor: `${color}80` }
                : { backgroundColor: 'var(--muted)' }
            }
          />
          <span className='font-medium'>{row.getValue('name')}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'command_count',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Commands' />
    ),
    cell: ({ row }) => (
      <span className='text-muted-foreground tabular-nums'>
        {row.getValue('command_count') ?? 0}
      </span>
    ),
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Created' />
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue('created_at'))
      return (
        <span className='text-muted-foreground'>
          {date.toLocaleDateString()}
        </span>
      )
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
