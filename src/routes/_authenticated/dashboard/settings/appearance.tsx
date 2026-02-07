import SettingsAppearance from '@/features/admin/pages/settings/appearance'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authenticated/dashboard/settings/appearance',
)({
  component: SettingsAppearance,
})
