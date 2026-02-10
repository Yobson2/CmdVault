import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import Layout from '@/components/layout/landing-page-layout'

const Terms = () => {
  const lastUpdated = 'February 10, 2026'

  return (
    <Layout>
      {/* Hero section */}
      <div className='relative flex min-h-[40vh] items-center justify-center bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900'>
        <div className='z-10 container mx-auto px-4 py-16 text-center'>
          <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
            Terms of Service
          </h1>
          <p className='mx-auto max-w-2xl text-xl text-indigo-200'>
            Please read these terms carefully before using CmdVault.
          </p>
          <p className='mt-4 text-sm text-indigo-300'>
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='prose prose-lg dark:prose-invert mx-auto max-w-3xl'>
            {/* 1. Acceptance */}
            <h2 className='mb-4 text-2xl font-bold'>1. Acceptance of Terms</h2>
            <p className='text-muted-foreground mb-6'>
              By accessing or using CmdVault ("the Service"), you agree to be
              bound by these Terms of Service. If you do not agree to these
              terms, please do not use the Service. CmdVault reserves the right
              to update these terms at any time, and your continued use of the
              Service constitutes acceptance of any changes.
            </p>

            {/* 2. Description */}
            <h2 className='mb-4 text-2xl font-bold'>
              2. Description of Service
            </h2>
            <p className='text-muted-foreground mb-6'>
              CmdVault is a web application that allows users to store,
              organize, search, and share command-line commands. The Service
              provides personal vaults for saving commands, team collaboration
              features, and a community-driven public vault for discovering
              commands shared by other developers.
            </p>

            {/* 3. User Accounts */}
            <h2 className='mb-4 text-2xl font-bold'>3. User Accounts</h2>
            <p className='text-muted-foreground mb-4'>
              To access certain features of the Service, you must create an
              account. When creating an account, you agree to:
            </p>
            <ul className='text-muted-foreground mb-6 list-disc space-y-2 pl-6'>
              <li>
                Provide accurate, current, and complete information during
                registration.
              </li>
              <li>
                Maintain and update your account information to keep it
                accurate.
              </li>
              <li>
                Keep your password secure and confidential. You are responsible
                for all activities that occur under your account.
              </li>
              <li>
                Notify CmdVault immediately of any unauthorized use of your
                account.
              </li>
            </ul>

            {/* 4. Acceptable Use */}
            <h2 className='mb-4 text-2xl font-bold'>4. Acceptable Use</h2>
            <p className='text-muted-foreground mb-4'>
              You agree to use CmdVault only for lawful purposes. You shall not:
            </p>
            <ul className='text-muted-foreground mb-6 list-disc space-y-2 pl-6'>
              <li>
                Upload or share commands that contain malicious code, malware,
                or exploits intended to harm others.
              </li>
              <li>
                Use the Service to distribute spam, phishing content, or
                unsolicited communications.
              </li>
              <li>
                Attempt to gain unauthorized access to other users' accounts or
                CmdVault's systems.
              </li>
              <li>
                Reverse-engineer, decompile, or disassemble any part of the
                Service.
              </li>
              <li>
                Use automated tools to scrape or extract data from the Service
                without prior written consent.
              </li>
            </ul>

            {/* 5. User Content */}
            <h2 className='mb-4 text-2xl font-bold'>5. User Content</h2>
            <p className='text-muted-foreground mb-4'>
              You retain ownership of any commands and content you submit to
              CmdVault. By submitting content to the Service, you grant CmdVault
              a non-exclusive, worldwide, royalty-free license to:
            </p>
            <ul className='text-muted-foreground mb-6 list-disc space-y-2 pl-6'>
              <li>Store and display your content as part of the Service.</li>
              <li>
                Make publicly shared commands available to other users of the
                community vault.
              </li>
              <li>Use aggregated, anonymized data to improve the Service.</li>
            </ul>
            <p className='text-muted-foreground mb-6'>
              You are solely responsible for the content you submit. CmdVault
              does not endorse or verify the accuracy, safety, or legality of
              user-submitted commands.
            </p>

            {/* 6. Intellectual Property */}
            <h2 className='mb-4 text-2xl font-bold'>
              6. Intellectual Property
            </h2>
            <p className='text-muted-foreground mb-6'>
              The Service, including its design, logos, trademarks, and
              underlying code, is the property of CmdVault and is protected by
              intellectual property laws. You may not copy, modify, or
              distribute any part of the Service without prior written
              permission, except as expressly permitted by these terms.
            </p>

            {/* 7. Termination */}
            <h2 className='mb-4 text-2xl font-bold'>7. Termination</h2>
            <p className='text-muted-foreground mb-6'>
              CmdVault may suspend or terminate your account at any time if you
              violate these terms or engage in conduct that is harmful to the
              Service or other users. You may also delete your account at any
              time. Upon termination, your right to access the Service ceases
              immediately. CmdVault may retain certain data as required by law
              or for legitimate business purposes.
            </p>

            {/* 8. Disclaimers */}
            <h2 className='mb-4 text-2xl font-bold'>8. Disclaimers</h2>
            <p className='text-muted-foreground mb-6'>
              The Service is provided "as is" and "as available" without
              warranties of any kind, either express or implied. CmdVault does
              not guarantee that the Service will be uninterrupted, error-free,
              or secure. You use the Service at your own risk. Commands shared
              on the platform are user-generated and should be reviewed before
              execution in any environment.
            </p>

            {/* 9. Limitation of Liability */}
            <h2 className='mb-4 text-2xl font-bold'>
              9. Limitation of Liability
            </h2>
            <p className='text-muted-foreground mb-6'>
              To the fullest extent permitted by law, CmdVault shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of or related to your use of the
              Service. This includes, but is not limited to, damages caused by
              executing commands found on the platform.
            </p>

            {/* 10. Governing Law */}
            <h2 className='mb-4 text-2xl font-bold'>10. Governing Law</h2>
            <p className='text-muted-foreground mb-6'>
              These terms shall be governed by and construed in accordance with
              the laws of the jurisdiction in which CmdVault operates, without
              regard to conflict of law principles. Any disputes arising from
              these terms shall be resolved in the competent courts of that
              jurisdiction.
            </p>

            {/* 11. Changes */}
            <h2 className='mb-4 text-2xl font-bold'>11. Changes to Terms</h2>
            <p className='text-muted-foreground mb-6'>
              CmdVault reserves the right to modify these Terms of Service at
              any time. We will notify users of significant changes by posting a
              notice on the Service or sending an email. Your continued use of
              the Service after changes are posted constitutes your acceptance
              of the revised terms.
            </p>

            {/* 12. Contact */}
            <h2 className='mb-4 text-2xl font-bold'>12. Contact Us</h2>
            <p className='text-muted-foreground mb-6'>
              If you have any questions about these Terms of Service, please
              contact us through our{' '}
              <Link
                to='/contact'
                className='text-indigo-600 hover:underline dark:text-indigo-400'
              >
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-gradient-to-r from-indigo-950 to-slate-900 py-12 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='mb-6 text-2xl font-bold md:text-3xl'>
            Ready to Get Started?
          </h2>
          <p className='mx-auto mb-8 max-w-2xl text-indigo-200'>
            Join developers who save time by keeping their best commands
            organized and ready to use.
          </p>
          <div className='flex flex-col justify-center gap-4 sm:flex-row'>
            <Link to='/sign-up'>
              <Button size='lg' variant='secondary'>
                Get Started
              </Button>
            </Link>
            <Link to='/privacy'>
              <Button
                variant='outline'
                size='lg'
                className='border-white/20 text-white hover:bg-white/20'
              >
                Privacy Policy
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Terms
