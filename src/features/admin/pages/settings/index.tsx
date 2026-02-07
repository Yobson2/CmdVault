import { Outlet } from '@tanstack/react-router'
import {
  IconAlertTriangle,
  IconDownload,
  IconPalette,
  IconShield,
  IconTerminal2,
  IconUser,
} from '@tabler/icons-react'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import SidebarNav from './components/sidebar-nav'

export default function Settings() {
  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header fixed className='border-b border-border bg-background'>
        <div className='flex items-center gap-2'>
          <h1 className='text-lg font-semibold'>Settings</h1>
        </div>
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
           <ThemeSwitch />
          <ProfileDropdown />
        </div>
        
      </Header>

      <Main fixed>
        <div className='flex flex-1 flex-col space-y-2 overflow-hidden md:space-y-2 lg:flex-row lg:space-y-0 lg:space-x-12'>
          <aside className='top-0 lg:sticky lg:w-1/5'>
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className='flex w-full overflow-y-hidden p-1'>
            <Outlet />
          </div>
        </div>
      </Main>
    </>
  )
}

const sidebarNavItems = [
  {
    title: 'Profile',
    icon: <IconUser size={18} />,
    href: '/dashboard/settings',
  },
  {
    title: 'Appearance',
    icon: <IconPalette size={18} />,
    href: '/dashboard/settings/appearance',
  },
  {
    title: 'Command Defaults',
    icon: <IconTerminal2 size={18} />,
    href: '/dashboard/settings/command-defaults',
  },
  {
    title: 'Security',
    icon: <IconShield size={18} />,
    href: '/dashboard/settings/security',
  },
  {
    title: 'Export',
    icon: <IconDownload size={18} />,
    href: '/dashboard/settings/export',
  },
  {
    title: 'Danger Zone',
    icon: <IconAlertTriangle size={18} />,
    href: '/dashboard/settings/danger-zone',
  },
]
