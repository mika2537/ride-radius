import { Button } from "@/components/ui/button";
import { MapPin, Users, Clock, DollarSign, Car, Search } from "lucide-react";
import { RouteCard } from "@/components/RouteCard";
import { SearchBar } from "@/components/SearchBar";
import { Link } from "react-router-dom";

const Index = () => {
  const mockRoutes = [
    {
      id: 1,
      driverName: "Sarah Johnson",
      driverRating: 4.9,
      vehicleModel: "Toyota Camry",
      startLocation: "Downtown Plaza",
      endLocation: "Airport Terminal",
      departureTime: "2:30 PM",
      availableSeats: 3,
      pricePerSeat: 15,
      distance: "12 km"
    },
    {
      id: 2,
      driverName: "Michael Chen",
      driverRating: 4.8,
      vehicleModel: "Honda Accord",
      startLocation: "University District",
      endLocation: "Shopping Mall",
      departureTime: "4:00 PM",
      availableSeats: 2,
      pricePerSeat: 10,
      distance: "8 km"
    },
    {
      id: 3,
      driverName: "Emma Davis",
      driverRating: 5.0,
      vehicleModel: "Tesla Model 3",
      startLocation: "Business Park",
      endLocation: "City Center",
      departureTime: "5:15 PM",
      availableSeats: 1,
      pricePerSeat: 12,
      distance: "10 km"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Share Rides, Save Money
            </h1>
            <p className="mb-8 text-lg md:text-xl opacity-90">
              Connect with drivers already going your way. Pre-set routes mean better planning and lower costs.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/driver/dashboard">
                <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
                  <Car className="h-5 w-5" />
                  I'm a Driver
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-2 bg-background/10 border-primary-foreground/20 hover:bg-background/20 text-primary-foreground">
                <Search className="h-5 w-5" />
                Find a Ride
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-foreground/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary-foreground/10 blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-card p-6 shadow-card">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Set Your Route</h3>
              <p className="text-muted-foreground">
                Drivers post their planned routes with start, end, and optional stops.
              </p>
            </div>
            <div className="rounded-xl bg-card p-6 shadow-card">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Find Your Match</h3>
              <p className="text-muted-foreground">
                Riders search for routes that match their destination and book available seats.
              </p>
            </div>
            <div className="rounded-xl bg-card p-6 shadow-card">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Share the Cost</h3>
              <p className="text-muted-foreground">
                Split the journey cost fairly based on the distance traveled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Routes Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            Available Routes
          </h2>
          
          {/* Search Bar */}
          <div className="mb-12 mx-auto max-w-4xl">
            <SearchBar />
          </div>

          {/* Route Cards */}
          <div className="mx-auto max-w-4xl space-y-4">
            {mockRoutes.map((route) => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Start Saving?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join thousands of users already sharing rides and reducing costs
          </p>
          <Button size="lg" className="gap-2">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
