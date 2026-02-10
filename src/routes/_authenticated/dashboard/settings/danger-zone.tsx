import { createFileRoute } from '@tanstack/react-router'
import SettingsDangerZone from '@/features/admin/pages/settings/danger-zone'

export const Route = createFileRoute(
  '/_authenticated/dashboard/settings/danger-zone'
)({
  component: SettingsDangerZone,
})
