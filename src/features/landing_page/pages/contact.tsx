import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Layout from '@/components/layout/landing-page-layout';
import { Link } from '@tanstack/react-router';
import { ContactForm } from '@/features/landing_page/components/forms/contact-form';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-blue-600" />,
      title: "Office Location",
      details: ["Student Center, Room 204", "University Campus"]
    },
    {
      icon: <Phone className="h-5 w-5 text-blue-600" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Available Mon-Fri"]
    },
    {
      icon: <Mail className="h-5 w-5 text-blue-600" />,
      title: "Email",
      details: ["info@adeio.org", "support@adeio.org"]
    },
    {
      icon: <Clock className="h-5 w-5 text-blue-600" />,
      title: "Office Hours",
      details: ["Mon-Fri: 9:00 AM - 5:00 PM", "Sat: 10:00 AM - 2:00 PM"]
    }
  ];

  return (
    <Layout>
      {/* Hero section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-blue-100">
              Have questions? We're here to help and answer any questions you might have
            </p>
          </div>
        </div>
      </div>

      {/* Contact info cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border-none shadow hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-50 rounded-full p-3">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Visit Our Office</h3>
                <p className="text-muted-foreground mb-4">
                  Drop by our office during office hours. Our team is always happy to meet
                  with students and answer questions in person.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Location:</strong> Student Center, Room 204</p>
                  <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
                  <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <div>
                    <Link to="/join" className="text-blue-600 hover:text-blue-700 font-medium">
                      → Join Our Association
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">
                      Become a member and get involved
                    </p>
                  </div>
                  <div>
                    <Link to="/faq" className="text-blue-600 hover:text-blue-700 font-medium">
                      → Frequently Asked Questions
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">
                      Find answers to common questions
                    </p>
                  </div>
                  <div>
                    <Link to="/about" className="text-blue-600 hover:text-blue-700 font-medium">
                      → About Us
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">
                      Learn more about our mission
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       
  </Layout>
  );
};

export default Contact;
