import React from 'react'
import { Link } from '@tanstack/react-router'
import {
  IconTerminal2,
  IconStar,
  IconTag,
  IconWorldSearch,
  IconUsersGroup,
  IconSettings,
  IconLogout,
  IconLayoutDashboard,
} from '@tabler/icons-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface SidebarItemProps {
  href: string
  icon: React.ReactNode
  label: string
  active?: boolean
}

function SidebarItem({ href, icon, label, active }: SidebarItemProps) {
  return (
    <Link
      to={href}
      className={cn(
        'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
        active
          ? 'bg-primary/10 text-primary font-medium'
          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
      )}
    >
      <span className='flex h-5 w-5 items-center justify-center'>{icon}</span>
      <span>{label}</span>
    </Link>
  )
}

interface SidebarProps {
  className?: string
  activePath?: string
}

export function Sidebar({ className, activePath = '' }: SidebarProps) {
  const navItems = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: <IconLayoutDashboard size={18} stroke={1.5} />,
    },
    {
      label: 'My Commands',
      href: '/commands',
      icon: <IconTerminal2 size={18} stroke={1.5} />,
    },
    {
      label: 'Favorites',
      href: '/favorites',
      icon: <IconStar size={18} stroke={1.5} />,
    },
    {
      label: 'Tags',
      href: '/tags',
      icon: <IconTag size={18} stroke={1.5} />,
    },
    {
      label: 'Explore',
      href: '/explore',
      icon: <IconWorldSearch size={18} stroke={1.5} />,
    },
    {
      label: 'Teams',
      href: '/teams',
      icon: <IconUsersGroup size={18} stroke={1.5} />,
    },
    {
      label: 'Settings',
      href: '/dashboard/settings',
      icon: <IconSettings size={18} stroke={1.5} />,
    },
  ]

  return (
    <div
      className={cn(
        'bg-background flex h-full w-64 flex-col border-r',
        className
      )}
    >
      {/* Logo */}
      <div className='flex h-14 items-center border-b px-4'>
        <Link to='/' className='flex items-center gap-2 font-semibold'>
          <div className='bg-primary flex h-8 w-8 items-center justify-center rounded-md text-white'>
            <IconTerminal2 size={18} />
          </div>
          <span>CmdVault</span>
        </Link>
      </div>

      {/* Navigation */}
      <div className='flex-1 overflow-auto py-4'>
        <nav className='flex flex-col gap-1 px-2'>
          {navItems.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              active={activePath === item.href}
            />
          ))}
        </nav>
      </div>

      {/* User section */}
      <div className='border-t p-4'>
        <div className='flex items-center gap-3 px-2'>
          <div className='bg-muted flex h-9 w-9 items-center justify-center rounded-full'>
            <span className='text-sm font-medium'>CV</span>
          </div>
          <div className='flex-1 overflow-hidden'>
            <p className='truncate text-sm font-medium'>User</p>
            <p className='text-muted-foreground truncate text-xs'>
              user@cmdvault.dev
            </p>
          </div>
          <Button variant='ghost' size='icon' className='h-8 w-8'>
            <IconLogout size={18} />
          </Button>
        </div>
      </div>
    </div>
  )
}
