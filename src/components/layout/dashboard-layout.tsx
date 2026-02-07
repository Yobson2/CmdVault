import React from 'react'
import { useLocation } from '@tanstack/react-router'
import { Sidebar } from './sidebar'
import { Header } from './header'
import { Main } from './main'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { cn } from '@/lib/utils'

interface DashboardLayoutProps {
  children: React.ReactNode
  className?: string
}

export function DashboardLayout({ children, className }: DashboardLayoutProps) {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar activePath={currentPath} />
      
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header>
          <Search />
          <div className='ml-auto flex items-center space-x-4'>
            <ThemeSwitch />
            <ProfileDropdown />
          </div>
        </Header>
        
        <Main className={cn("flex-1 overflow-auto", className)}>
          {children}
        </Main>
      </div>
    </div>
  )
} 