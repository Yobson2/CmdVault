import { AlertTriangle, Shield, Lock, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Layout from '@/components/layout/landing-page-layout'
import { IssueReportForm } from '@/features/landing_page/components/forms/issue-report-form'

const ReportIssuePage = () => {
  const guidelines = [
    {
      icon: <AlertTriangle className='h-5 w-5 text-orange-600' />,
      title: 'Be Specific',
      description:
        'Provide detailed information to help us understand and address the issue effectively',
    },
    {
      icon: <Shield className='h-5 w-5 text-blue-600' />,
      title: 'Safe Space',
      description:
        'All reports are taken seriously and handled with care and confidentiality',
    },
    {
      icon: <Lock className='h-5 w-5 text-green-600' />,
      title: 'Anonymous Option',
      description:
        'You can submit reports anonymously if you prefer to remain unidentified',
    },
    {
      icon: <CheckCircle className='h-5 w-5 text-purple-600' />,
      title: "We'll Follow Up",
      description:
        "If you provide contact information, we'll keep you updated on the progress",
    },
  ]

  const commonIssues = [
    {
      title: 'Facility Issues',
      examples: ['Broken equipment', 'Maintenance needs', 'Safety hazards'],
    },
    {
      title: 'Safety Concerns',
      examples: [
        'Security issues',
        'Emergency situations',
        'Unsafe conditions',
      ],
    },
    {
      title: 'Harassment/Discrimination',
      examples: [
        'Inappropriate behavior',
        'Discriminatory actions',
        'Bullying',
      ],
    },
    {
      title: 'Event Problems',
      examples: [
        'Event disruptions',
        'Scheduling conflicts',
        'Accessibility issues',
      ],
    },
    {
      title: 'Technical Issues',
      examples: ['Website bugs', 'Portal access problems', 'System errors'],
    },
    {
      title: 'Other Concerns',
      examples: [
        'Membership questions',
        'Financial issues',
        'General feedback',
      ],
    },
  ]

  return (
    <Layout>
      {/* Hero section */}
      <div className='bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='mb-4 flex justify-center'>
              <div className='rounded-full bg-white/10 p-4 backdrop-blur-sm'>
                <AlertTriangle className='h-12 w-12' />
              </div>
            </div>
            <h1 className='mb-6 text-3xl font-bold md:text-5xl'>
              Report an Issue
            </h1>
            <p className='text-lg text-blue-100'>
              Your voice matters. Help us improve by reporting any issues or
              concerns you encounter. All submissions are reviewed promptly and
              handled with care.
            </p>
          </div>
        </div>
      </div>

      {/* Guidelines */}
      <section className='bg-white py-12'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-5xl'>
            <h2 className='mb-8 text-center text-2xl font-bold'>
              How We Handle Reports
            </h2>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
              {guidelines.map((item, index) => (
                <Card
                  key={index}
                  className='border-none shadow-sm transition-shadow hover:shadow-md'
                >
                  <CardContent className='p-6 text-center'>
                    <div className='mb-4 flex justify-center'>
                      <div className='rounded-full bg-gray-50 p-3'>
                        {item.icon}
                      </div>
                    </div>
                    <h3 className='mb-2 text-lg font-semibold'>{item.title}</h3>
                    <p className='text-muted-foreground text-sm'>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Form */}
      <section className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-3xl'>
            <div className='mb-8 text-center'>
              <h2 className='mb-4 text-3xl font-bold'>Submit Your Report</h2>
              <p className='text-muted-foreground'>
                Fill out the form below with as much detail as possible. Fields
                marked with * are required.
              </p>
            </div>

            <Card>
              <CardContent className='p-8'>
                <IssueReportForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className='bg-white py-12'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-5xl'>
            <h2 className='mb-8 text-center text-2xl font-bold'>
              What Can You Report?
            </h2>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {commonIssues.map((category, index) => (
                <Card key={index} className='border-l-4 border-l-blue-600'>
                  <CardContent className='p-6'>
                    <h3 className='mb-3 text-lg font-semibold'>
                      {category.title}
                    </h3>
                    <ul className='space-y-2'>
                      {category.examples.map((example, idx) => (
                        <li
                          key={idx}
                          className='text-muted-foreground flex items-start text-sm'
                        >
                          <span className='mr-2 text-blue-600'>•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className='border-y border-red-200 bg-red-50 py-12'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='mb-4 flex justify-center'>
              <AlertTriangle className='h-10 w-10 text-red-600' />
            </div>
            <h3 className='mb-3 text-xl font-bold text-red-900'>
              Emergency Situations
            </h3>
            <p className='mb-4 text-red-800'>
              If you're experiencing an emergency or immediate danger, please do
              not use this form. Contact campus security or emergency services
              immediately.
            </p>
            <div className='flex flex-col justify-center gap-3 sm:flex-row'>
              <a
                href='tel:911'
                className='font-semibold text-red-900 hover:text-red-700'
              >
                📞 Emergency: 911
              </a>
              <a
                href='tel:+15551234567'
                className='font-semibold text-red-900 hover:text-red-700'
              >
                📞 Campus Security: +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ReportIssuePage
