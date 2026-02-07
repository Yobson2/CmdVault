import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { columns } from './components/columns'
import { DataTable } from './components/data-table'
import { CommandsDialogs } from './components/commands-dialogs'
import { CommandsPrimaryButtons } from './components/commands-primary-buttons'
import CommandsProvider from './context/commands-context'
import { useCommandsQuery } from './hooks/use-commands-queries'
import type { Command } from './data/schema'

export default function Commands() {
  const { data: commands, isLoading } = useCommandsQuery()

  return (
    <CommandsProvider>
      <Header fixed className='border-b border-border bg-background'>
        <div className='flex items-center gap-2'>
          <h1 className='text-lg font-semibold'>My Commands</h1>
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
            {/* <h2 className='text-2xl font-bold tracking-tight'>My Commands</h2> */}
            <p className='text-muted-foreground'>
              Your saved commands vault. Create, organize, and share proven
              commands.
            </p>
          </div>
          <CommandsPrimaryButtons />
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
          {isLoading ? (
            <div className='flex h-24 items-center justify-center'>
              <p className='text-muted-foreground'>Loading commands...</p>
            </div>
          ) : (
            <DataTable
              data={(commands ?? []) as Command[]}
              columns={columns}
            />
          )}
        </div>
      </Main>

      <CommandsDialogs />
    </CommandsProvider>
  )
}
