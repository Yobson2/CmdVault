import { IconArrowsSort } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { languages } from '@/features/commands/data/data'
import type { ExploreFilters } from '../services/explore-service'

interface ExploreToolbarProps {
  filters: ExploreFilters
  onFiltersChange: (filters: ExploreFilters) => void
}

export function ExploreToolbar({
  filters,
  onFiltersChange,
}: ExploreToolbarProps) {
  return (
    <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
      <Input
        placeholder='Search public commands...'
        value={filters.search ?? ''}
        onChange={(e) =>
          onFiltersChange({ ...filters, search: e.target.value || undefined })
        }
        className='h-9 sm:w-[250px] lg:w-[350px]'
      />
      <div className='flex gap-2'>
        <Select
          value={filters.language ?? 'all'}
          onValueChange={(v) =>
            onFiltersChange({
              ...filters,
              language: v === 'all' ? undefined : v,
            })
          }
        >
          <SelectTrigger className='h-9 w-[140px]'>
            <SelectValue placeholder='Language' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>All Languages</SelectItem>
            {languages.map((l) => (
              <SelectItem key={l.value} value={l.value}>
                {l.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant={filters.sort === 'popular' ? 'default' : 'outline'}
          size='sm'
          className='h-9'
          onClick={() =>
            onFiltersChange({
              ...filters,
              sort: filters.sort === 'popular' ? 'recent' : 'popular',
            })
          }
        >
          <IconArrowsSort className='mr-1 h-4 w-4' />
          {filters.sort === 'popular' ? 'Popular' : 'Recent'}
        </Button>
      </div>
    </div>
  )
}
