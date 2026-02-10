import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { columns } from '@/features/commands/components/columns'
import { CommandsDialogs } from '@/features/commands/components/commands-dialogs'
import { DataTable } from '@/features/commands/components/data-table'
import CommandsProvider from '@/features/commands/context/commands-context'
import type { Command } from '@/features/commands/data/schema'
import { useCommandsQuery } from '@/features/commands/hooks/use-commands-queries'

export default function Favorites() {
  const { data: favorites, isLoading } = useCommandsQuery({ is_favorite: true })

  const favoritesList = (favorites ?? []) as Command[]

  return (
    <CommandsProvider>
      <Header fixed className='border-border bg-background border-b'>
        <div className='flex items-center gap-2'>
          <h1 className='text-lg font-semibold'>Favorites</h1>
        </div>
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>
      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4'>
          <div>
            <p className='text-muted-foreground'>
              Your favorite commands for quick access.
              {!isLoading &&
                ` ${favoritesList.length} command${favoritesList.length !== 1 ? 's' : ''} saved.`}
            </p>
          </div>
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
          {isLoading ? (
            <div className='flex h-24 items-center justify-center'>
              <p className='text-muted-foreground'>Loading favorites...</p>
            </div>
          ) : (
            <DataTable
              data={favoritesList}
              columns={columns}
              showFavoritesFilter={false}
            />
          )}
        </div>
      </Main>

      <CommandsDialogs />
    </CommandsProvider>
  )
}
