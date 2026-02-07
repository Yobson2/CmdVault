import SettingsProfile from '@/features/admin/pages/settings/profile'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/dashboard/settings/')({
  component: SettingsProfile,
})
