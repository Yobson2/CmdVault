import { createFileRoute } from '@tanstack/react-router'
import SettingsProfile from '@/features/admin/pages/settings/profile'

export const Route = createFileRoute('/_authenticated/dashboard/settings/')({
  component: SettingsProfile,
})
