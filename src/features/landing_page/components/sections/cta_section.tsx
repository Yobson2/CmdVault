import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

const CTASection = () => {
  return (
    <section className='py-16'>
      <div className='container mx-auto px-4'>
        <div className='relative overflow-hidden rounded-3xl'>
          {/* Background with gradient overlay */}
          <div
            className='absolute inset-0 bg-cover bg-center'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1613553497126-a44624272024?q=80&w=1770&auto=format&fit=crop')`,
              filter: 'blur(2px)',
            }}
          />
          <div className='from-brand-dark/90 to-brand-dark/75 absolute inset-0 bg-gradient-to-r' />

          {/* Content */}
          <div className='relative flex flex-col items-center px-8 py-16 text-center md:px-12 md:py-24'>
            <h2 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
              Prêt à transformer vos déplacements?
            </h2>
            <p className='mx-auto mb-8 max-w-2xl text-lg text-gray-200'>
              Rejoignez les milliers d'Ivoiriens qui ont déjà adopté Adeio pour
              des trajets plus sûrs, plus confortables et plus fiables.
            </p>
            <div className='flex flex-col gap-4 sm:flex-row'>
              <Button size='lg' className='bg-brand hover:bg-brand/90'>
                Login l'application
              </Button>
              <Link to='/register'>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-white text-white hover:bg-white/20'
                >
                  Créer un compte
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
