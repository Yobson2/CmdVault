import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { columns } from './components/columns'
import { DataTable } from './components/data-table'
import { TeamsDialogs } from './components/teams-dialogs'
import { TeamsPrimaryButtons } from './components/teams-primary-buttons'
import TeamsProvider from './context/teams-context'
import type { Team } from './data/schema'
import { useTeamsQuery } from './hooks/use-teams-queries'

export default function Teams() {
  const { data: teams, isLoading } = useTeamsQuery()

  return (
    <TeamsProvider>
      <Header fixed className='border-border bg-background border-b'>
        <div className='flex items-center gap-2'>
          <h1 className='text-lg font-semibold'>Teams</h1>
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
              Collaborate with your team and share commands.
            </p>
          </div>
          <TeamsPrimaryButtons />
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
          {isLoading ? (
            <div className='flex h-24 items-center justify-center'>
              <p className='text-muted-foreground'>Loading teams...</p>
            </div>
          ) : (
            <DataTable data={(teams ?? []) as Team[]} columns={columns} />
          )}
        </div>
      </Main>

      <TeamsDialogs />
    </TeamsProvider>
  )
}
