import { createFileRoute, Outlet } from '@tanstack/react-router'
import { SidebarProvider } from '@/components/ui/sidebar'

export const Route = createFileRoute('/_public')({
  component: () => (
    <SidebarProvider>
      <Outlet />
    </SidebarProvider>
  ),
})
