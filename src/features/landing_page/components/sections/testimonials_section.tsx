import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Marie Koné',
    role: 'Entrepreneure',
    quote:
      'IvoryRide a complètement changé mes habitudes de déplacement à Abidjan. Les chauffeurs sont toujours ponctuels et professionnels.',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    rating: 5,
  },
  {
    name: 'Ibrahim Touré',
    role: 'Cadre financier',
    quote:
      "Je peux enfin me concentrer sur mes réunions pendant les trajets grâce au confort et à la sécurité qu'offre IvoryRide.",
    avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    rating: 5,
  },
  {
    name: 'Aminata Diallo',
    role: 'Étudiante',
    quote:
      "L'application est tellement intuitive et les prix sont transparents. C'est parfait pour mon budget d'étudiante!",
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 4,
  },
]

const TestimonialsSection = () => {
  return (
    <section className='py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-3xl font-bold md:text-4xl'>
            Ce que disent nos clients
          </h2>
          <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
            Découvrez les expériences de nos utilisateurs à travers la Côte
            d'Ivoire
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className='bg-background border shadow-md transition-shadow hover:shadow-lg'
            >
              <CardContent className='pt-6'>
                <div className='flex flex-col items-center text-center'>
                  <div className='border-brand mb-4 h-16 w-16 overflow-hidden rounded-full border-2'>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className='h-full w-full object-cover'
                    />
                  </div>

                  <div className='mb-2 flex items-center'>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-brand' : 'text-muted-foreground/30'}`}
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                      </svg>
                    ))}
                  </div>

                  <p className='text-muted-foreground mb-4 italic'>
                    "{testimonial.quote}"
                  </p>

                  <div>
                    <h4 className='font-medium'>{testimonial.name}</h4>
                    <p className='text-muted-foreground text-sm'>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
