import { ColumnDef } from '@tanstack/react-table'
import { IconCopy, IconTerminal2 } from '@tabler/icons-react'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { DataTableColumnHeader } from '@/components/shared/data-table/data-table-column-header'
import { categories, languages, visibilities } from '../data/data'
import { Command } from '../data/schema'
import { DataTableRowActions } from './data-table-row-actions'

export const columns: ColumnDef<Command>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Title' />
    ),
    cell: ({ row }) => {
      const category = categories.find((c) => c.value === row.original.category)
      const commandTags = row.original.command_tags ?? []
      return (
        <div className='flex flex-col gap-1'>
          <div className='flex space-x-2'>
            {category && <Badge variant='outline'>{category.label}</Badge>}
            <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
              {row.getValue('title')}
            </span>
          </div>
          {commandTags.length > 0 && (
            <div className='flex flex-wrap gap-1'>
              {commandTags.map((ct) =>
                ct.tags ? (
                  <Badge
                    key={ct.tag_id}
                    variant='secondary'
                    className='rounded-sm px-1.5 py-0 text-xs font-normal'
                    style={
                      ct.tags.color
                        ? {
                            backgroundColor: `${ct.tags.color}20`,
                            color: ct.tags.color,
                            borderColor: `${ct.tags.color}40`,
                          }
                        : undefined
                    }
                  >
                    {ct.tags.name}
                  </Badge>
                ) : null
              )}
            </div>
          )}
        </div>
      )
    },
  },
  {
    accessorKey: 'command_text',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Command' />
    ),
    cell: ({ row }) => {
      const text = row.getValue('command_text') as string
      return (
        <Popover>
          <PopoverTrigger asChild>
            <button
              type='button'
              className='inline-flex max-w-[220px] items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1 text-left font-mono text-xs text-green-400 transition-colors hover:border-zinc-500 dark:border-zinc-600 dark:bg-zinc-950'
            >
              <IconTerminal2 size={12} className='shrink-0 text-zinc-500' />
              <span className='truncate'>{text}</span>
            </button>
          </PopoverTrigger>
          <PopoverContent
            align='start'
            className='w-auto max-w-[500px] border-zinc-700 bg-zinc-900 p-0 dark:border-zinc-600 dark:bg-zinc-950'
          >
            <div className='flex items-center justify-between border-b border-zinc-700 px-3 py-1.5 dark:border-zinc-600'>
              <div className='flex items-center gap-1.5'>
                <span className='inline-block h-2 w-2 rounded-full bg-red-500' />
                <span className='inline-block h-2 w-2 rounded-full bg-yellow-500' />
                <span className='inline-block h-2 w-2 rounded-full bg-green-500' />
              </div>
              <Button
                variant='ghost'
                size='icon'
                className='h-6 w-6 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-100'
                onClick={() => {
                  navigator.clipboard.writeText(text)
                  toast.success('Command copied to clipboard')
                }}
              >
                <IconCopy size={13} />
              </Button>
            </div>
            <div className='max-h-[200px] overflow-auto p-3'>
              <code className='block font-mono text-[13px] leading-relaxed break-all whitespace-pre-wrap text-green-400'>
                <span className='text-zinc-500 select-none'>$ </span>
                {text}
              </code>
            </div>
          </PopoverContent>
        </Popover>
      )
    },
  },
  {
    accessorKey: 'language',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Language' />
    ),
    cell: ({ row }) => {
      const language = languages.find(
        (l) => l.value === row.getValue('language')
      )
      if (!language) return null
      return (
        <div className='flex w-[100px] items-center'>
          {language.icon && (
            <language.icon className='text-muted-foreground mr-2 h-4 w-4' />
          )}
          <span>{language.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'visibility',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Visibility' />
    ),
    cell: ({ row }) => {
      const visibility = visibilities.find(
        (v) => v.value === row.getValue('visibility')
      )
      if (!visibility) return null
      return (
        <div className='flex items-center'>
          {visibility.icon && (
            <visibility.icon className='text-muted-foreground mr-2 h-4 w-4' />
          )}
          <span>{visibility.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'usage_count',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Uses' />
    ),
    cell: ({ row }) => (
      <span className='text-muted-foreground tabular-nums'>
        {row.getValue('usage_count')}
      </span>
    ),
  },
  {
    accessorKey: 'is_favorite',
    header: () => null,
    cell: () => null,
    enableHiding: false,
    enableSorting: false,
    filterFn: (row, _id, value) => {
      if (!value) return true
      return row.original.is_favorite === true
    },
  },
  {
    id: 'tags',
    accessorFn: (row) =>
      row.command_tags
        ?.map((ct) => ct.tags?.name)
        .filter(Boolean)
        .join(',') ?? '',
    header: () => null,
    cell: () => null,
    enableHiding: false,
    enableSorting: false,
    filterFn: (row, _id, value: string[]) => {
      if (!value || value.length === 0) return true
      const rowTagIds = row.original.command_tags?.map((ct) => ct.tag_id) ?? []
      return value.some((tagId) => rowTagIds.includes(tagId))
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
