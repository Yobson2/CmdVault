import { Link } from '@tanstack/react-router'
import { IconBrandGithub, IconTerminal2 } from '@tabler/icons-react'

const Footer = () => {
  return (
    <footer className='bg-slate-950 pt-12 pb-6 text-white'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {/* Brand */}
          <div>
            <div className='mb-4 flex items-center gap-2'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600'>
                <IconTerminal2 className='h-6 w-6 text-white' />
              </div>
              <span className='text-xl font-bold'>CmdVault</span>
            </div>
            <p className='mb-4 text-gray-400'>
              Store, reuse, and share proven commands. Build a personal library
              of commands that work.
            </p>
            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex text-gray-400 transition-colors hover:text-cyan-400'
              aria-label='GitHub'
            >
              <IconBrandGithub className='h-6 w-6' />
            </a>
          </div>

          {/* Product */}
          <div>
            <h3 className='mb-4 text-lg font-semibold'>Product</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#features'
                  className='text-gray-400 transition-colors hover:text-cyan-400'
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href='#how-it-works'
                  className='text-gray-400 transition-colors hover:text-cyan-400'
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href='#community'
                  className='text-gray-400 transition-colors hover:text-cyan-400'
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className='mb-4 text-lg font-semibold'>Account</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/sign-in'
                  className='text-gray-400 transition-colors hover:text-cyan-400'
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to='/sign-up'
                  className='text-gray-400 transition-colors hover:text-cyan-400'
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className='mb-4 text-lg font-semibold'>Legal</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/terms'
                  className='text-gray-400 transition-colors hover:text-cyan-400'
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to='/privacy'
                  className='text-gray-400 transition-colors hover:text-cyan-400'
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-400'>
          <p>&copy; {new Date().getFullYear()} CmdVault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
