import React from 'react'
import Footer from '@/features/landing_page/components/footer'
import Navbar from '@/features/landing_page/components/nav_bar'

interface LayoutProps {
  children: React.ReactNode
  hideFooter?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, hideFooter = false }) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <main className='grow pt-16'>{children}</main>
      {!hideFooter && <Footer />}
    </div>
  )
}

export default Layout
