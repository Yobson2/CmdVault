import { createFileRoute } from '@tanstack/react-router'
import TermsPage from '@/features/landing_page/pages/terms'

export const Route = createFileRoute('/_public/terms')({
  component: TermsPage,
})
