import Delivery from '@/features/landing_page/pages/services/livreurs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/services/livreurs')({
  component: Delivery,
})

