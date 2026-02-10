import React from 'react'
import { useLocation } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { Header } from './header'
import { Main } from './main'
import { Sidebar } from './sidebar'

interface DashboardLayoutProps {
  children: React.ReactNode
  className?: string
}

export function DashboardLayout({ children, className }: DashboardLayoutProps) {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <div className='flex h-screen w-full overflow-hidden'>
      <Sidebar activePath={currentPath} />

      <div className='flex flex-1 flex-col overflow-hidden'>
        <Header>
          <Search />
          <div className='ml-auto flex items-center space-x-4'>
            <ThemeSwitch />
            <ProfileDropdown />
          </div>
        </Header>

        <Main className={cn('flex-1 overflow-auto', className)}>
          {children}
        </Main>
      </div>
    </div>
  )
}
