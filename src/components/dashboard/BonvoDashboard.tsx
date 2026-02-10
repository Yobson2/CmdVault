import { IconTrendingUp, IconMapPin, IconChartPie } from '@tabler/icons-react'
import { tokens } from '@/styles/design-tokens'
import { DonutChart } from '../charts/DonutChart'
import { MapCard } from '../maps/MapCard'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { DataTable } from '../ui/data-table'
import { StatusBadge } from '../ui/status-badge'
import { PromotionalCard } from './PromotionalCard'
import { ReportsStatsCard } from './ReportsStatsCard'

// Bar Chart Component for Overview Statistics
function BarChart({
  data,
  color = tokens.colors.primary[500],
  height = 60,
  className = '',
}: {
  data: number[]
  color?: string
  height?: number
  className?: string
}) {
  const max = Math.max(...data)

  return (
    <div className={`flex h-${height} items-end gap-1 ${className}`}>
      {data.map((value, i) => (
        <div
          key={i}
          className='flex-1 rounded-t transition-all duration-300 hover:opacity-80'
          style={{
            height: `${(value / max) * 100}%`,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  )
}

export function BonvoDashboard() {
  return (
    <div className='space-y-5 p-4 md:p-6'>
      {/* Overview Statistics */}
      <div>
        <h2 className='mb-4 text-lg font-semibold'>Overview Statistics</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {/* 1. Occupancy Rates */}
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2'>
              <CardTitle className='text-sm font-medium'>
                Occupancy Rates
              </CardTitle>
              <Button variant='ghost' className='h-8 w-8 p-0'>
                ⋯
              </Button>
            </CardHeader>
            <CardContent>
              <BarChart
                data={[70, 65, 75, 60, 80, 75, 70]}
                color={tokens.colors.chart.amber}
              />
              <div className='text-muted-foreground mt-1 grid grid-cols-7 text-center text-xs'>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
                <div>Sun</div>
              </div>
            </CardContent>
          </Card>

          {/* 2. Daily Revenue */}
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2'>
              <CardTitle className='text-sm font-medium'>
                Daily Revenue
              </CardTitle>
              <Button variant='ghost' className='h-8 w-8 p-0'>
                ⋯
              </Button>
            </CardHeader>
            <CardContent>
              <BarChart
                data={[55, 60, 45, 65, 50, 70, 60]}
                color={tokens.colors.chart.purple}
              />
              <div className='text-muted-foreground mt-1 grid grid-cols-7 text-center text-xs'>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
                <div>Sun</div>
              </div>
            </CardContent>
          </Card>

          {/* 3. Online Checkins */}
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2'>
              <CardTitle className='text-sm font-medium'>
                Online Checkins
              </CardTitle>
              <Button variant='ghost' className='h-8 w-8 p-0'>
                ⋯
              </Button>
            </CardHeader>
            <CardContent>
              <div className='relative h-[76px]'>
                <div className='absolute inset-0 bg-gray-50'>
                  <div className='h-full w-full overflow-hidden'>
                    <div className='border-primary-50 absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-8 opacity-30'></div>
                    <div className='border-primary-100 absolute top-1/2 left-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 opacity-40'></div>
                    <div className='border-primary-200 absolute top-1/2 left-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 opacity-60'></div>
                    <div className='bg-primary-50 absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full'></div>
                    <IconMapPin className='text-primary-500 absolute top-[35%] left-[42%] h-5 w-5' />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 4. YoY Rate of Growth */}
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2'>
              <CardTitle className='text-sm font-medium'>
                YoY Rate of Growth
              </CardTitle>
              <Button variant='ghost' className='h-8 w-8 p-0'>
                ⋯
              </Button>
            </CardHeader>
            <CardContent>
              <div className='relative h-[76px]'>
                <div className='absolute inset-0 bg-gray-50'>
                  <div className='h-full w-full overflow-hidden'>
                    <div className='bg-primary-100 absolute top-[35%] left-[42%] h-5 w-5 rounded-full'></div>
                    <div className='bg-primary-100 absolute top-[50%] left-[60%] h-5 w-5 rounded-full'></div>
                    <div className='bg-primary-100 absolute top-[65%] left-[52%] h-5 w-5 rounded-full'></div>
                    <IconTrendingUp className='text-primary-500 absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2' />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content Area - Top Row */}
      <div className='grid gap-5 lg:grid-cols-2'>
        {/* Client Management */}
        <Card>
          <CardHeader className='pb-3'>
            <div className='flex items-center justify-between'>
              <CardTitle className='text-base font-semibold'>
                Client Management
              </CardTitle>
              <Button variant='ghost' size='sm' className='h-8 text-xs'>
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <DataTable
              columns={[
                {
                  id: 'name',
                  header: 'Name',
                  accessorKey: 'name',
                  cell: (client) => (
                    <div className='flex items-center gap-3'>
                      <Avatar className='h-8 w-8'>
                        <AvatarImage src={client.avatar} alt={client.name} />
                        <AvatarFallback>
                          {client.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className='text-sm leading-none font-medium'>
                          {client.name}
                        </p>
                      </div>
                    </div>
                  ),
                },
                {
                  id: 'status',
                  header: 'Status',
                  accessorKey: 'status',
                  cell: (client) => <StatusBadge status={client.status} />,
                },
                {
                  id: 'lastActive',
                  header: 'Last Active',
                  accessorKey: 'lastActive',
                  cell: (client) => (
                    <span className='text-muted-foreground text-sm'>
                      {client.lastActive}
                    </span>
                  ),
                },
                {
                  id: 'action',
                  header: 'View',
                  accessorKey: 'id',
                  cell: () => (
                    <Button
                      variant='ghost'
                      size='sm'
                      className='h-8 px-2 text-xs'
                    >
                      View
                    </Button>
                  ),
                },
              ]}
              data={[
                {
                  id: '1',
                  name: 'John Doe',
                  status: 'Active',
                  lastActive: '2h ago',
                  avatar: 'https://i.pravatar.cc/150?u=1',
                },
                {
                  id: '2',
                  name: 'Jane Smith',
                  status: 'Pending',
                  lastActive: '1d ago',
                  avatar: 'https://i.pravatar.cc/150?u=2',
                },
                {
                  id: '3',
                  name: 'Bob Johnson',
                  status: 'Inactive',
                  lastActive: '1w ago',
                  avatar: 'https://i.pravatar.cc/150?u=3',
                },
              ]}
            />
          </CardContent>
        </Card>

        {/* AI Insights Panel */}
        <Card>
          <CardHeader className='pb-3'>
            <div className='flex items-center justify-between'>
              <CardTitle className='text-base font-semibold'>
                AI Insights Panel
              </CardTitle>
              <Button variant='ghost' size='sm' className='h-8 text-xs'>
                <IconChartPie className='mr-1 h-4 w-4' />
                Analytics
              </Button>
            </div>
          </CardHeader>
          <CardContent className='flex flex-col items-center pt-4'>
            <DonutChart
              data={[
                { value: 65, color: tokens.colors.chart.blue, label: 'Paid' },
                {
                  value: 25,
                  color: tokens.colors.chart.purple,
                  label: 'Pending',
                },
                { value: 10, color: tokens.colors.chart.teal, label: 'Refund' },
              ]}
              size={180}
              thickness={30}
            />
          </CardContent>
        </Card>
      </div>

      {/* Main Content Area - Bottom Row */}
      <div className='grid gap-5 lg:grid-cols-3'>
        {/* Role Management with Map */}
        <Card className='lg:col-span-1'>
          <CardHeader className='pb-3'>
            <div className='flex items-center justify-between'>
              <CardTitle className='text-base font-semibold'>
                Role Management
              </CardTitle>
              <Button variant='ghost' size='sm' className='h-8 text-xs'>
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className='p-0'>
            <div className='flex flex-col'>
              <MapCard
                locations={[
                  {
                    id: '1',
                    lat: 40.712776,
                    lng: -74.005974,
                    color: tokens.colors.primary[500],
                  },
                  {
                    id: '2',
                    lat: 40.715076,
                    lng: -74.015974,
                    color: tokens.colors.success[500],
                  },
                ]}
              />

              <div className='p-4'>
                <PromotionalCard
                  title='Want to try AI?'
                  description='Unlock powerful insights with our AI assistant today.'
                  buttonText='Try Now'
                  bgColor='#1e293b'
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Partner Management */}
        <Card className='lg:col-span-1'>
          <CardHeader className='pb-3'>
            <div className='flex items-center justify-between'>
              <CardTitle className='text-base font-semibold'>
                Partner Management
              </CardTitle>
              <Button variant='ghost' size='sm' className='h-8 text-xs'>
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <DataTable
              columns={[
                {
                  id: 'name',
                  header: 'Partner Name',
                  accessorKey: 'name',
                },
                {
                  id: 'location',
                  header: 'Location',
                  accessorKey: 'location',
                },
                {
                  id: 'status',
                  header: 'Status',
                  accessorKey: 'status',
                  cell: (partner) => <StatusBadge status={partner.status} />,
                },
                {
                  id: 'action',
                  header: 'View',
                  accessorKey: 'id',
                  cell: () => (
                    <Button
                      variant='ghost'
                      size='sm'
                      className='h-8 px-2 text-xs'
                    >
                      View
                    </Button>
                  ),
                },
              ]}
              data={[
                {
                  id: '1',
                  name: 'Acme Inc',
                  location: 'New York',
                  status: 'Active',
                },
                {
                  id: '2',
                  name: 'Globex',
                  location: 'London',
                  status: 'Active',
                },
                {
                  id: '3',
                  name: 'Initech',
                  location: 'Paris',
                  status: 'Pending',
                },
              ]}
            />
          </CardContent>
        </Card>

        {/* Reports and Statistics */}
        <Card className='lg:col-span-1'>
          <CardHeader className='pb-3'>
            <div className='flex items-center justify-between'>
              <CardTitle className='text-base font-semibold'>
                Reports and Statistics
              </CardTitle>
              <Button variant='ghost' size='sm' className='h-8 text-xs'>
                Export
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4'>
              <ReportsStatsCard
                title='Revenue'
                value='$24,567'
                change={{ value: '12%', trend: 'up' }}
                sparklineData={[5, 7, 8, 6, 9, 10, 8, 9, 11]}
              />
              <ReportsStatsCard
                title='Bookings'
                value='867'
                change={{ value: '4%', trend: 'down' }}
                sparklineData={[11, 10, 8, 7, 6, 5, 7, 6, 5]}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
