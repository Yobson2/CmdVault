import { useState } from 'react'
import { IconDownload } from '@tabler/icons-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { getCommands } from '@/features/commands/services/commands-service'

export default function ExportActions() {
  const [isExporting, setIsExporting] = useState(false)

  async function handleExport() {
    setIsExporting(true)
    try {
      const commands = await getCommands()

      if (!commands || commands.length === 0) {
        toast.info('No commands to export')
        return
      }

      const json = JSON.stringify(commands, null, 2)
      const blob = new Blob([json], { type: 'application/json' })
      const url = URL.createObjectURL(blob)

      const date = new Date().toISOString().split('T')[0]
      const a = document.createElement('a')
      a.href = url
      a.download = `cmdvault-commands-${date}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      toast.success(`Exported ${commands.length} commands`)
    } catch {
      toast.error('Failed to export commands')
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div className='space-y-4'>
      <p className='text-muted-foreground text-sm'>
        Download all your commands as a JSON file. This can be used for backup
        or migration purposes.
      </p>
      <Button onClick={handleExport} disabled={isExporting}>
        <IconDownload className='mr-2 h-4 w-4' />
        {isExporting ? 'Exporting...' : 'Export Commands as JSON'}
      </Button>
    </div>
  )
}
