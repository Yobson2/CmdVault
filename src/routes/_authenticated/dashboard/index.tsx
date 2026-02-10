import { createFileRoute } from '@tanstack/react-router'
import DashboardAdmin from '@/features/admin'

export const Route = createFileRoute('/_authenticated/dashboard/')({
  component: DashboardAdmin,
})
