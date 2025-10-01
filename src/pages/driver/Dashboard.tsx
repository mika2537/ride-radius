import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, MapPin, Clock, Users, DollarSign, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const activeRoutes = [
    {
      id: 1,
      startLocation: "Downtown Plaza",
      endLocation: "Airport Terminal",
      departureTime: "2:30 PM",
      date: "Today",
      bookedSeats: 2,
      availableSeats: 3,
      totalSeats: 3,
      earnings: 30,
      status: "active"
    },
    {
      id: 2,
      startLocation: "Business Park",
      endLocation: "City Center",
      departureTime: "5:15 PM",
      date: "Today",
      bookedSeats: 1,
      availableSeats: 2,
      totalSeats: 3,
      earnings: 12,
      status: "active"
    }
  ];

  const completedRoutes = [
    {
      id: 3,
      startLocation: "University District",
      endLocation: "Shopping Mall",
      departureTime: "9:00 AM",
      date: "Yesterday",
      bookedSeats: 3,
      totalSeats: 3,
      earnings: 45,
      status: "completed"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Driver Dashboard</h1>
              <p className="text-muted-foreground">Manage your routes and earnings</p>
            </div>
            <Link to="/driver/create-route">
              <Button className="gap-2">
                <Plus className="h-5 w-5" />
                Create Route
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today's Earnings</p>
                <p className="text-2xl font-bold text-primary">$42</p>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Routes</p>
                <p className="text-2xl font-bold">2</p>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Passengers</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
                <p className="text-2xl font-bold">98%</p>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>
        </div>

        {/* Routes Tabs */}
        <Tabs defaultValue="active" className="space-y-4">
          <TabsList>
            <TabsTrigger value="active">Active Routes</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {activeRoutes.map((route) => (
              <Card key={route.id} className="p-6 transition-all hover:shadow-card-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{route.date}</span>
                      <Clock className="ml-2 h-4 w-4" />
                      <span>{route.departureTime}</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <MapPin className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="font-medium">{route.startLocation}</p>
                        <div className="my-1 ml-2 h-6 w-px bg-border"></div>
                        <p className="font-medium">{route.endLocation}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          <span className="font-semibold text-primary">{route.bookedSeats}</span>
                          <span className="text-muted-foreground">/{route.totalSeats} booked</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-semibold">${route.earnings}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link to={`/driver/route/${route.id}`}>
                      <Button variant="outline">View Details</Button>
                    </Link>
                    <Button>Start Trip</Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {completedRoutes.map((route) => (
              <Card key={route.id} className="p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{route.date}</span>
                      <Clock className="ml-2 h-4 w-4" />
                      <span>{route.departureTime}</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <MapPin className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="font-medium">{route.startLocation}</p>
                        <div className="my-1 ml-2 h-6 w-px bg-border"></div>
                        <p className="font-medium">{route.endLocation}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          <span className="font-semibold">{route.bookedSeats} passengers</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-semibold text-primary">${route.earnings}</span>
                      </div>
                    </div>
                  </div>

                  <Link to={`/driver/route/${route.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
