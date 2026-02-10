import {
  IconTerminal2,
  IconStar,
  IconWorldSearch,
  IconUsersGroup,
} from '@tabler/icons-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const services = [
  {
    icon: IconTerminal2,
    title: 'Personal Vault',
    description:
      'Save commands with descriptions, tags, and language metadata. Your private library of proven commands.',
    color: 'from-cyan-500 to-indigo-600',
  },
  {
    icon: IconStar,
    title: 'Favorites',
    description:
      'Star your most-used commands for instant access. Never dig through history again.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: IconWorldSearch,
    title: 'Explore',
    description:
      'Discover public commands shared by the community. Find battle-tested solutions.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: IconUsersGroup,
    title: 'Teams',
    description:
      'Collaborate with your team. Share proven commands and stop reinventing the wheel.',
    color: 'from-violet-500 to-purple-600',
  },
]

const ServicesSection = () => {
  return (
    <section className='bg-muted/50 py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-3xl font-bold md:text-4xl'>
            Everything You Need
          </h2>
          <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
            A complete toolkit for managing, sharing, and discovering the
            commands you use every day.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className='overflow-hidden border-none shadow-lg transition-shadow hover:shadow-xl'
              >
                <div
                  className={`h-2 w-full bg-gradient-to-r ${service.color}`}
                />
                <CardHeader>
                  <div
                    className={`mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.color}`}
                  >
                    <Icon className='h-6 w-6 text-white' />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
