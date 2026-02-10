import { Link } from '@tanstack/react-router'
import {
  IconTerminal2,
  IconSearch,
  IconTag,
  IconUsers,
} from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Layout from '@/components/layout/landing-page-layout'

export default function AboutPage() {
  const values = [
    {
      icon: <IconTerminal2 className='h-8 w-8 text-indigo-600' />,
      title: 'Command-First',
      description:
        'Every feature is designed around the core workflow: save a command, find it fast, use it again.',
    },
    {
      icon: <IconSearch className='h-8 w-8 text-indigo-600' />,
      title: 'Instant Retrieval',
      description:
        'Search by title, language, tag, or command text. Your entire vault is one keystroke away.',
    },
    {
      icon: <IconTag className='h-8 w-8 text-indigo-600' />,
      title: 'Organized',
      description:
        'Tags, categories, and languages keep your commands structured as your vault grows.',
    },
    {
      icon: <IconUsers className='h-8 w-8 text-indigo-600' />,
      title: 'Collaborative',
      description:
        'Share commands with your team or the community. Great commands deserve to be reused.',
    },
  ]

  const stats = [
    { number: '6+', label: 'Languages Supported' },
    { number: '6', label: 'Categories' },
    { number: '3', label: 'Visibility Levels' },
    { number: '100%', label: 'Open & Free' },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-indigo-950 to-slate-900 py-20 text-white'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-4xl text-center'>
            <h1 className='mb-6 text-4xl font-bold md:text-6xl'>
              About CmdVault
            </h1>
            <p className='mb-8 text-xl text-indigo-200'>
              An intelligent vault for storing, reusing, and sharing proven
              commands. Turn effective commands into reusable knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='mb-6 text-center text-3xl font-bold'>
              Why CmdVault?
            </h2>
            <div className='prose prose-lg mx-auto max-w-none'>
              <p className='text-muted-foreground mb-4'>
                Every developer has been there: you solved a tricky problem with
                the perfect command, but a week later you can&apos;t remember
                what it was. You scroll through terminal history, search old
                Slack messages, or just figure it out again from scratch.
              </p>
              <p className='text-muted-foreground mb-4'>
                CmdVault was built to end that cycle. It&apos;s a personal
                library where you save commands with context — what they do,
                when to use them, and what language they belong to. Tags and
                categories keep everything organized, and a powerful search puts
                any command at your fingertips.
              </p>
              <p className='text-muted-foreground'>
                But the real power is sharing. Make your best commands public
                for the community, or keep them within your team. Great commands
                deserve to be reused, not rediscovered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className='bg-muted/30 py-16'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='mb-2 text-4xl font-bold text-indigo-600 md:text-5xl'>
                  {stat.number}
                </div>
                <div className='text-muted-foreground font-medium'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-5xl'>
            <h2 className='mb-12 text-center text-3xl font-bold'>
              Core Principles
            </h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
              {values.map((value, index) => (
                <Card key={index} className='border-none shadow-lg'>
                  <CardContent className='p-8'>
                    <div className='mb-4'>{value.icon}</div>
                    <h3 className='mb-3 text-xl font-bold'>{value.title}</h3>
                    <p className='text-muted-foreground'>{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-gradient-to-r from-indigo-950 to-slate-900 py-16 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='mb-4 text-3xl font-bold'>Start Building Your Vault</h2>
          <p className='mx-auto mb-8 max-w-2xl text-xl text-indigo-200'>
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
                size='lg'
                variant='outline'
                className='border-white/20 text-white hover:bg-white/10'
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
