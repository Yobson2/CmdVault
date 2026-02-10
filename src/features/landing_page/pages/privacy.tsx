import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import Layout from '@/components/layout/landing-page-layout'

const Privacy = () => {
  const lastUpdated = 'February 10, 2026'

  return (
    <Layout>
      {/* Hero section */}
      <div className='relative flex min-h-[40vh] items-center justify-center bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900'>
        <div className='container z-10 mx-auto px-4 py-16 text-center'>
          <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
            Privacy Policy
          </h1>
          <p className='mx-auto max-w-2xl text-xl text-indigo-200'>
            Your privacy matters. Here's how we handle your data.
          </p>
          <p className='mt-4 text-sm text-indigo-300'>
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='prose prose-lg mx-auto max-w-3xl dark:prose-invert'>
            {/* 1. Introduction */}
            <h2 className='mb-4 text-2xl font-bold'>1. Introduction</h2>
            <p className='mb-6 text-muted-foreground'>
              CmdVault ("we", "our", or "the Service") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, store, and share your personal information when you
              use our web application. By using CmdVault, you consent to the
              practices described in this policy.
            </p>

            {/* 2. Information We Collect */}
            <h2 className='mb-4 text-2xl font-bold'>
              2. Information We Collect
            </h2>
            <p className='mb-4 text-muted-foreground'>
              We collect the following types of information:
            </p>

            <h3 className='mb-2 text-xl font-semibold'>
              2.1 Account Information
            </h3>
            <p className='mb-4 text-muted-foreground'>
              When you create an account, we collect your name, email address,
              and password. If you sign up using a third-party provider (e.g.,
              GitHub, Google), we receive your profile information from that
              provider.
            </p>

            <h3 className='mb-2 text-xl font-semibold'>2.2 User Content</h3>
            <p className='mb-4 text-muted-foreground'>
              We store the commands, descriptions, tags, and other content you
              submit to the Service. This includes both private vault entries
              and publicly shared commands.
            </p>

            <h3 className='mb-2 text-xl font-semibold'>2.3 Usage Data</h3>
            <p className='mb-6 text-muted-foreground'>
              We automatically collect information about how you interact with
              the Service, including pages visited, features used, browser type,
              device information, and IP address. This data helps us improve the
              Service.
            </p>

            {/* 3. How We Use Your Information */}
            <h2 className='mb-4 text-2xl font-bold'>
              3. How We Use Your Information
            </h2>
            <p className='mb-4 text-muted-foreground'>
              We use your information to:
            </p>
            <ul className='mb-6 list-disc space-y-2 pl-6 text-muted-foreground'>
              <li>Provide, maintain, and improve the Service.</li>
              <li>
                Authenticate your identity and manage your account.
              </li>
              <li>
                Enable features such as command storage, search, and team
                collaboration.
              </li>
              <li>
                Send you service-related notifications and updates.
              </li>
              <li>
                Analyze usage patterns to improve user experience.
              </li>
              <li>
                Detect and prevent fraud, abuse, or security issues.
              </li>
            </ul>

            {/* 4. Data Sharing */}
            <h2 className='mb-4 text-2xl font-bold'>4. Data Sharing</h2>
            <p className='mb-4 text-muted-foreground'>
              We do not sell your personal information. We may share your data
              in the following limited circumstances:
            </p>
            <ul className='mb-6 list-disc space-y-2 pl-6 text-muted-foreground'>
              <li>
                <strong>Public commands:</strong> Commands you choose to share
                publicly will be visible to all users of the community vault.
              </li>
              <li>
                <strong>Team members:</strong> Commands shared within a team are
                visible to all members of that team.
              </li>
              <li>
                <strong>Service providers:</strong> We may share data with
                trusted third-party services that help us operate the Service
                (e.g., hosting, analytics), under strict confidentiality
                agreements.
              </li>
              <li>
                <strong>Legal requirements:</strong> We may disclose information
                if required by law, regulation, or legal process.
              </li>
            </ul>

            {/* 5. Data Storage & Security */}
            <h2 className='mb-4 text-2xl font-bold'>
              5. Data Storage & Security
            </h2>
            <p className='mb-6 text-muted-foreground'>
              Your data is stored on secure servers with encryption at rest and
              in transit. We implement industry-standard security measures to
              protect your information, including access controls, regular
              security audits, and encrypted backups. However, no method of
              electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>

            {/* 6. Data Retention */}
            <h2 className='mb-4 text-2xl font-bold'>6. Data Retention</h2>
            <p className='mb-6 text-muted-foreground'>
              We retain your account data for as long as your account is active.
              If you delete your account, we will remove your personal
              information within 30 days, except where retention is required by
              law or for legitimate business purposes. Publicly shared commands
              may remain in the community vault after account deletion in
              anonymized form.
            </p>

            {/* 7. Your Rights */}
            <h2 className='mb-4 text-2xl font-bold'>7. Your Rights</h2>
            <p className='mb-4 text-muted-foreground'>
              Depending on your jurisdiction, you may have the following rights
              regarding your personal data:
            </p>
            <ul className='mb-6 list-disc space-y-2 pl-6 text-muted-foreground'>
              <li>
                <strong>Access:</strong> Request a copy of the personal data we
                hold about you.
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or
                incomplete data.
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                data.
              </li>
              <li>
                <strong>Portability:</strong> Request your data in a structured,
                machine-readable format.
              </li>
              <li>
                <strong>Objection:</strong> Object to certain processing of your
                data.
              </li>
            </ul>
            <p className='mb-6 text-muted-foreground'>
              To exercise any of these rights, please contact us through our{' '}
              <Link
                to='/contact'
                className='text-indigo-600 hover:underline dark:text-indigo-400'
              >
                contact page
              </Link>
              .
            </p>

            {/* 8. Cookies */}
            <h2 className='mb-4 text-2xl font-bold'>
              8. Cookies & Local Storage
            </h2>
            <p className='mb-6 text-muted-foreground'>
              CmdVault uses cookies and local storage to maintain your session,
              remember your preferences (such as theme and sidebar state), and
              improve your experience. We do not use third-party tracking
              cookies. You can manage cookie settings through your browser, but
              disabling cookies may affect the functionality of the Service.
            </p>

            {/* 9. Third-Party Services */}
            <h2 className='mb-4 text-2xl font-bold'>9. Third-Party Services</h2>
            <p className='mb-6 text-muted-foreground'>
              The Service may integrate with third-party services (e.g., GitHub
              for authentication). These services have their own privacy
              policies, and we encourage you to review them. CmdVault is not
              responsible for the privacy practices of third-party services.
            </p>

            {/* 10. Children's Privacy */}
            <h2 className='mb-4 text-2xl font-bold'>10. Children's Privacy</h2>
            <p className='mb-6 text-muted-foreground'>
              CmdVault is not intended for children under the age of 13. We do
              not knowingly collect personal information from children. If we
              learn that we have collected data from a child under 13, we will
              take steps to delete that information promptly.
            </p>

            {/* 11. Changes */}
            <h2 className='mb-4 text-2xl font-bold'>
              11. Changes to This Policy
            </h2>
            <p className='mb-6 text-muted-foreground'>
              We may update this Privacy Policy from time to time. We will
              notify you of significant changes by posting a notice on the
              Service or sending an email. Your continued use of the Service
              after changes are posted constitutes your acceptance of the
              revised policy.
            </p>

            {/* 12. Contact */}
            <h2 className='mb-4 text-2xl font-bold'>12. Contact Us</h2>
            <p className='mb-6 text-muted-foreground'>
              If you have any questions about this Privacy Policy or how we
              handle your data, please contact us through our{' '}
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
            <Link to='/terms'>
              <Button
                variant='outline'
                size='lg'
                className='border-white/20 text-white hover:bg-white/20'
              >
                Terms of Service
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Privacy
