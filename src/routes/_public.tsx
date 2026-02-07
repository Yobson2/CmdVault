import { SidebarProvider } from '@/components/ui/sidebar'
import { createFileRoute, Outlet } from '@tanstack/react-router'


export const Route = createFileRoute('/_public')({
  component: () => (
    <SidebarProvider>
      <Outlet />
    </SidebarProvider>
  ),

}) 