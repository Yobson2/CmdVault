import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import Layout from '@/components/layout/landing-page-layout'
import {
  IconTerminal2,
  IconUsers,
  IconWorldSearch,
  IconStar,
} from '@tabler/icons-react'

const About = () => {
  const timeline = [
    {
      year: '2024',
      title: 'CmdVault Launched',
      description:
        'Started as a personal tool to stop losing useful commands buried in terminal history.',
    },
    {
      year: '2024',
      title: 'Tags & Organization',
      description:
        'Added tagging, language detection, and category filtering to make commands easy to find.',
    },
    {
      year: '2025',
      title: 'Team Collaboration',
      description:
        'Introduced team features so engineering teams can share proven commands and onboard faster.',
    },
    {
      year: '2025',
      title: 'Community Explore',
      description:
        'Opened the public vault so developers worldwide can discover and share battle-tested commands.',
    },
  ]

  const features = [
    {
      icon: IconTerminal2,
      title: 'Store',
      description:
        'Save any command with context: description, language, category, and tags.',
    },
    {
      icon: IconStar,
      title: 'Favorite',
      description:
        'Star the commands you use most for instant access.',
    },
    {
      icon: IconWorldSearch,
      title: 'Explore',
      description:
        'Browse public commands shared by developers around the world.',
    },
    {
      icon: IconUsers,
      title: 'Collaborate',
      description:
        'Share commands with your team. Stop reinventing the wheel.',
    },
  ]

  return (
    <Layout>
      {/* Hero section */}
      <div className='relative flex min-h-[40vh] items-center justify-center bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900'>
        <div className='container z-10 mx-auto px-4 py-16 text-center'>
          <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
            About CmdVault
          </h1>
          <p className='mx-auto max-w-2xl text-xl text-indigo-200'>
            An intelligent vault for storing, reusing, and sharing proven
            commands. Turn effective commands into reusable knowledge.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-3xl'>
            <h2 className='mb-6 text-center text-3xl font-bold'>
              Our Mission
            </h2>
            <p className='mb-8 text-center text-lg'>
              Help developers stop losing useful commands and start building a
              shared library of proven solutions.
            </p>

            <div className='mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2'>
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className='flex gap-4'>
                    <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600'>
                      <Icon className='h-6 w-6 text-white' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold'>
                        {feature.title}
                      </h3>
                      <p className='text-muted-foreground'>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className='bg-muted/30 py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='mb-12 text-center text-3xl font-bold'>Our Journey</h2>

          <div className='mx-auto max-w-2xl space-y-8'>
            {timeline.map((item, index) => (
              <div key={index} className='flex gap-4'>
                <div className='flex flex-col items-center'>
                  <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 text-xs font-bold text-white'>
                    {item.year.slice(2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className='mt-2 h-full w-px bg-indigo-200' />
                  )}
                </div>
                <div className='pb-8'>
                  <h3 className='text-lg font-semibold'>{item.title}</h3>
                  <p className='text-muted-foreground'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-gradient-to-r from-indigo-950 to-slate-900 py-12 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='mb-6 text-2xl font-bold md:text-3xl'>
            Start Building Your Vault
          </h2>
          <p className='mx-auto mb-8 max-w-2xl text-indigo-200'>
            Join developers who save time by keeping their best commands
            organized and ready to use.
          </p>
          <div className='flex flex-col justify-center gap-4 sm:flex-row'>
            <Link to='/sign-up'>
              <Button size='lg' variant='secondary'>
                Get Started
              </Button>
            </Link>
            <Link to='/contact'>
              <Button
                variant='outline'
                size='lg'
                className='border-white/20 text-white hover:bg-white/20'
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
