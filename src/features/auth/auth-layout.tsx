import { Link } from '@tanstack/react-router'
import { IconTerminal2 } from '@tabler/icons-react'

interface Props {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className='grid min-h-svh lg:grid-cols-2'>
      {/* Left panel — branding */}
      <div className='relative hidden flex-col justify-between bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 p-10 text-white lg:flex'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.06),transparent_60%)]' />

        <Link
          to='/'
          className='relative z-10 flex items-center gap-2 text-lg font-semibold'
        >
          <div className='flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600'>
            <IconTerminal2 className='h-5 w-5 text-white' />
          </div>
          CmdVault
        </Link>

        <div className='relative z-10 space-y-4'>
          <h2 className='text-3xl font-bold leading-tight'>
            Your commands,
            <span className='block bg-gradient-to-r from-cyan-300 to-teal-200 bg-clip-text text-transparent'>
              always ready.
            </span>
          </h2>
          <p className='max-w-sm text-indigo-200'>
            Store, organize, and share proven commands. Stop searching through
            history — build a library that works.
          </p>
        </div>

        <p className='relative z-10 text-sm text-indigo-300/60'>
          &copy; {new Date().getFullYear()} CmdVault
        </p>
      </div>

      {/* Right panel — form */}
      <div className='flex items-center justify-center p-6 sm:p-10'>
        <div className='w-full max-w-[440px] space-y-6'>
          {/* Mobile-only logo */}
          <div className='mb-2 flex items-center justify-center lg:hidden'>
            <Link to='/' className='flex items-center gap-2'>
              <div className='flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600'>
                <IconTerminal2 className='h-5 w-5 text-white' />
              </div>
              <span className='text-xl font-semibold'>CmdVault</span>
            </Link>
          </div>

          {children}
        </div>
      </div>
    </div>
  )
}
