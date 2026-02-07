import SettingsSecurity from '@/features/admin/pages/settings/security'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authenticated/dashboard/settings/security',
)({
  component: SettingsSecurity,
})
