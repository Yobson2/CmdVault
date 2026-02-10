import { createFileRoute } from '@tanstack/react-router'
import SettingsExport from '@/features/admin/pages/settings/export'

export const Route = createFileRoute(
  '/_authenticated/dashboard/settings/export'
)({
  component: SettingsExport,
})
