import { Search, Navigation, Clock } from 'lucide-react'

const steps = [
  {
    icon: <Search className='h-8 w-8 text-white' />,
    title: '1. Entrez votre destination',
    description:
      "Ouvrez l'application et entrez votre adresse de départ et d'arrivée pour planifier votre trajet.",
  },
  {
    icon: <Navigation className='h-8 w-8 text-white' />,
    title: '2. Choisissez votre véhicule',
    description:
      'Sélectionnez parmi nos différentes catégories de véhicules selon vos besoins et votre budget.',
  },
  {
    icon: <Clock className='h-8 w-8 text-white' />,
    title: '3. Confirmez et profitez',
    description:
      "Validez votre réservation et suivez l'arrivée de votre chauffeur en temps réel.",
  },
]

const HowItWorksSection = () => {
  return (
    <section className='relative overflow-hidden py-16 md:py-24'>
      {/* Background gradient effect */}
      <div className='from-background to-muted/30 absolute inset-0 -z-10 bg-gradient-to-b' />

      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-3xl font-bold md:text-4xl'>
            Comment ça marche?
          </h2>
          <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
            Réserver votre trajet avec IvoryRide est simple et rapide
          </p>
        </div>

        <div className='relative'>
          {/* Connection line */}
          <div className='absolute top-24 left-1/2 hidden h-[calc(100%-120px)] w-1 -translate-x-1/2 bg-gradient-to-b from-[#FF8C00] to-[#00843D] md:block' />

          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            {steps.map((step, index) => (
              <div
                key={index}
                className='relative flex flex-col items-center text-center'
              >
                <div className='relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#FF8C00] to-[#00843D] p-4 shadow-lg'>
                  {step.icon}
                </div>
                <h3 className='mb-3 text-xl font-bold'>{step.title}</h3>
                <p className='text-muted-foreground'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
