import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import {
  Calendar,
  Users,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  PartyPopper,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Layout from '@/components/layout/landing-page-layout'

export const Route = createFileRoute('/_public/activities')({
  component: ActivitiesPage,
})

function ActivitiesPage() {
  const activityCategories = [
    {
      icon: <PartyPopper className='h-10 w-10 text-pink-500' />,
      title: 'Social Events',
      description:
        'Build friendships and create memories through fun social gatherings',
      examples: [
        'Welcome Week Parties',
        'Game Nights',
        'Movie Screenings',
        'Cultural Celebrations',
      ],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: <GraduationCap className='h-10 w-10 text-blue-500' />,
      title: 'Workshops & Learning',
      description: 'Develop new skills and expand your knowledge',
      examples: [
        'Leadership Training',
        'Resume Writing',
        'Public Speaking',
        'Career Panels',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Briefcase className='h-10 w-10 text-purple-500' />,
      title: 'Professional Development',
      description:
        'Prepare for your future career with networking and industry insights',
      examples: [
        'Networking Mixers',
        'Industry Talks',
        'Mentorship Programs',
        'Job Fairs',
      ],
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: <HeartHandshake className='h-10 w-10 text-green-500' />,
      title: 'Community Service',
      description:
        'Make a difference through volunteer work and social impact projects',
      examples: [
        'Food Drives',
        'Campus Cleanups',
        'Tutoring Programs',
        'Charity Events',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Users className='h-10 w-10 text-orange-500' />,
      title: 'Student Advocacy',
      description:
        'Represent student interests and drive positive change on campus',
      examples: [
        'Town Halls',
        'Policy Forums',
        'Student Surveys',
        'Admin Meetings',
      ],
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: <Calendar className='h-10 w-10 text-indigo-500' />,
      title: 'Annual Traditions',
      description: 'Celebrate our heritage with signature annual events',
      examples: [
        'Fall Gala',
        'Spring Festival',
        'Award Ceremony',
        'Alumni Reunion',
      ],
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  const upcomingEvents = [
    {
      title: 'Welcome Week Kickoff',
      date: 'September 5, 2026',
      type: 'Social',
      description:
        'Start the semester strong with games, food, and new friends!',
    },
    {
      title: 'Resume Workshop',
      date: 'September 12, 2026',
      type: 'Professional',
      description: 'Learn how to craft a winning resume from career experts',
    },
    {
      title: 'Community Food Drive',
      date: 'September 20, 2026',
      type: 'Service',
      description: 'Help us collect food for local families in need',
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-indigo-600 to-purple-600 py-20 text-white'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-4xl text-center'>
            <h1 className='mb-6 text-4xl font-bold md:text-6xl'>
              Activities & Events
            </h1>
            <p className='text-xl text-indigo-100'>
              From social gatherings to professional development, there's always
              something happening in our community
            </p>
          </div>
        </div>
      </section>

      {/* Activity Categories */}
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-6xl'>
            <h2 className='mb-12 text-center text-3xl font-bold'>
              What We Offer
            </h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {activityCategories.map((category, index) => (
                <Card
                  key={index}
                  className='border-none shadow-lg transition-all hover:shadow-xl'
                >
                  <CardHeader>
                    <div className='mb-4 flex justify-center'>
                      {category.icon}
                    </div>
                    <CardTitle className='text-center text-xl'>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-4 text-center text-gray-600'>
                      {category.description}
                    </p>
                    <div className='space-y-2'>
                      {category.examples.map((example, idx) => (
                        <div
                          key={idx}
                          className='flex items-center gap-2 text-sm'
                        >
                          <div className='h-1.5 w-1.5 rounded-full bg-blue-500' />
                          <span className='text-gray-700'>{example}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='mb-12 text-center text-3xl font-bold'>
              Upcoming Events
            </h2>
            <div className='space-y-6'>
              {upcomingEvents.map((event, index) => (
                <Card key={index} className='border-l-4 border-l-blue-500'>
                  <CardContent className='p-6'>
                    <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
                      <div className='flex-1'>
                        <div className='mb-2 flex items-center gap-3'>
                          <h3 className='text-xl font-bold'>{event.title}</h3>
                          <Badge variant='secondary'>{event.type}</Badge>
                        </div>
                        <p className='mb-2 text-gray-600'>
                          {event.description}
                        </p>
                        <div className='flex items-center gap-2 text-sm text-gray-500'>
                          <Calendar className='h-4 w-4' />
                          <span>{event.date}</span>
                        </div>
                      </div>
                      <Button variant='outline'>Learn More</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className='mt-8 text-center'>
              <p className='mb-4 text-gray-600'>
                This is just a preview. Many more events throughout the year!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Frequency */}
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='mb-8 text-center text-3xl font-bold'>
              Year at a Glance
            </h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
              <div className='rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 text-center'>
                <div className='mb-2 text-4xl font-bold text-blue-600'>50+</div>
                <div className='mb-1 font-medium text-gray-700'>
                  Events Per Year
                </div>
                <div className='text-sm text-gray-600'>
                  Something happening every week
                </div>
              </div>
              <div className='rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 text-center'>
                <div className='mb-2 text-4xl font-bold text-purple-600'>
                  12
                </div>
                <div className='mb-1 font-medium text-gray-700'>
                  Signature Events
                </div>
                <div className='text-sm text-gray-600'>
                  Our biggest annual traditions
                </div>
              </div>
              <div className='rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6 text-center'>
                <div className='mb-2 text-4xl font-bold text-green-600'>
                  100%
                </div>
                <div className='mb-1 font-medium text-gray-700'>
                  Student-Organized
                </div>
                <div className='text-sm text-gray-600'>
                  By students, for students
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-4xl'>
            <div className='rounded-2xl bg-white p-8 shadow-lg md:p-12'>
              <h2 className='mb-6 text-center text-3xl font-bold'>
                Get Involved
              </h2>
              <p className='mb-8 text-center text-lg text-gray-700'>
                As a member, you'll have exclusive access to all our events and
                the opportunity to help organize them. Whether you want to
                attend, volunteer, or lead, there's a role for you!
              </p>
              <div className='mb-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
                <div className='p-4 text-center'>
                  <div className='mb-2 text-3xl'>👥</div>
                  <h3 className='mb-1 font-bold'>Attend</h3>
                  <p className='text-sm text-gray-600'>
                    Participate in events that interest you
                  </p>
                </div>
                <div className='p-4 text-center'>
                  <div className='mb-2 text-3xl'>🤝</div>
                  <h3 className='mb-1 font-bold'>Volunteer</h3>
                  <p className='text-sm text-gray-600'>
                    Help make events happen
                  </p>
                </div>
                <div className='p-4 text-center'>
                  <div className='mb-2 text-3xl'>⭐</div>
                  <h3 className='mb-1 font-bold'>Lead</h3>
                  <p className='text-sm text-gray-600'>
                    Organize your own events
                  </p>
                </div>
              </div>
              <div className='flex justify-center'>
                <Link to='/join'>
                  <Button size='lg'>Become a Member</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-gradient-to-r from-blue-600 to-indigo-600 py-16 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='mb-4 text-3xl font-bold'>Have an Event Idea?</h2>
          <p className='mx-auto mb-8 max-w-2xl text-xl text-blue-100'>
            We're always open to new ideas! As a member, you can propose and
            organize your own events with our support.
          </p>
          <Link to='/contact'>
            <Button size='lg' variant='secondary'>
              Share Your Idea
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
