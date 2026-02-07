import SettingsExport from '@/features/admin/pages/settings/export'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authenticated/dashboard/settings/export',
)({
  component: SettingsExport,
})
