import { createFileRoute } from '@tanstack/react-router'
import SettingsCommandDefaults from '@/features/admin/pages/settings/command-defaults'

export const Route = createFileRoute(
  '/_authenticated/dashboard/settings/command-defaults'
)({
  component: SettingsCommandDefaults,
})
