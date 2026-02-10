import { IconChartBar, IconMap, IconUsers } from '@tabler/icons-react'
import { Card } from '../ui/card'
import { DataTable, StatusBadge } from './DataTable'
import { StatCard } from './StatCard'

export function Dashboard() {
  return (
    <div className='space-y-6 p-6'>
      {/* Overview Statistics */}
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <StatCard
          title='Daily Revenue'
          value='$1,234'
          icon={<IconChartBar className='h-4 w-4' />}
          chart={<div className='bg-primary-50 h-16 w-full rounded' />}
        />
        <StatCard
          title='Active Users'
          value='1,234'
          icon={<IconUsers className='h-4 w-4' />}
          chart={<div className='bg-primary-50 h-16 w-full rounded' />}
        />
        <StatCard
          title='Partner Coverage'
          value='85%'
          icon={<IconMap className='h-4 w-4' />}
          chart={<div className='bg-primary-50 h-16 w-full rounded' />}
        />
        <StatCard
          title='Client Growth'
          value='+12.5%'
          icon={<IconChartBar className='h-4 w-4' />}
          chart={<div className='bg-primary-50 h-16 w-full rounded' />}
        />
      </div>

      {/* Client Management & Partner Management */}
      <div className='grid gap-6 lg:grid-cols-2'>
        <Card className='p-6'>
          <h3 className='mb-4 text-lg font-semibold'>Client Management</h3>
          <DataTable
            columns={[
              { key: 'name', title: 'Name' },
              {
                key: 'status',
                title: 'Status',
                render: (value) => <StatusBadge status={value} />,
              },
              { key: 'lastActive', title: 'Last Active' },
            ]}
            data={[
              { name: 'John Doe', status: 'Active', lastActive: '2h ago' },
              { name: 'Jane Smith', status: 'Pending', lastActive: '1d ago' },
              { name: 'Bob Johnson', status: 'Inactive', lastActive: '1w ago' },
            ]}
          />
        </Card>

        <Card className='p-6'>
          <h3 className='mb-4 text-lg font-semibold'>Partner Management</h3>
          <DataTable
            columns={[
              { key: 'name', title: 'Name' },
              { key: 'location', title: 'Location' },
              {
                key: 'status',
                title: 'Status',
                render: (value) => <StatusBadge status={value} />,
              },
            ]}
            data={[
              { name: 'Partner A', location: 'New York', status: 'Active' },
              { name: 'Partner B', location: 'London', status: 'Active' },
              { name: 'Partner C', location: 'Paris', status: 'Pending' },
            ]}
          />
        </Card>
      </div>
    </div>
  )
}

// Réexporter les composants pour faciliter l'importation
export { StatCard } from './StatCard'
export { DataTable, StatusBadge } from './DataTable'
