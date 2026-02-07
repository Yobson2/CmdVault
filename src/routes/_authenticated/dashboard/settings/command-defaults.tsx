import SettingsCommandDefaults from '@/features/admin/pages/settings/command-defaults'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authenticated/dashboard/settings/command-defaults',
)({
  component: SettingsCommandDefaults,
})
