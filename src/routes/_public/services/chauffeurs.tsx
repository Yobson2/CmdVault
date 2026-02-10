import { createFileRoute } from '@tanstack/react-router'
import Driver from '@/features/landing_page/pages/services/chauffeurs'

export const Route = createFileRoute('/_public/services/chauffeurs')({
  component: Driver,
})
