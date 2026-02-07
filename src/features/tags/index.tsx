import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { columns } from './components/columns'
import { DataTable } from './components/data-table'
import { TagsDialogs } from './components/tags-dialogs'
import { TagsPrimaryButtons } from './components/tags-primary-buttons'
import TagsProvider from './context/tags-context'
import { useTagsWithCountQuery } from './hooks/use-tags-queries'
import type { Tag } from './data/schema'

export default function Tags() {
  const { data: tags, isLoading } = useTagsWithCountQuery()

  return (
    <TagsProvider>
      <Header fixed className='border-b border-border bg-background'>
        <div className='flex items-center gap-2'>
          <h1 className='text-lg font-semibold'>Tags</h1>
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
              Organize your commands with tags.
            </p>
          </div>
          <TagsPrimaryButtons />
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
          {isLoading ? (
            <div className='flex h-24 items-center justify-center'>
              <p className='text-muted-foreground'>Loading tags...</p>
            </div>
          ) : (
            <DataTable data={(tags ?? []) as Tag[]} columns={columns} />
          )}
        </div>
      </Main>

      <TagsDialogs />
    </TagsProvider>
  )
}
