import { Link } from '@tanstack/react-router'
import { Terminal, Search, Tag, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <div className='relative flex min-h-[90vh] items-center'>
      {/* Background gradient */}
      <div className='absolute inset-0 -z-10 bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900' />
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]' />

      <div className='z-10 container mx-auto px-4'>
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
          <div className='space-y-6'>
            <h1 className='text-4xl font-bold text-white md:text-5xl lg:text-6xl'>
              Your Command{' '}
              <span className='bg-gradient-to-r from-cyan-300 to-teal-200 bg-clip-text text-transparent'>
                Vault
              </span>
            </h1>
            <p className='text-lg text-indigo-200'>
              CmdVault helps you store, organize, and share proven commands.
              Stop searching through terminal history — build a library of
              commands that work.
            </p>
            <div className='flex flex-col gap-4 pt-4 sm:flex-row'>
              <Link to='/sign-up'>
                <Button size='lg' variant='secondary' className='text-lg'>
                  Get Started
                </Button>
              </Link>
              <Link to='/sign-in'>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-white/20 bg-white/10 text-lg text-white hover:bg-white/20'
                >
                  Sign In
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className='grid grid-cols-2 gap-4 pt-8 md:grid-cols-4'>
              <div className='flex flex-col items-center p-3 text-center'>
                <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10'>
                  <Terminal className='h-6 w-6 text-cyan-400' />
                </div>
                <h3 className='font-medium text-white'>Store Commands</h3>
              </div>
              <div className='flex flex-col items-center p-3 text-center'>
                <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10'>
                  <Search className='h-6 w-6 text-cyan-400' />
                </div>
                <h3 className='font-medium text-white'>Search Instantly</h3>
              </div>
              <div className='flex flex-col items-center p-3 text-center'>
                <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10'>
                  <Tag className='h-6 w-6 text-cyan-400' />
                </div>
                <h3 className='font-medium text-white'>Organize by Tags</h3>
              </div>
              <div className='flex flex-col items-center p-3 text-center'>
                <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10'>
                  <Users className='h-6 w-6 text-cyan-400' />
                </div>
                <h3 className='font-medium text-white'>Share with Teams</h3>
              </div>
            </div>
          </div>

          <div className='relative hidden lg:block'>
            <div className='rounded-xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-sm'>
              <div className='mb-4 flex items-center gap-2'>
                <div className='h-3 w-3 rounded-full bg-red-400' />
                <div className='h-3 w-3 rounded-full bg-yellow-400' />
                <div className='h-3 w-3 rounded-full bg-green-400' />
                <span className='ml-2 text-xs text-indigo-300'>terminal</span>
              </div>
              <div className='space-y-3 font-mono text-sm'>
                <div className='text-cyan-300'>
                  <span className='text-indigo-400'>$</span> docker system prune
                  -af --volumes
                </div>
                <div className='text-emerald-300'>
                  <span className='text-indigo-400'>$</span> git log --oneline
                  --graph --all
                </div>
                <div className='text-amber-300'>
                  <span className='text-indigo-400'>$</span> kubectl get pods -A
                  -o wide
                </div>
                <div className='text-rose-300'>
                  <span className='text-indigo-400'>$</span> find . -name
                  &quot;*.log&quot; -mtime +7 -delete
                </div>
                <div className='mt-4 text-xs text-indigo-400'>
                  # All saved in your CmdVault
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
