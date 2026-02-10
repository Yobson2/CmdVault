import { createFileRoute } from '@tanstack/react-router'
import PrivacyPage from '@/features/landing_page/pages/privacy'

export const Route = createFileRoute('/_public/privacy')({
  component: PrivacyPage,
})
