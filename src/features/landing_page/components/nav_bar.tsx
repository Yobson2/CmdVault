import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import { IconTerminal2 } from '@tabler/icons-react'
import { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md'>
      <div className='container mx-auto flex items-center justify-between px-4 py-4'>
        {/* Logo */}
        <Link
          to='/'
          className='flex items-center space-x-2 transition-transform duration-300 hover:scale-105'
        >
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 shadow-md'>
            <IconTerminal2 className='h-6 w-6 text-white' />
          </div>
          <span className='bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-xl font-bold text-transparent'>
            CmdVault
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden items-center space-x-8 md:flex'>
          <a
            href='#features'
            className='text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-cyan-600'
          >
            Features
          </a>
          <a
            href='#how-it-works'
            className='text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-cyan-600'
          >
            How it Works
          </a>
          <a
            href='#community'
            className='text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-cyan-600'
          >
            Community
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className='hidden items-center space-x-3 md:flex'>
          <Link to='/sign-in'>
            <Button
              variant='ghost'
              size='sm'
              className='text-gray-700 hover:text-cyan-600'
            >
              Sign In
            </Button>
          </Link>
          <Link to='/sign-up'>
            <Button
              size='sm'
              className='bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md transition duration-300 hover:opacity-90'
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='p-2 text-gray-700 hover:text-cyan-600 md:hidden'
          aria-label='Toggle menu'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            {isMobileMenuOpen ? (
              <path d='M18 6L6 18M6 6l12 12' />
            ) : (
              <path d='M3 12h18M3 6h18M3 18h18' />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='absolute top-full left-0 right-0 border-t border-gray-200 bg-white shadow-lg md:hidden'>
            <nav className='space-y-1 px-4 py-4'>
              <a
                href='#features'
                className='block rounded-md px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-indigo-50 hover:text-cyan-600'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href='#how-it-works'
                className='block rounded-md px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-indigo-50 hover:text-cyan-600'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How it Works
              </a>
              <a
                href='#community'
                className='block rounded-md px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-indigo-50 hover:text-cyan-600'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Community
              </a>

              <div className='space-y-2 border-t border-gray-200 pt-4'>
                <Link
                  to='/sign-in'
                  className='block w-full'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant='outline'
                    size='sm'
                    className='w-full justify-center'
                  >
                    Sign In
                  </Button>
                </Link>
                <Link
                  to='/sign-up'
                  className='block w-full'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    size='sm'
                    className='w-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white transition duration-300 hover:opacity-90'
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
