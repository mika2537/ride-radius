import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Clock, Users, DollarSign, ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const RouteDetails = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch based on route ID
  const route = {
    id: id,
    startLocation: "Downtown Plaza",
    endLocation: "Airport Terminal",
    stops: ["Central Station"],
    departureTime: "2:30 PM",
    date: "Today, Dec 15",
    bookedSeats: 2,
    totalSeats: 3,
    pricePerSeat: 15,
    totalEarnings: 30,
    status: "active",
    distance: "12 km",
    estimatedDuration: "25 min"
  };

  const passengers = [
    {
      id: 1,
      name: "John Smith",
      rating: 4.8,
      pickupLocation: "Downtown Plaza",
      dropoffLocation: "Central Station",
      bookedSeats: 1,
      fare: 8,
      phone: "+1 234 567 8900"
    },
    {
      id: 2,
      name: "Emily Davis",
      rating: 4.9,
      pickupLocation: "Central Station",
      dropoffLocation: "Airport Terminal",
      bookedSeats: 1,
      fare: 12,
      phone: "+1 234 567 8901"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/driver/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex-1">
              <h1 className="text-2xl font-bold">Route Details</h1>
              <p className="text-muted-foreground">Manage your route and passengers</p>
            </div>
            <Badge variant={route.status === "active" ? "default" : "secondary"}>
              {route.status}
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl space-y-6">
          {/* Route Overview Card */}
          <Card className="p-6">
            <h2 className="mb-6 text-xl font-bold">Route Overview</h2>

            <div className="space-y-6">
              {/* Route Path */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-full bg-primary p-2">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  {route.stops.map((_, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="h-8 w-px bg-border"></div>
                      <div className="rounded-full bg-muted p-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  ))}
                  <div className="h-8 w-px bg-border"></div>
                  <div className="rounded-full bg-secondary p-2">
                    <MapPin className="h-5 w-5 text-secondary-foreground" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Start</p>
                    <p className="font-semibold">{route.startLocation}</p>
                  </div>

                  {route.stops.map((stop, index) => (
                    <div key={index}>
                      <p className="text-sm text-muted-foreground">Stop {index + 1}</p>
                      <p className="font-semibold">{stop}</p>
                    </div>
                  ))}

                  <div>
                    <p className="text-sm text-muted-foreground">Destination</p>
                    <p className="font-semibold">{route.endLocation}</p>
                  </div>
                </div>
              </div>

              {/* Trip Info */}
              <div className="grid gap-4 border-t pt-6 md:grid-cols-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Date</p>
                    <p className="font-semibold">{route.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Time</p>
                    <p className="font-semibold">{route.departureTime}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Seats</p>
                    <p className="font-semibold">
                      {route.bookedSeats}/{route.totalSeats}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Earnings</p>
                    <p className="font-semibold text-primary">${route.totalEarnings}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Passengers Card */}
          <Card className="p-6">
            <h2 className="mb-6 text-xl font-bold">
              Passengers ({passengers.length})
            </h2>

            <div className="space-y-4">
              {passengers.map((passenger) => (
                <div
                  key={passenger.id}
                  className="rounded-lg border bg-card p-4 transition-all hover:shadow-card"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                          {passenger.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold">{passenger.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Rating: {passenger.rating} ⭐
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <MapPin className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                        <div className="min-w-0 text-sm">
                          <p className="text-muted-foreground">From:</p>
                          <p className="font-medium">{passenger.pickupLocation}</p>
                          <div className="my-1 ml-2 h-4 w-px bg-border"></div>
                          <p className="text-muted-foreground">To:</p>
                          <p className="font-medium">{passenger.dropoffLocation}</p>
                        </div>
                      </div>

                      <div className="flex gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Seats: </span>
                          <span className="font-semibold">{passenger.bookedSeats}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Fare: </span>
                          <span className="font-semibold text-primary">${passenger.fare}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Actions */}
          <div className="flex gap-4">
            <Button variant="outline" className="flex-1">
              Cancel Route
            </Button>
            <Button className="flex-1">
              Start Trip
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteDetails;
