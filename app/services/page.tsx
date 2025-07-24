import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Waves, Mountain, Users, MapPin, Star, Clock, Shield } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
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
                  className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium"
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
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover Kenya through our carefully crafted tour packages designed to give you the ultimate African
            experience
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Safari Adventures */}
          <div id="safari" className="mb-16">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src="/mara.jpg?height=400&width=600"
                    alt="Safari Adventure"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <Camera className="h-8 w-8 text-blue-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">Safari Adventures</h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Experience the thrill of witnessing Africa's Big Five in their natural habitat. Our safari tours
                    take you to Kenya's most renowned national parks and game reserves, where you'll encounter lions,
                    elephants, leopards, rhinos, and buffalo.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Destinations Include:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Maasai Mara National Reserve</li>
                        <li>• Amboseli National Park</li>
                        <li>• Tsavo East & West</li>
                        <li>• Samburu National Reserve</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What's Included:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Professional safari guide</li>
                        <li>• 4WD safari vehicle</li>
                        <li>• Park entrance fees</li>
                        <li>• Game drives & photography</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-green-100 text-green-800">Wildlife Viewing</Badge>
                    <Badge className="bg-orange-100 text-orange-800">Photography</Badge>
                    <Badge className="bg-blue-100 text-blue-800">Adventure</Badge>
                  </div>

                  <div className="flex gap-4">
                    <Button asChild>
                      <Link href="/booking">Book Safari</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/destinations">View Destinations</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Beach Holidays */}
          <div id="beach" className="mb-16">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <Waves className="h-8 w-8 text-blue-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">Beach Holidays</h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Relax and unwind on Kenya's pristine Indian Ocean coastline. Our beach packages offer the perfect
                    blend of relaxation and adventure, with crystal-clear waters, white sandy beaches, and exciting
                    water sports activities.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Beach Destinations:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Diani Beach Resort</li>
                        <li>• Watamu Marine Park</li>
                        <li>• Malindi Beaches</li>
                        <li>• Lamu Island</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Activities Available:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Snorkeling & diving</li>
                        <li>• Deep sea fishing</li>
                        <li>• Dhow sailing</li>
                        <li>• Beach volleyball</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-blue-100 text-blue-800">Relaxation</Badge>
                    <Badge className="bg-cyan-100 text-cyan-800">Water Sports</Badge>
                    <Badge className="bg-yellow-100 text-yellow-800">Beach Life</Badge>
                  </div>

                  <div className="flex gap-4">
                    <Button asChild>
                      <Link href="/booking">Book Beach Holiday</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/destinations">View Beaches</Link>
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img
                    src="/diani.jpg?height=400&width=600"
                    alt="Beach Holiday"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Cultural Tours */}
          <div id="cultural" className="mb-16">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src="/culture.jpg?height=400&width=600"
                    alt="Cultural Tours"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-blue-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">Cultural Tours</h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Immerse yourself in Kenya's rich cultural heritage. Meet local communities, learn about traditional
                    ways of life, and participate in authentic cultural experiences that will give you a deeper
                    understanding of Kenya's diverse tribes and customs.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Cultural Experiences:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Maasai village visits</li>
                        <li>• Traditional craft workshops</li>
                        <li>• Local cooking classes</li>
                        <li>• Cultural performances</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Communities We Visit:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Maasai communities</li>
                        <li>• Kikuyu villages</li>
                        <li>• Samburu settlements</li>
                        <li>• Coastal Swahili culture</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-purple-100 text-purple-800">Cultural</Badge>
                    <Badge className="bg-red-100 text-red-800">Traditional</Badge>
                    <Badge className="bg-green-100 text-green-800">Educational</Badge>
                  </div>

                  <div className="flex gap-4">
                    <Button asChild>
                      <Link href="/booking">Book Cultural Tour</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/destinations">Explore Culture</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Mountain Climbing */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <Mountain className="h-8 w-8 text-blue-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">Mountain Climbing</h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Challenge yourself with Kenya's magnificent peaks. From the snow-capped Mount Kenya to the scenic
                    Aberdare Ranges, our mountain climbing expeditions offer breathtaking views and unforgettable
                    adventures for all skill levels.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Mountain Destinations:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Mount Kenya (5,199m)</li>
                        <li>• Aberdare Ranges</li>
                        <li>• Mount Elgon</li>
                        <li>• Chyulu Hills</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Climbing Packages:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Day hikes</li>
                        <li>• Multi-day expeditions</li>
                        <li>• Technical climbing</li>
                        <li>• Beginner-friendly routes</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-gray-100 text-gray-800">Adventure</Badge>
                    <Badge className="bg-blue-100 text-blue-800">Challenge</Badge>
                    <Badge className="bg-green-100 text-green-800">Nature</Badge>
                  </div>

                  <div className="flex gap-4">
                    <Button asChild>
                      <Link href="/booking">Book Climbing</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/destinations">View Mountains</Link>
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img
                    src="/kenya.jpg?height=400&width=600"
                    alt="Mountain Climbing"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Our Services Special</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every tour is designed with your comfort, safety, and satisfaction in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Guides</h3>
              <p className="text-gray-600 text-sm">Professional, knowledgeable guides with years of experience</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600 text-sm">Comprehensive safety measures and emergency protocols</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible Timing</h3>
              <p className="text-gray-600 text-sm">Customizable schedules to fit your preferences</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Local Knowledge</h3>
              <p className="text-gray-600 text-sm">Insider access to hidden gems and local secrets</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose from our premium services and let us create an unforgettable Kenyan experience for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/booking">Book Your Tour</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/contact">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
