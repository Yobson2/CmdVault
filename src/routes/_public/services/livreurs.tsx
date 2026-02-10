import { createFileRoute } from '@tanstack/react-router'
import Delivery from '@/features/landing_page/pages/services/livreurs'

export const Route = createFileRoute('/_public/services/livreurs')({
  component: Delivery,
})
