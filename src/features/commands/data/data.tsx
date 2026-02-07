import {
  IconTerminal2,
  IconBrandPython,
  IconDatabase,
  IconBrandJavascript,
  IconCode,
  IconScript,
  IconCommand,
  IconFolder,
  IconRocket,
  IconFileCode,
  IconLock,
  IconUsers,
  IconWorld,
} from '@tabler/icons-react'

export const languages = [
  {
    value: 'bash',
    label: 'Bash',
    icon: IconTerminal2,
  },
  {
    value: 'powershell',
    label: 'PowerShell',
    icon: IconCommand,
  },
  {
    value: 'python',
    label: 'Python',
    icon: IconBrandPython,
  },
  {
    value: 'sql',
    label: 'SQL',
    icon: IconDatabase,
  },
  {
    value: 'javascript',
    label: 'JavaScript',
    icon: IconBrandJavascript,
  },
  {
    value: 'other',
    label: 'Other',
    icon: IconCode,
  },
]

export const categories = [
  {
    value: 'cli',
    label: 'CLI',
    icon: IconTerminal2,
  },
  {
    value: 'script',
    label: 'Script',
    icon: IconScript,
  },
  {
    value: 'prompt',
    label: 'Prompt',
    icon: IconCommand,
  },
  {
    value: 'workflow',
    label: 'Workflow',
    icon: IconRocket,
  },
  {
    value: 'process',
    label: 'Process',
    icon: IconFolder,
  },
  {
    value: 'snippet',
    label: 'Snippet',
    icon: IconFileCode,
  },
]

export const visibilities = [
  {
    value: 'private',
    label: 'Private',
    icon: IconLock,
  },
  {
    value: 'team',
    label: 'Team',
    icon: IconUsers,
  },
  {
    value: 'public',
    label: 'Public',
    icon: IconWorld,
  },
]
