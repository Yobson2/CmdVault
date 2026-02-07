import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { CommandCard } from './components/command-card'
import { ExploreToolbar } from './components/explore-toolbar'
import { useExploreQuery } from './hooks/use-explore-queries'
import type { ExploreFilters } from './services/explore-service'
import type { ExploreCommand } from './data/schema'

export default function Explore() {
  const [filters, setFilters] = useState<ExploreFilters>({
    sort: 'recent',
  })
  const { data: commands, isLoading, error } = useExploreQuery(filters)

  return (
    <>
      <Header fixed className='border-b border-border bg-background'>
        <div className='flex items-center gap-2'>
          <h1 className='text-lg font-semibold'>Explore</h1>
        </div>
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>
      <Main>
        <div className='mb-4'>
          <p className='text-muted-foreground mb-4'>
            Discover public commands shared by the community.
          </p>
          <ExploreToolbar filters={filters} onFiltersChange={setFilters} />
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1'>
          {isLoading ? (
            <div className='flex h-24 items-center justify-center'>
              <p className='text-muted-foreground'>
                Loading public commands...
              </p>
            </div>
          ) : error ? (
            <div className='flex h-24 items-center justify-center'>
              <p className='text-destructive'>
                Failed to load commands: {(error as Error).message}
              </p>
            </div>
          ) : !commands?.length ? (
            <div className='flex h-24 items-center justify-center'>
              <p className='text-muted-foreground'>
                No public commands found.
              </p>
            </div>
          ) : (
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {(commands as ExploreCommand[]).map((command) => (
                <CommandCard key={command.id} command={command} />
              ))}
            </div>
          )}
        </div>
      </Main>
    </>
  )
}
