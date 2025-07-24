import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Camera, Users, Clock } from "lucide-react"
import Link from "next/link"

export default function DestinationsPage() {
  const destinations = [
    {
      id: "maasai-mara",
      name: "Maasai Mara National Reserve",
      description: "World-famous for the Great Migration and Big Five wildlife viewing",
      image: "/mara.jpg?height=300&width=400",
      highlights: ["Great Migration", "Big Five", "Maasai Culture", "Hot Air Balloons"],
      bestTime: "July - October",
      duration: "2-4 Days",
      difficulty: "Easy",
      category: "Safari",
    },
    {
      id: "amboseli",
      name: "Amboseli National Park",
      description: "Spectacular views of Mount Kilimanjaro with large elephant herds",
      image: "/amboseli.jpg?height=300&width=400",
      highlights: ["Mount Kilimanjaro Views", "Elephant Herds", "Maasai Villages", "Bird Watching"],
      bestTime: "June - October",
      duration: "2-3 Days",
      difficulty: "Easy",
      category: "Safari",
    },
    {
      id: "diani-beach",
      name: "Diani Beach",
      description: "Pristine white sand beaches with crystal clear waters and coral reefs",
      image: "/diani.jpg?height=300&width=400",
      highlights: ["White Sand Beaches", "Coral Reefs", "Water Sports", "Beach Resorts"],
      bestTime: "December - March",
      duration: "3-7 Days",
      difficulty: "Easy",
      category: "Beach",
    },
    {
      id: "mount-kenya",
      name: "Mount Kenya",
      description: "Africa's second highest peak offering challenging climbs and alpine scenery",
      image: "/kenya.jpg?height=300&width=400",
      highlights: ["Point Lenana", "Alpine Lakes", "Unique Flora", "Rock Climbing"],
      bestTime: "January - March",
      duration: "4-6 Days",
      difficulty: "Challenging",
      category: "Mountain",
    },
    {
      id: "tsavo",
      name: "Tsavo National Parks",
      description: "Kenya's largest national park known for red elephants and diverse landscapes",
      image: "/tsavo.jpg?height=300&width=400",
      highlights: ["Red Elephants", "Mzima Springs", "Lugard Falls", "Diverse Wildlife"],
      bestTime: "June - October",
      duration: "2-4 Days",
      difficulty: "Easy",
      category: "Safari",
    },
    {
      id: "watamu",
      name: "Watamu Marine Park",
      description: "Protected marine ecosystem perfect for snorkeling and diving",
      image: "/watamu.jpg?height=300&width=400",
      highlights: ["Coral Gardens", "Marine Life", "Snorkeling", "Turtle Watching"],
      bestTime: "October - April",
      duration: "2-5 Days",
      difficulty: "Easy",
      category: "Beach",
    },
  ]

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
                  className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Kenya's Destinations</h1>
          <p className="text-xl max-w-3xl mx-auto">
            From world-renowned safari parks to pristine beaches and majestic mountains, discover the diverse beauty of
            Kenya
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default">All Destinations</Button>
            <Button variant="outline">Safari Parks</Button>
            <Button variant="outline">Beach Destinations</Button>
            <Button variant="outline">Mountain Adventures</Button>
            <Button variant="outline">Cultural Sites</Button>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={
                        destination.category === "Safari"
                          ? "bg-green-100 text-green-800"
                          : destination.category === "Beach"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                      }
                    >
                      {destination.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {destination.difficulty}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{destination.name}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm text-gray-600">4.8</span>
                    </div>
                  </CardTitle>
                  <CardDescription>{destination.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {destination.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-gray-600">{destination.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-gray-600">{destination.bestTime}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button className="flex-1" asChild>
                        <Link href="/booking">Book Now</Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/destinations/${destination.id}`}>Details</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kenya Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover Kenya</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From the snow-capped peaks of Mount Kenya to the pristine beaches of the Indian Ocean
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Visit Kenya?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Camera className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">Incredible Wildlife</h4>
                      <p className="text-gray-600 text-sm">Home to the Big Five and the Great Migration</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">Rich Culture</h4>
                      <p className="text-gray-600 text-sm">Over 40 different tribes with unique traditions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">Diverse Landscapes</h4>
                      <p className="text-gray-600 text-sm">From savannas to beaches to mountains</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-8 text-center">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Kenya Map"
                  className="w-full h-64 object-contain"
                />
                <p className="text-sm text-gray-600 mt-4">
                  Interactive map showing all our tour destinations across Kenya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Tips */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Planning Your Trip</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential information to help you plan the perfect Kenyan adventure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  Best Time to Visit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm">Dry Season (June - October)</h4>
                    <p className="text-sm text-gray-600">Best for safari and wildlife viewing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Beach Season (December - March)</h4>
                    <p className="text-sm text-gray-600">Perfect weather for coastal activities</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Migration (July - September)</h4>
                    <p className="text-sm text-gray-600">Witness the Great Migration in Maasai Mara</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  What to Pack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p>• Comfortable safari clothing</p>
                  <p>• Sun protection (hat, sunscreen)</p>
                  <p>• Binoculars for wildlife viewing</p>
                  <p>• Camera with extra batteries</p>
                  <p>• Insect repellent</p>
                  <p>• Light jacket for evenings</p>
                  <p>• Comfortable walking shoes</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  Travel Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p>• Valid passport (6+ months validity)</p>
                  <p>• Tourist visa (available online)</p>
                  <p>• Yellow fever vaccination certificate</p>
                  <p>• Travel insurance recommended</p>
                  <p>• USD for park fees and tips</p>
                  <p>• Credit cards widely accepted</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Planning Your Kenyan Adventure</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our expert team help you create the perfect itinerary based on your interests and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/booking">Book Your Adventure</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/contact">Get Custom Itinerary</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
