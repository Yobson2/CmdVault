import { createFileRoute } from '@tanstack/react-router'
import { MembershipForm } from '@/features/landing_page/components/forms/membership-form'

export const Route = createFileRoute('/_public/join')({
  component: JoinPage,
})

function JoinPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white py-12'>
      <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
        {/* Hero Section */}
        <div className='mb-12 text-center'>
          <h1 className='mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Join Our Association
          </h1>
          <p className='mx-auto max-w-2xl text-lg text-gray-600'>
            Become a member and be part of a vibrant community dedicated to
            student success, leadership development, and positive change.
          </p>
        </div>

        {/* Benefits Section */}
        <div className='mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200'>
            <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100'>
              <svg
                className='h-6 w-6 text-blue-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
            </div>
            <h3 className='mb-2 text-lg font-semibold text-gray-900'>
              Networking
            </h3>
            <p className='text-sm text-gray-600'>
              Connect with like-minded students and build lasting relationships
            </p>
          </div>

          <div className='rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200'>
            <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100'>
              <svg
                className='h-6 w-6 text-green-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                />
              </svg>
            </div>
            <h3 className='mb-2 text-lg font-semibold text-gray-900'>
              Leadership
            </h3>
            <p className='text-sm text-gray-600'>
              Develop leadership skills through hands-on experience and training
            </p>
          </div>

          <div className='rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200'>
            <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100'>
              <svg
                className='h-6 w-6 text-purple-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
            </div>
            <h3 className='mb-2 text-lg font-semibold text-gray-900'>Events</h3>
            <p className='text-sm text-gray-600'>
              Access exclusive events, workshops, and social gatherings
            </p>
          </div>
        </div>

        {/* Membership Form */}
        <div className='rounded-xl bg-white p-8 shadow-lg ring-1 ring-gray-200'>
          <div className='mb-6'>
            <h2 className='text-2xl font-bold text-gray-900'>
              Membership Application
            </h2>
            <p className='mt-2 text-sm text-gray-600'>
              Fill out the form below to submit your membership request. We'll
              review your application and get back to you within 3-5 business
              days.
            </p>
          </div>
          <MembershipForm />
        </div>

        {/* FAQ Section */}
        <div className='mt-12 text-center'>
          <p className='text-sm text-gray-600'>
            Have questions?{' '}
            <a
              href='/contact'
              className='font-medium text-blue-600 hover:text-blue-500'
            >
              Contact us
            </a>{' '}
            or check out our{' '}
            <a
              href='/faq'
              className='font-medium text-blue-600 hover:text-blue-500'
            >
              FAQ page
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
