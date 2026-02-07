import Login from '@/features/landing_page/pages/login'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/_public/login')({
  // Optionnel : Rediriger si déjà authentifié
  // beforeLoad: ({ context }) => {
  //   if (context.auth.isAuthenticated) {
  //     throw redirect({ to: '/dashboard' });
  //   }
  // },
  component: Login,
}) 



