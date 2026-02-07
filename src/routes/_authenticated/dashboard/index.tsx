import DashboardAdmin from '@/features/admin'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/dashboard/')({
  component: DashboardAdmin,
})
