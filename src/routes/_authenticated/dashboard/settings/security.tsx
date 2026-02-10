import { createFileRoute } from '@tanstack/react-router'
import SettingsSecurity from '@/features/admin/pages/settings/security'

export const Route = createFileRoute(
  '/_authenticated/dashboard/settings/security'
)({
  component: SettingsSecurity,
})
