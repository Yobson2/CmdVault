import { createFileRoute } from '@tanstack/react-router'
import SettingsAppearance from '@/features/admin/pages/settings/appearance'

export const Route = createFileRoute(
  '/_authenticated/dashboard/settings/appearance'
)({
  component: SettingsAppearance,
})
