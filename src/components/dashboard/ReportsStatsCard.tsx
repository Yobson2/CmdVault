import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { IconArrowUpRight, IconClock } from '@tabler/icons-react'
import { cn } from '@/lib/utils'
import { tokens } from '@/styles/design-tokens'

interface SparklineProps {
  data: number[]
  color?: string
  height?: number
  className?: string
}

function Sparkline({ data, color = tokens.colors.primary[500], height = 24, className }: SparklineProps) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100
    const y = height - ((value - min) / range) * height
    return `${x},${y}`
  }).join(' ')
  
  return (
    <div className={cn("w-full", className)} style={{ height }}>
      <svg width="100%" height={height} preserveAspectRatio="none">
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

interface StatCardProps {
  title: string
  value: string | number
  change?: {
    value: string | number
    trend: 'up' | 'down' | 'neutral'
  }
  period?: string
  sparklineData?: number[]
  className?: string
}

export function ReportsStatsCard({ 
  title, 
  value, 
  change, 
  period = 'This Month',
  sparklineData = [5, 8, 4, 6, 8, 10, 5, 9, 11],
  className 
}: StatCardProps) {
  const trendColor = change?.trend === 'up' 
    ? 'text-success-600' 
    : change?.trend === 'down' 
      ? 'text-danger-600' 
      : 'text-gray-600'
  
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <IconClock size={14} />
            <span>{period}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-end justify-between">
            <div className="text-2xl font-bold">{value}</div>
            {change && (
              <div className={cn("flex items-center gap-0.5 text-sm", trendColor)}>
                <IconArrowUpRight 
                  size={16} 
                  className={cn(
                    change.trend === 'down' && 'rotate-180'
                  )} 
                />
                <span>{change.value}</span>
              </div>
            )}
          </div>
          
          <Sparkline 
            data={sparklineData} 
            color={
              change?.trend === 'up' 
                ? tokens.colors.success[500] 
                : change?.trend === 'down' 
                  ? tokens.colors.danger[500] 
                  : tokens.colors.primary[500]
            }
          />
        </div>
      </CardContent>
    </Card>
  )
} 