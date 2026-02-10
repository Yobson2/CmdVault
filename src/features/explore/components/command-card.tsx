import { useCallback, useEffect, useRef, useState } from 'react'
import {
  IconChevronDown,
  IconChevronUp,
  IconCopy,
  IconTerminal2,
  IconUser,
} from '@tabler/icons-react'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { languages } from '@/features/commands/data/data'
import type { ExploreCommand } from '../data/schema'

const COLLAPSED_HEIGHT = 72

interface CommandCardProps {
  command: ExploreCommand
}

export function CommandCard({ command }: CommandCardProps) {
  const language = languages.find((l) => l.value === command.language)
  const authorName = command.profiles?.full_name ?? 'Anonymous'
  const commandTags = command.command_tags ?? []

  const codeRef = useRef<HTMLDivElement>(null)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const checkOverflow = useCallback(() => {
    const el = codeRef.current
    if (el) {
      setIsOverflowing(el.scrollHeight > COLLAPSED_HEIGHT)
    }
  }, [])

  useEffect(() => {
    checkOverflow()
  }, [checkOverflow, command.command_text])

  const handleCopy = () => {
    navigator.clipboard.writeText(command.command_text)
    toast.success('Command copied to clipboard')
  }

  return (
    <Card className='flex flex-col'>
      <CardHeader className='pb-3'>
        <div className='flex items-start justify-between gap-2'>
          <CardTitle className='line-clamp-1 text-base'>
            {command.title}
          </CardTitle>
          {language && (
            <Badge variant='secondary' className='shrink-0'>
              {language.label}
            </Badge>
          )}
        </div>
        {command.description && (
          <CardDescription className='line-clamp-2'>
            {command.description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className='flex-1 pb-3'>
        <div className='relative overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 dark:border-zinc-600 dark:bg-zinc-950'>
          <div className='flex items-center justify-between border-b border-zinc-700 bg-zinc-800 px-3 py-1.5 dark:border-zinc-600 dark:bg-zinc-900'>
            <div className='flex items-center gap-1.5'>
              <span className='inline-block h-2.5 w-2.5 rounded-full bg-red-500' />
              <span className='inline-block h-2.5 w-2.5 rounded-full bg-yellow-500' />
              <span className='inline-block h-2.5 w-2.5 rounded-full bg-green-500' />
            </div>
            <div className='flex items-center gap-1 text-xs text-zinc-400'>
              <IconTerminal2 size={12} />
              <span>{language?.label ?? 'terminal'}</span>
            </div>
            <Button
              variant='ghost'
              size='icon'
              className='h-6 w-6 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-100'
              onClick={handleCopy}
            >
              <IconCopy size={13} />
            </Button>
          </div>
          <div
            ref={codeRef}
            className='overflow-x-auto px-3 py-2.5 transition-[max-height] duration-200'
            style={{ maxHeight: expanded ? 300 : COLLAPSED_HEIGHT }}
          >
            <code className='block font-mono text-[13px] leading-relaxed break-all whitespace-pre-wrap text-green-400'>
              <span className='text-zinc-500 select-none'>$ </span>
              {command.command_text}
            </code>
          </div>
          {isOverflowing && (
            <button
              type='button'
              onClick={() => setExpanded((v) => !v)}
              className='flex w-full items-center justify-center gap-1 border-t border-zinc-700 bg-zinc-800/80 py-1 text-[11px] text-zinc-400 transition-colors hover:text-zinc-200 dark:border-zinc-600'
            >
              {expanded ? (
                <>
                  <IconChevronUp size={12} /> Collapse
                </>
              ) : (
                <>
                  <IconChevronDown size={12} /> Show more
                </>
              )}
            </button>
          )}
        </div>
        {commandTags.length > 0 && (
          <div className='mt-2 flex flex-wrap gap-1'>
            {commandTags.map((ct) =>
              ct.tags ? (
                <Badge
                  key={ct.tag_id}
                  variant='secondary'
                  className='rounded-sm px-1.5 py-0 text-xs font-normal'
                  style={
                    ct.tags.color
                      ? {
                          backgroundColor: `${ct.tags.color}20`,
                          color: ct.tags.color,
                          borderColor: `${ct.tags.color}40`,
                        }
                      : undefined
                  }
                >
                  {ct.tags.name}
                </Badge>
              ) : null
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className='text-muted-foreground flex items-center justify-between text-sm'>
        <div className='flex items-center gap-1.5'>
          <IconUser size={14} />
          <span>{authorName}</span>
        </div>
        <span className='tabular-nums'>
          {command.usage_count} use{command.usage_count !== 1 ? 's' : ''}
        </span>
      </CardFooter>
    </Card>
  )
}
