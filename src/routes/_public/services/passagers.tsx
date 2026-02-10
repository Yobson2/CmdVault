import { createFileRoute } from '@tanstack/react-router'
import Passagers from '@/features/landing_page/pages/services/passagers'

export const Route = createFileRoute('/_public/services/passagers')({
  component: Passagers,
})
