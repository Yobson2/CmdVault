import { createFileRoute } from '@tanstack/react-router'
import Layout from '@/components/layout/landing-page-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'
import { Mail, Linkedin } from 'lucide-react'

export const Route = createFileRoute('/_public/team')({
  component: TeamPage,
})

function TeamPage() {
  const executiveBoard = [
    {
      name: 'Sarah Johnson',
      position: 'President',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Leading our association with passion and dedication. Computer Science major, Class of 2026.',
      email: 'president@studentassoc.com',
      linkedin: '#',
    },
    {
      name: 'Michael Chen',
      position: 'Vice President',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Supporting the president and overseeing operations. Business Administration major, Class of 2026.',
      email: 'vp@studentassoc.com',
      linkedin: '#',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Secretary',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Managing communications and keeping us organized. Communications major, Class of 2027.',
      email: 'secretary@studentassoc.com',
      linkedin: '#',
    },
    {
      name: 'David Park',
      position: 'Treasurer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Handling finances and ensuring fiscal responsibility. Accounting major, Class of 2026.',
      email: 'treasurer@studentassoc.com',
      linkedin: '#',
    },
  ]

  const commiteeLeads = [
    {
      name: 'Jessica Liu',
      position: 'Events Coordinator',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
      department: 'Events & Programming',
    },
    {
      name: 'James Williams',
      position: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      department: 'Marketing & Communications',
    },
    {
      name: 'Aisha Patel',
      position: 'Community Outreach Lead',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
      department: 'Community Relations',
    },
    {
      name: 'Marcus Thompson',
      position: 'Membership Coordinator',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      department: 'Member Services',
    },
    {
      name: 'Sophie Anderson',
      position: 'Diversity & Inclusion Officer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      department: 'Diversity & Inclusion',
    },
    {
      name: 'Ryan Martinez',
      position: 'Technology Lead',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
      department: 'Technology & Innovation',
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-teal-100">
              Dedicated students working together to make our association and campus better
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">A Message from Our President</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Welcome! I'm honored to serve as President of our student association this year.
                  Our team is comprised of passionate, dedicated students who truly care about
                  making a difference in our campus community.
                </p>
                <p className="text-gray-700 mb-4">
                  Every member of our leadership team brings unique perspectives, skills, and
                  experiences that make us stronger together. We're committed to serving all
                  students with integrity, transparency, and enthusiasm.
                </p>
                <p className="text-gray-700">
                  Whether you have questions, ideas, or just want to connect, please don't
                  hesitate to reach out. We're here for you!
                </p>
                <p className="text-gray-900 font-semibold mt-6">
                  — Sarah Johnson, President
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Board */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Executive Board</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {executiveBoard.map((member, index) => (
                <Card key={index} className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex gap-3">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        title="Email"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                      <a
                        href={member.linkedin}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        title="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Committee Leads */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Committee Leads</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Our committee leads oversee specific areas and ensure our programs run smoothly
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commiteeLeads.map((member, index) => (
                <Card key={index} className="border-none shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium text-sm mb-1">{member.position}</p>
                    <p className="text-xs text-gray-500">{member.department}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
              <h2 className="text-3xl font-bold mb-6">Want to Join Our Team?</h2>
              <p className="text-lg text-gray-700 mb-8">
                We hold elections annually for executive positions and are always looking for
                passionate students to join our committees. Leadership opportunities are open to
                all members!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-4">
                  <div className="text-3xl mb-2">🗳️</div>
                  <h3 className="font-bold mb-2">Elections</h3>
                  <p className="text-sm text-gray-600">
                    Run for executive positions in Spring
                  </p>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-2">📋</div>
                  <h3 className="font-bold mb-2">Committees</h3>
                  <p className="text-sm text-gray-600">Join a committee anytime as a member</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-2">💡</div>
                  <h3 className="font-bold mb-2">Projects</h3>
                  <p className="text-sm text-gray-600">
                    Lead your own initiatives and projects
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/join">
                  <Button size="lg">Become a Member First</Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Ask About Leadership
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch with Our Team</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Have questions or want to connect with a specific team member? We're always happy to
            hear from you!
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
