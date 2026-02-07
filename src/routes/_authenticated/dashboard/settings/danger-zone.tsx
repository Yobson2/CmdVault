import SettingsDangerZone from '@/features/admin/pages/settings/danger-zone'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authenticated/dashboard/settings/danger-zone',
)({
  component: SettingsDangerZone,
})
