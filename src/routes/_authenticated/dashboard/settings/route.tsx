import { createFileRoute } from '@tanstack/react-router'
import Settings from '@/features/admin/pages/settings'

export const Route = createFileRoute('/_authenticated/dashboard/settings')({
  component: Settings,
})
