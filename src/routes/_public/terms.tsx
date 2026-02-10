import TermsPage from '@/features/landing_page/pages/terms'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/terms')({
  component: TermsPage,
})
