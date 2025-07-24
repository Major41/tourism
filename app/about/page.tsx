import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, MapPin, Heart, Star, Shield } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">FLUFFTAILS</h1>
                <p className="text-sm text-gray-600">TOURS & TRAVEL</p>
              </div>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </Link>
                <Link
                  href="/destinations"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Destinations
                </Link>
                <Link
                  href="/about"
                  className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
            <Button asChild>
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Flufftails Tours</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted partner in discovering the magic of Kenya. We're passionate about creating unforgettable
            experiences that showcase the best of our beautiful country.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2019, Flufftails Tours & Travel was born from a deep love for Kenya's incredible wildlife,
                  stunning landscapes, and rich cultural heritage. Our founders, lifelong Kenyan residents, recognized
                  the need for authentic, responsible tourism that benefits both visitors and local communities.
                </p>
                <p>
                  What started as a small family business has grown into one of Kenya's most trusted tour operators, but
                  we've never lost sight of our core values: personalized service, environmental responsibility, and
                  genuine care for our guests' experiences.
                </p>
                <p>
                  Today, we're proud to have helped over 500 travelers from around the world discover the magic of
                  Kenya, from the world-famous Maasai Mara to the pristine beaches of the Indian Ocean coast.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/company.jpg?height=400&width=600"
                alt="Our team with tourists"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Happy Travelers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional experiences while preserving Kenya's natural beauty and
              supporting local communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Authentic Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We believe in showcasing the real Kenya - its wildlife, culture, and people - through genuine,
                  immersive experiences that create lasting memories.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Responsible Tourism</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We're committed to sustainable tourism practices that protect Kenya's environment and wildlife while
                  supporting local communities and conservation efforts.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Excellence in Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every detail matters. From the moment you contact us until you return home, we strive to exceed your
                  expectations with personalized, professional service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our passionate team of local experts brings years of experience and deep knowledge of Kenya's wildlife and
              culture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=96&width=96"
                    alt="Samuel Kiprotich"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Samuel Kiprotich</h3>
                <p className="text-blue-600 font-semibold mb-2">Founder & Lead Guide</p>
                <p className="text-gray-600 text-sm mb-4">
                  With over 10 years of safari experience, Samuel is passionate about wildlife conservation and sharing
                  Kenya's natural wonders with visitors.
                </p>
                <div className="flex justify-center space-x-1">
                  <Badge variant="outline" className="text-xs">
                    Wildlife Expert
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Swahili & English
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=96&width=96"
                    alt="Grace Wanjiku"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Grace Wanjiku</h3>
                <p className="text-blue-600 font-semibold mb-2">Cultural Tours Specialist</p>
                <p className="text-gray-600 text-sm mb-4">
                  Grace specializes in cultural experiences and has deep connections with local communities across
                  Kenya, ensuring authentic cultural exchanges.
                </p>
                <div className="flex justify-center space-x-1">
                  <Badge variant="outline" className="text-xs">
                    Cultural Expert
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Community Liaison
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=96&width=96"
                    alt="David Mwangi"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">David Mwangi</h3>
                <p className="text-blue-600 font-semibold mb-2">Mountain Guide & Adventure Specialist</p>
                <p className="text-gray-600 text-sm mb-4">
                  A certified mountain guide with extensive experience on Mount Kenya and other peaks, David ensures
                  safe and memorable climbing adventures.
                </p>
                <div className="flex justify-center space-x-1">
                  <Badge variant="outline" className="text-xs">
                    Certified Guide
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Safety Expert
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence in Kenyan tourism.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">4.9/5</h3>
              <p className="text-gray-600">Average Customer Rating</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Happy Travelers</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">20+</h3>
              <p className="text-gray-600">Destinations Covered</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">5+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Flufftails Tours?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here's what sets us apart from other tour operators in Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Expertise</h3>
                  <p className="text-gray-600">
                    Born and raised in Kenya, our team has intimate knowledge of the country's wildlife, culture, and
                    hidden gems that only locals know about.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                  <Heart className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Service</h3>
                  <p className="text-gray-600">
                    Every tour is tailored to your interests, budget, and preferences. We don't believe in
                    one-size-fits-all packages.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-full mr-4 mt-1">
                  <Shield className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety & Reliability</h3>
                  <p className="text-gray-600">
                    Your safety is our top priority. All our vehicles are well-maintained, and our guides are trained in
                    first aid and emergency procedures.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                  <Award className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainable Tourism</h3>
                  <p className="text-gray-600">
                    We're committed to responsible tourism that supports conservation efforts and benefits local
                    communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-cyan-100 p-2 rounded-full mr-4 mt-1">
                  <Star className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Small Group Tours</h3>
                  <p className="text-gray-600">
                    We keep our groups small to ensure personalized attention and minimize environmental impact while
                    maximizing your experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                  <MapPin className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                  <p className="text-gray-600">
                    From the moment you book until you return home, our team is available to assist you with any
                    questions or concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Kenya with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the hundreds of travelers who have trusted us to create their perfect Kenyan adventure. Let's start
            planning your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/booking">Start Your Adventure</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
