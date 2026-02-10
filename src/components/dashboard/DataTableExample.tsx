import { useState } from 'react'
import { IconUsers, IconBuilding, IconMapPin } from '@tabler/icons-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { DataTable } from '../ui/data-table'
import { StatusBadge } from '../ui/status-badge'

// Type definitions
type Client = {
  id: string
  name: string
  email: string
  status: string
  lastActive: string
  avatar?: string
}

type Partner = {
  id: string
  name: string
  location: string
  status: string
  joinDate: string
  rating: number
}

// Example data
const clientsData: Client[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    status: 'Active',
    lastActive: '2h ago',
    avatar: 'https://i.pravatar.cc/150?u=1',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'Pending',
    lastActive: '1d ago',
    avatar: 'https://i.pravatar.cc/150?u=2',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    status: 'Inactive',
    lastActive: '1w ago',
    avatar: 'https://i.pravatar.cc/150?u=3',
  },
]

const partnersData: Partner[] = [
  {
    id: '1',
    name: 'Acme Inc',
    location: 'New York',
    status: 'Active',
    joinDate: '2023-01-15',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Globex Corp',
    location: 'London',
    status: 'Active',
    joinDate: '2023-02-20',
    rating: 4.5,
  },
  {
    id: '3',
    name: 'Initech',
    location: 'Paris',
    status: 'Pending',
    joinDate: '2023-03-10',
    rating: 3.9,
  },
]

export function DataTableExample() {
  const [clientsSearchTerm, setClientsSearchTerm] = useState('')
  const [partnersSearchTerm, setPartnersSearchTerm] = useState('')

  // Filter clients based on search term
  const filteredClients = clientsSearchTerm
    ? clientsData.filter(
        (client) =>
          client.name.toLowerCase().includes(clientsSearchTerm.toLowerCase()) ||
          client.email.toLowerCase().includes(clientsSearchTerm.toLowerCase())
      )
    : clientsData

  // Filter partners based on search term
  const filteredPartners = partnersSearchTerm
    ? partnersData.filter(
        (partner) =>
          partner.name
            .toLowerCase()
            .includes(partnersSearchTerm.toLowerCase()) ||
          partner.location
            .toLowerCase()
            .includes(partnersSearchTerm.toLowerCase())
      )
    : partnersData

  return (
    <div className='grid gap-6 lg:grid-cols-2'>
      {/* Client Management Table */}
      <Card>
        <CardHeader className='pb-2'>
          <div className='flex items-center'>
            <IconUsers className='text-muted-foreground mr-2 h-5 w-5' />
            <CardTitle>Client Management</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={[
              {
                id: 'name',
                header: 'Name',
                accessorKey: 'name',
                cell: (client: Client) => (
                  <div className='flex items-center gap-3'>
                    <Avatar className='h-8 w-8'>
                      <AvatarImage src={client.avatar} alt={client.name} />
                      <AvatarFallback>
                        {client.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col'>
                      <span className='font-medium'>{client.name}</span>
                      <span className='text-muted-foreground text-xs'>
                        {client.email}
                      </span>
                    </div>
                  </div>
                ),
              },
              {
                id: 'status',
                header: 'Status',
                accessorKey: 'status',
                cell: (client: Client) => (
                  <StatusBadge status={client.status} />
                ),
              },
              {
                id: 'lastActive',
                header: 'Last Active',
                accessorKey: 'lastActive',
                cell: (client: Client) => (
                  <span className='text-muted-foreground'>
                    {client.lastActive}
                  </span>
                ),
              },
            ]}
            data={filteredClients}
            onSearch={setClientsSearchTerm}
            rowActions={[
              { label: 'Edit', value: 'edit' },
              { label: 'Delete', value: 'delete' },
              { label: 'View Details', value: 'view' },
            ]}
            onRowAction={(_action, _row) => {
              // TODO: Implement row action handler
            }}
          />
        </CardContent>
      </Card>

      {/* Partner Management Table */}
      <Card>
        <CardHeader className='pb-2'>
          <div className='flex items-center'>
            <IconBuilding className='text-muted-foreground mr-2 h-5 w-5' />
            <CardTitle>Partner Management</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={[
              {
                id: 'name',
                header: 'Name',
                accessorKey: 'name',
                cell: (partner: Partner) => (
                  <span className='font-medium'>{partner.name}</span>
                ),
              },
              {
                id: 'location',
                header: 'Location',
                accessorKey: 'location',
                cell: (partner: Partner) => (
                  <div className='flex items-center'>
                    <IconMapPin className='text-muted-foreground mr-1 h-3.5 w-3.5' />
                    <span>{partner.location}</span>
                  </div>
                ),
              },
              {
                id: 'status',
                header: 'Status',
                accessorKey: 'status',
                cell: (partner: Partner) => (
                  <StatusBadge status={partner.status} />
                ),
              },
            ]}
            data={filteredPartners}
            onSearch={setPartnersSearchTerm}
            rowActions={[
              { label: 'Edit', value: 'edit' },
              { label: 'Delete', value: 'delete' },
              { label: 'View Details', value: 'view' },
            ]}
            onRowAction={(_action, _row) => {
              // TODO: Implement row action handler
            }}
          />
        </CardContent>
      </Card>
    </div>
  )
}
