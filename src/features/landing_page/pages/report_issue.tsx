import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Shield, Lock, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/landing-page-layout';
import { IssueReportForm } from '@/features/landing_page/components/forms/issue-report-form';

const ReportIssuePage = () => {
  const guidelines = [
    {
      icon: <AlertTriangle className="h-5 w-5 text-orange-600" />,
      title: "Be Specific",
      description: "Provide detailed information to help us understand and address the issue effectively"
    },
    {
      icon: <Shield className="h-5 w-5 text-blue-600" />,
      title: "Safe Space",
      description: "All reports are taken seriously and handled with care and confidentiality"
    },
    {
      icon: <Lock className="h-5 w-5 text-green-600" />,
      title: "Anonymous Option",
      description: "You can submit reports anonymously if you prefer to remain unidentified"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-purple-600" />,
      title: "We'll Follow Up",
      description: "If you provide contact information, we'll keep you updated on the progress"
    }
  ];

  const commonIssues = [
    {
      title: "Facility Issues",
      examples: ["Broken equipment", "Maintenance needs", "Safety hazards"]
    },
    {
      title: "Safety Concerns",
      examples: ["Security issues", "Emergency situations", "Unsafe conditions"]
    },
    {
      title: "Harassment/Discrimination",
      examples: ["Inappropriate behavior", "Discriminatory actions", "Bullying"]
    },
    {
      title: "Event Problems",
      examples: ["Event disruptions", "Scheduling conflicts", "Accessibility issues"]
    },
    {
      title: "Technical Issues",
      examples: ["Website bugs", "Portal access problems", "System errors"]
    },
    {
      title: "Other Concerns",
      examples: ["Membership questions", "Financial issues", "General feedback"]
    }
  ];

  return (
    <Layout>
      {/* Hero section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                <AlertTriangle className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Report an Issue</h1>
            <p className="text-lg text-blue-100">
              Your voice matters. Help us improve by reporting any issues or concerns you encounter.
              All submissions are reviewed promptly and handled with care.
            </p>
          </div>
        </div>
      </div>

      {/* Guidelines */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">How We Handle Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guidelines.map((item, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="bg-gray-50 rounded-full p-3">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Submit Your Report</h2>
              <p className="text-muted-foreground">
                Fill out the form below with as much detail as possible. Fields marked with * are required.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <IssueReportForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">What Can You Report?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonIssues.map((category, index) => (
                <Card key={index} className="border-l-4 border-l-blue-600">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2 text-blue-600">•</span>
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
      <section className="py-12 bg-red-50 border-y border-red-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="h-10 w-10 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-3">Emergency Situations</h3>
            <p className="text-red-800 mb-4">
              If you're experiencing an emergency or immediate danger, please do not use this form.
              Contact campus security or emergency services immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:911" className="font-semibold text-red-900 hover:text-red-700">
                📞 Emergency: 911
              </a>
              <a href="tel:+15551234567" className="font-semibold text-red-900 hover:text-red-700">
                📞 Campus Security: +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ReportIssuePage;
