import Driver from '@/features/landing_page/pages/services/chauffeurs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/services/chauffeurs')({
  component: Driver,
})
