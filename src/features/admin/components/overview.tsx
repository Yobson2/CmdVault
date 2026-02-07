import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'
import { Skeleton } from '@/components/ui/skeleton'
import { useMonthlyCommandCounts } from '../hooks/use-dashboard-queries'

export function Overview() {
  const { data, isLoading } = useMonthlyCommandCounts()

  if (isLoading) {
    return <Skeleton className='h-[350px] w-full' />
  }

  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={data ?? []}>
        <CartesianGrid
          strokeDasharray='3 3'
          vertical={false}
          stroke='currentColor'
          opacity={0.06}
        />
        <XAxis
          dataKey='name'
          stroke='currentColor'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          opacity={0.5}
        />
        <YAxis
          stroke='currentColor'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          opacity={0.5}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'var(--popover)',
            color: 'var(--popover-foreground)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '8px 12px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          }}
          labelStyle={{
            fontWeight: 'bold',
            marginBottom: '4px',
            color: 'var(--popover-foreground)',
          }}
          itemStyle={{
            color: 'var(--popover-foreground)',
          }}
          cursor={{ fill: 'currentColor', opacity: 0.05 }}
        />
        <Bar
          dataKey='commands'
          fill='#6366f1'
          radius={[6, 6, 0, 0]}
          name='Commands Saved'
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
