import {
  IconTerminal2,
  IconStar,
  IconCode,
  IconCalendarMonth,
} from '@tabler/icons-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { Skeleton } from '@/components/ui/skeleton'
import { useDashboardStats } from './hooks/use-dashboard-queries'
import { Overview } from './components/overview'
import { RecentSales } from './components/recent-sales'
import { ThemeSwitch } from '@/components/theme-switch'

export default function DashboardAdmin() {
  const { data: stats, isLoading } = useDashboardStats()

  const cards = [
    {
      title: 'Total Commands',
      value: stats?.totalCommands ?? 0,
      description: 'Commands in your vault',
      icon: IconTerminal2,
    },
    {
      title: 'Favorites',
      value: stats?.favorites ?? 0,
      description: 'Starred commands',
      icon: IconStar,
    },
    {
      title: 'Languages',
      value: stats?.languages ?? 0,
      description: 'Unique languages used',
      icon: IconCode,
    },
    {
      title: 'This Month',
      value: stats?.thisMonth ?? 0,
      description: 'Commands added recently',
      icon: IconCalendarMonth,
    },
  ]

  return (
    <>
      <Header fixed className='border-b border-border bg-background'>
        <div className='flex items-center gap-2'>
          <h1 className='text-lg font-semibold'>Dashboard</h1>
        </div>
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
           <ThemeSwitch />
          <ProfileDropdown />
        </div>
        
      </Header>

      <Main>
        {/* Hero banner — uses the site's signature brand gradient */}
        <Card className='mb-6 overflow-hidden border-0 bg-gradient-to-br from-cyan-500 to-indigo-600 text-white shadow-lg'>
          <CardContent className='py-8'>
            <h2 className='text-2xl font-bold tracking-tight'>
              Welcome to CmdVault
            </h2>
            <p className='mt-1 text-cyan-100'>
              Your command vault at a glance. Store, reuse, and share proven
              commands.
            </p>
          </CardContent>
        </Card>

        <div className='space-y-4'>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {cards.map((card) => {
              const Icon = card.icon
              return (
                <Card
                  key={card.title}
                  className='transition-shadow hover:shadow-md'
                >
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                      {card.title}
                    </CardTitle>
                    <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400'>
                      <Icon className='h-5 w-5' />
                    </div>
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <Skeleton className='h-9 w-20' />
                    ) : (
                      <div className='text-3xl font-bold tabular-nums tracking-tight'>
                        {card.value}
                      </div>
                    )}
                    <p className='text-muted-foreground text-xs'>
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
            <Card className='col-span-1 lg:col-span-4'>
              <CardHeader>
                <CardTitle>Commands Saved</CardTitle>
                <CardDescription>
                  Commands added to your vault per month
                </CardDescription>
              </CardHeader>
              <CardContent className='pl-2'>
                <Overview />
              </CardContent>
            </Card>
            <Card className='col-span-1 lg:col-span-3'>
              <CardHeader>
                <CardTitle>Recent Commands</CardTitle>
                <CardDescription>
                  Your latest saved commands
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
        </div>
      </Main>
    </>
  )
}
