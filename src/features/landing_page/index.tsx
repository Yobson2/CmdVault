import { useRef } from 'react'
import { Link } from '@tanstack/react-router'
import {
  IconTerminal2,
  IconSearch,
  IconUsers,
  IconBookmark,
  IconTags,
  IconRefresh,
  IconArrowRight,
  IconCopy,
  IconStar,
  IconTrendingUp,
  IconUpload,
  IconShieldCheck,
} from '@tabler/icons-react'
import { useScrollAnimations } from '@/hooks/use-scroll-animations'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Layout from '@/components/layout/landing-page-layout'

const features = [
  {
    icon: IconTerminal2,
    title: 'Store & Organize',
    description:
      'Save your most useful commands in one place. Add descriptions, tags, and notes so you never lose track.',
  },
  {
    icon: IconSearch,
    title: 'Search & Reuse',
    description:
      'Instantly find the right command when you need it. Filter by language, tag, or keyword.',
  },
  {
    icon: IconUsers,
    title: 'Share with Teams',
    description:
      'Collaborate with your team by sharing proven commands. Stop reinventing the wheel.',
  },
]

const steps = [
  {
    icon: IconBookmark,
    step: '1',
    title: 'Save a Command',
    description: 'Paste any command and add a description of what it does.',
  },
  {
    icon: IconTags,
    step: '2',
    title: 'Organize with Tags',
    description:
      'Tag commands by language, project, or purpose for easy lookup.',
  },
  {
    icon: IconRefresh,
    step: '3',
    title: 'Reuse Anywhere',
    description:
      'Find and copy your commands in seconds whenever you need them.',
  },
]

const languages = ['Bash', 'PowerShell', 'Python', 'SQL', 'JavaScript']

const communityCommands = [
  {
    language: 'Bash',
    languageColor: 'from-emerald-500 to-green-600',
    command: 'docker system prune -af --volumes',
    description:
      'Remove all unused containers, images, networks, and volumes to reclaim disk space.',
    author: 'sarah_devops',
    stars: 128,
  },
  {
    language: 'Python',
    languageColor: 'from-yellow-500 to-amber-600',
    command: 'python -m json.tool < input.json > formatted.json',
    description:
      'Pretty-print and validate a JSON file from the command line — no dependencies needed.',
    author: 'marco_py',
    stars: 96,
  },
  {
    language: 'SQL',
    languageColor: 'from-blue-500 to-indigo-600',
    command:
      "SELECT table_name, pg_size_pretty(pg_total_relation_size(quote_ident(table_name))) FROM information_schema.tables WHERE table_schema = 'public' ORDER BY pg_total_relation_size(quote_ident(table_name)) DESC;",
    description:
      'List all tables in a PostgreSQL database sorted by total size, including indexes.',
    author: 'dba_alex',
    stars: 74,
  },
]

const communityPillars = [
  {
    icon: IconTrendingUp,
    title: 'Discover',
    description:
      'Browse trending commands shared by developers worldwide. Find battle-tested solutions instantly.',
  },
  {
    icon: IconUpload,
    title: 'Contribute',
    description:
      'Share the commands you rely on. Help others skip the trial-and-error and get straight to what works.',
  },
  {
    icon: IconShieldCheck,
    title: 'Curate',
    description:
      'Star the best commands, build public collections, and help the community surface the most useful tools.',
  },
]

export function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollAnimations({ containerRef })

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero Section */}
        <section className='relative flex min-h-[90vh] items-center bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]'></div>

          <div className='relative z-10 container mx-auto px-4'>
            <div className='mx-auto max-w-3xl text-center text-white'>
              <div
                data-animate='hero-badge'
                className='mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm'
              >
                <IconTerminal2 className='h-5 w-5' />
                <span className='text-sm font-medium'>CmdVault</span>
              </div>

              <h1
                data-animate='hero-heading'
                className='mb-6 text-5xl leading-tight font-bold md:text-6xl lg:text-7xl'
              >
                Your Command{' '}
                <span className='bg-gradient-to-r from-cyan-300 to-teal-200 bg-clip-text text-transparent'>
                  Vault
                </span>
              </h1>

              <p
                data-animate='hero-subtitle'
                className='mb-10 text-xl text-indigo-200'
              >
                Store, reuse, and share proven commands. Stop searching through
                history — build a personal library of commands that work.
              </p>

              <div
                data-animate='hero-buttons'
                className='flex flex-col justify-center gap-4 sm:flex-row'
              >
                <Link to='/sign-up'>
                  <Button
                    size='lg'
                    variant='secondary'
                    className='group text-lg'
                  >
                    Get Started
                    <IconArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
                  </Button>
                </Link>
                <Link to='/sign-in'>
                  <Button
                    size='lg'
                    variant='outline'
                    className='border-white/20 bg-white/10 text-lg text-white hover:bg-white/20'
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id='features' className='bg-white py-20'>
          <div className='container mx-auto px-4'>
            <div className='mb-16 text-center' data-animate='fade-up'>
              <h2 className='mb-4 text-4xl font-bold md:text-5xl'>
                Everything You Need
              </h2>
              <p className='mx-auto max-w-2xl text-xl text-gray-600'>
                A smarter way to manage the commands you use every day
              </p>
            </div>

            <div className='mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3'>
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card
                    key={feature.title}
                    data-animate-group='features'
                    data-animate-index={index}
                    className='border-none shadow-lg transition-shadow hover:shadow-xl'
                  >
                    <CardHeader>
                      <div className='mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600'>
                        <Icon className='h-7 w-7 text-white' />
                      </div>
                      <CardTitle className='text-xl'>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600'>{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id='how-it-works'
          className='bg-gradient-to-br from-indigo-50 to-slate-50 py-20'
        >
          <div className='container mx-auto px-4'>
            <div className='mb-16 text-center' data-animate='fade-up'>
              <h2 className='mb-4 text-4xl font-bold'>How It Works</h2>
              <p className='mx-auto max-w-2xl text-xl text-gray-600'>
                Three simple steps to never lose a useful command again
              </p>
            </div>

            <div className='mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3'>
              {steps.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.step}
                    data-animate-group='steps'
                    data-animate-index={index}
                    className='text-center'
                  >
                    <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600'>
                      <Icon className='h-8 w-8 text-white' />
                    </div>
                    <div className='mb-2 text-sm font-semibold text-cyan-600'>
                      Step {item.step}
                    </div>
                    <h3 className='mb-2 text-xl font-bold'>{item.title}</h3>
                    <p className='text-gray-600'>{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Community Vault Section */}
        <section
          id='community'
          className='relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 py-24'
        >
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(6,182,212,0.1),transparent_50%)]' />

          <div className='relative z-10 container mx-auto px-4'>
            {/* Header */}
            <div className='mb-6 text-center' data-animate='fade-up'>
              <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-300'>
                <IconUsers className='h-4 w-4' />
                Community
              </div>
            </div>
            <div
              className='mx-auto mb-16 max-w-2xl text-center'
              data-animate='fade-up'
            >
              <h2 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
                Shared by Developers,{' '}
                <span className='bg-gradient-to-r from-cyan-300 to-teal-200 bg-clip-text text-transparent'>
                  for Developers
                </span>
              </h2>
              <p className='text-lg text-indigo-200'>
                The best commands come from real-world experience. Browse what
                others have shared, contribute your own, and build on proven
                solutions.
              </p>
            </div>

            {/* Mock command cards */}
            <div className='mx-auto mb-20 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3'>
              {communityCommands.map((cmd, index) => (
                <div
                  key={cmd.author}
                  data-animate-group='community-commands'
                  data-animate-index={index}
                  className='group rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors hover:border-cyan-400/30 hover:bg-white/[0.07]'
                >
                  {/* Card header */}
                  <div className='mb-3 flex items-center justify-between'>
                    <span
                      className={`inline-flex rounded-md bg-gradient-to-r ${cmd.languageColor} px-2.5 py-0.5 text-xs font-semibold text-white`}
                    >
                      {cmd.language}
                    </span>
                    <div className='flex items-center gap-1 text-amber-400'>
                      <IconStar className='h-3.5 w-3.5 fill-current' />
                      <span className='text-xs font-medium'>{cmd.stars}</span>
                    </div>
                  </div>

                  {/* Command */}
                  <div className='relative mb-3 rounded-lg bg-slate-950/60 p-3'>
                    <code className='scrollbar-thin block overflow-x-auto text-[13px] leading-relaxed text-cyan-200'>
                      {cmd.command}
                    </code>
                    <button
                      className='absolute top-2 right-2 rounded-md p-1 text-indigo-400 opacity-0 transition-opacity group-hover:opacity-100 hover:text-cyan-300'
                      aria-label='Copy command'
                      type='button'
                    >
                      <IconCopy className='h-3.5 w-3.5' />
                    </button>
                  </div>

                  {/* Description */}
                  <p className='mb-4 text-sm leading-relaxed text-indigo-200/80'>
                    {cmd.description}
                  </p>

                  {/* Author */}
                  <div className='flex items-center gap-2 border-t border-white/5 pt-3'>
                    <div className='flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 text-[10px] font-bold text-white'>
                      {cmd.author[0].toUpperCase()}
                    </div>
                    <span className='text-xs text-indigo-300'>
                      @{cmd.author}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Community pillars */}
            <div className='mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3'>
              {communityPillars.map((pillar, index) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={pillar.title}
                    data-animate-group='community-pillars'
                    data-animate-index={index}
                    className='text-center'
                  >
                    <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10'>
                      <Icon className='h-6 w-6 text-cyan-400' />
                    </div>
                    <h3 className='mb-2 text-lg font-semibold text-white'>
                      {pillar.title}
                    </h3>
                    <p className='text-sm leading-relaxed text-indigo-200/70'>
                      {pillar.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Community CTA */}
            <div className='mt-14 text-center' data-animate='fade-up'>
              <Link to='/sign-up'>
                <Button
                  size='lg'
                  className='group bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 hover:opacity-90'
                >
                  Join the Community
                  <IconArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Supported Languages Section */}
        <section className='bg-white py-20'>
          <div className='container mx-auto px-4'>
            <div className='mb-12 text-center' data-animate='fade-up'>
              <h2 className='mb-4 text-4xl font-bold'>Supported Languages</h2>
              <p className='mx-auto max-w-2xl text-xl text-gray-600'>
                Store commands for any language or tool you use
              </p>
            </div>

            <div className='flex flex-wrap justify-center gap-4'>
              {languages.map((lang, index) => (
                <div
                  key={lang}
                  data-animate-group='languages'
                  data-animate-index={index}
                  className='rounded-full border border-indigo-200 bg-indigo-50 px-6 py-3 text-sm font-semibold text-indigo-700 shadow-sm'
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='bg-gradient-to-r from-indigo-950 to-slate-900 py-20 text-white'>
          <div
            className='container mx-auto px-4 text-center'
            data-animate='fade-up'
          >
            <h2 className='mb-6 text-4xl font-bold md:text-5xl'>
              Start Building Your Vault
            </h2>
            <p className='mx-auto mb-10 max-w-2xl text-xl text-indigo-200'>
              Join developers who save time by keeping their best commands
              organized and ready to use.
            </p>
            <Link to='/sign-up'>
              <Button size='lg' variant='secondary' className='group text-lg'>
                Get Started — It&apos;s Free
                <IconArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}
