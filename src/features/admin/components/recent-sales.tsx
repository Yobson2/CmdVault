import { IconTerminal2 } from '@tabler/icons-react'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { useRecentCommands } from '../hooks/use-dashboard-queries'

function getRelativeTime(dateString: string): string {
  const now = new Date()
  const date = new Date(dateString)
  const diffMs = now.getTime() - date.getTime()
  const diffMin = Math.floor(diffMs / 60000)
  const diffHr = Math.floor(diffMin / 60)
  const diffDays = Math.floor(diffHr / 24)

  if (diffMin < 1) return 'just now'
  if (diffMin < 60) return `${diffMin}m ago`
  if (diffHr < 24) return `${diffHr}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`
  return `${Math.floor(diffDays / 30)}mo ago`
}

export function RecentSales() {
  const { data: recentCommands, isLoading } = useRecentCommands()

  if (isLoading) {
    return (
      <div className='space-y-5'>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className='flex items-start gap-3'>
            <Skeleton className='h-9 w-9 rounded-lg' />
            <div className='flex-1 space-y-1'>
              <Skeleton className='h-4 w-3/4' />
              <Skeleton className='h-3 w-1/2' />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (!recentCommands || recentCommands.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center py-10 text-center'>
        <IconTerminal2 className='text-muted-foreground/50 mb-3 h-10 w-10' />
        <p className='text-muted-foreground text-sm font-medium'>
          No commands yet
        </p>
        <p className='text-muted-foreground/70 text-xs'>
          Save your first command to see it here.
        </p>
      </div>
    )
  }

  return (
    <div className='space-y-1'>
      {recentCommands.map((cmd) => (
        <div
          key={cmd.id}
          className='-mx-2 flex items-start gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-muted/50'
        >
          <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600'>
            <IconTerminal2 className='h-4 w-4 text-white' />
          </div>
          <div className='min-w-0 flex-1'>
            <div className='flex items-center justify-between gap-2'>
              <p className='truncate text-sm font-medium'>{cmd.title}</p>
              <span className='text-muted-foreground shrink-0 text-xs'>
                {getRelativeTime(cmd.created_at)}
              </span>
            </div>
            <code className='bg-muted mt-0.5 block truncate rounded px-1.5 py-0.5 text-xs'>
              {cmd.command_text}
            </code>
            <Badge variant='outline' className='mt-1.5 text-xs'>
              {cmd.language}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}
