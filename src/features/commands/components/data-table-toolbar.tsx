import { Cross2Icon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'
import { IconStar, IconStarFilled } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DataTableFacetedFilter } from '@/components/shared/data-table/data-table-faceted-filter'
import { DataTableViewOptions } from '@/components/shared/data-table/data-table-view-options'
import { languages, visibilities } from '../data/data'
import { useTagsQuery } from '../hooks/use-tags-queries'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  showFavoritesFilter?: boolean
}

export function DataTableToolbar<TData>({
  table,
  showFavoritesFilter = true,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  const { data: tags = [] } = useTagsQuery()
  const favColumn = table.getColumn('is_favorite')
  const isFavFiltered = favColumn?.getFilterValue() === true

  const tagOptions = tags.map((t) => ({
    label: t.name,
    value: t.id,
  }))

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2'>
        <Input
          placeholder='Filter commands...'
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className='h-8 w-[150px] lg:w-[250px]'
        />
        <div className='flex gap-x-2'>
          {table.getColumn('language') && (
            <DataTableFacetedFilter
              column={table.getColumn('language')}
              title='Language'
              options={languages}
            />
          )}
          {table.getColumn('visibility') && (
            <DataTableFacetedFilter
              column={table.getColumn('visibility')}
              title='Visibility'
              options={visibilities}
            />
          )}
          {table.getColumn('tags') && tagOptions.length > 0 && (
            <DataTableFacetedFilter
              column={table.getColumn('tags')}
              title='Tags'
              options={tagOptions}
            />
          )}
          {showFavoritesFilter && (
            <Button
              variant={isFavFiltered ? 'default' : 'outline'}
              size='sm'
              className='h-8'
              onClick={() =>
                favColumn?.setFilterValue(isFavFiltered ? undefined : true)
              }
            >
              {isFavFiltered ? (
                <IconStarFilled className='mr-1 h-4 w-4' />
              ) : (
                <IconStar className='mr-1 h-4 w-4' />
              )}
              Favorites
            </Button>
          )}
        </div>
        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
