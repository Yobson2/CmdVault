import Passagers from '@/features/landing_page/pages/services/passagers'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/services/passagers')({
  component: Passagers,
})

