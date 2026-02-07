import {
  IconAlertTriangle,
  IconDownload,
  IconLayoutDashboard,
  IconPalette,
  IconSettings,
  IconShield,
  IconStar,
  IconTag,
  IconTerminal2,
  IconUser,
  IconUsersGroup,
  IconWorldSearch,
} from '@tabler/icons-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'User',
    email: 'user@cmdvault.dev',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'CmdVault',
      logo: IconTerminal2,
      plan: 'Command Vault',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/dashboard',
          icon: IconLayoutDashboard,
        },
        {
          title: 'My Commands',
          url: '/commands',
          icon: IconTerminal2,
        },
        {
          title: 'Favorites',
          url: '/favorites',
          icon: IconStar,
        },
        {
          title: 'Tags',
          url: '/tags',
          icon: IconTag,
        },
        {
          title: 'Explore',
          url: '/explore',
          icon: IconWorldSearch,
        },
        {
          title: 'Teams',
          url: '/teams',
          icon: IconUsersGroup,
        },
        {
          title: 'Settings',
          icon: IconSettings,
          items: [
            {
              title: 'Profile',
              url: '/dashboard/settings',
              icon: IconUser,
            },
            {
              title: 'Appearance',
              url: '/dashboard/settings/appearance',
              icon: IconPalette,
            },
            {
              title: 'Command Defaults',
              url: '/dashboard/settings/command-defaults',
              icon: IconTerminal2,
            },
            {
              title: 'Security',
              url: '/dashboard/settings/security',
              icon: IconShield,
            },
            {
              title: 'Export',
              url: '/dashboard/settings/export',
              icon: IconDownload,
            },
            {
              title: 'Danger Zone',
              url: '/dashboard/settings/danger-zone',
              icon: IconAlertTriangle,
            },
          ],
        },
      ],
    },
  ],
}
