import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Heart, Shield, Sparkles, Users2, Compass, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Layout from '@/components/layout/landing-page-layout'

export const Route = createFileRoute('/_public/mission')({
  component: MissionPage,
})

function MissionPage() {
  const coreValues = [
    {
      icon: <Heart className='h-12 w-12 text-red-500' />,
      title: 'Integrity',
      description:
        'We uphold the highest standards of honesty, ethics, and transparency in all our actions and decisions.',
    },
    {
      icon: <Users2 className='h-12 w-12 text-blue-500' />,
      title: 'Inclusivity',
      description:
        'We embrace diversity and create a welcoming environment where every student feels valued and respected.',
    },
    {
      icon: <Sparkles className='h-12 w-12 text-yellow-500' />,
      title: 'Excellence',
      description:
        'We strive for the highest quality in everything we do, from events to advocacy to member services.',
    },
    {
      icon: <Shield className='h-12 w-12 text-green-500' />,
      title: 'Accountability',
      description:
        'We take responsibility for our commitments and actions, ensuring transparency and follow-through.',
    },
    {
      icon: <Compass className='h-12 w-12 text-purple-500' />,
      title: 'Leadership',
      description:
        'We develop future leaders by providing opportunities for growth, mentorship, and hands-on experience.',
    },
    {
      icon: <Zap className='h-12 w-12 text-orange-500' />,
      title: 'Innovation',
      description:
        'We embrace new ideas and creative solutions to better serve our members and the student body.',
    },
  ]

  const objectives = [
    'Foster a sense of community and belonging among all students',
    'Provide leadership development opportunities and mentorship programs',
    'Advocate for student rights and represent student interests',
    'Organize engaging social, cultural, and educational events',
    'Support student wellness and mental health initiatives',
    'Facilitate networking and professional development',
    'Promote civic engagement and social responsibility',
    'Create partnerships with campus organizations and local community',
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-purple-600 to-blue-600 py-20 text-white'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-4xl text-center'>
            <h1 className='mb-6 text-4xl font-bold md:text-6xl'>
              Our Mission & Values
            </h1>
            <p className='text-xl text-blue-100'>
              Guided by our principles, driven by our purpose
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='mb-8 text-center text-3xl font-bold'>Our Mission</h2>
            <div className='rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-8 shadow-lg md:p-12'>
              <p className='text-center text-xl leading-relaxed text-gray-800 md:text-2xl'>
                To empower students through{' '}
                <span className='font-bold text-blue-600'>leadership</span>,
                <span className='font-bold text-purple-600'> community</span>,
                and
                <span className='font-bold text-blue-600'> service</span>,
                creating a vibrant campus culture where every student can
                thrive, connect, and make a lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='mb-8 text-center text-3xl font-bold'>Our Vision</h2>
            <div className='rounded-2xl border-2 border-blue-100 bg-white p-8 shadow-lg md:p-12'>
              <p className='text-center text-lg leading-relaxed text-gray-700 md:text-xl'>
                We envision a campus where every student is engaged, supported,
                and inspired to reach their full potential. A community where
                diversity is celebrated, voices are heard, and positive change
                is driven by student leadership and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-6xl'>
            <h2 className='mb-12 text-center text-3xl font-bold'>
              Our Core Values
            </h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {coreValues.map((value, index) => (
                <Card
                  key={index}
                  className='border-none shadow-lg transition-shadow hover:shadow-xl'
                >
                  <CardContent className='p-8 text-center'>
                    <div className='mb-4 flex justify-center'>{value.icon}</div>
                    <h3 className='mb-3 text-xl font-bold'>{value.title}</h3>
                    <p className='text-gray-600'>{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='mb-12 text-center text-3xl font-bold'>
              Our Objectives
            </h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm'
                >
                  <div className='mt-1'>
                    <svg
                      className='h-6 w-6 text-green-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                  <p className='text-gray-700'>{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-4xl text-center'>
            <h2 className='mb-6 text-3xl font-bold'>Our Commitment</h2>
            <p className='mb-8 text-lg leading-relaxed text-gray-700'>
              We are committed to creating tangible, positive change on our
              campus and in our community. Every event we organize, every
              initiative we launch, and every voice we amplify is guided by our
              mission and values. We measure our success not just by the number
              of members we have, but by the impact we make on individual
              students' lives and the campus culture as a whole.
            </p>
            <p className='text-lg leading-relaxed text-gray-700'>
              Together, we're building more than an organization – we're
              building a movement of engaged, empowered students ready to make a
              difference.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='mb-4 text-3xl font-bold'>Share Our Values?</h2>
          <p className='mx-auto mb-8 max-w-2xl text-xl text-blue-100'>
            If our mission resonates with you, we'd love to have you as part of
            our community.
          </p>
          <div className='flex flex-col justify-center gap-4 sm:flex-row'>
            <Link to='/join'>
              <Button size='lg' variant='secondary'>
                Join Our Association
              </Button>
            </Link>
            <Link to='/about'>
              <Button
                size='lg'
                variant='outline'
                className='border-white bg-transparent text-white hover:bg-white/10'
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
