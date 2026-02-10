import PrivacyPage from '@/features/landing_page/pages/privacy'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/privacy')({
  component: PrivacyPage,
})
