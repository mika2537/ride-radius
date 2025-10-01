import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Star } from "lucide-react";

interface RouteCardProps {
  route: {
    id: number;
    driverName: string;
    driverRating: number;
    vehicleModel: string;
    startLocation: string;
    endLocation: string;
    departureTime: string;
    availableSeats: number;
    pricePerSeat: number;
    distance: string;
  };
}

export const RouteCard = ({ route }: RouteCardProps) => {
  return (
    <div className="rounded-xl bg-card p-6 shadow-card transition-all hover:shadow-card-lg">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Left Section - Route Info */}
        <div className="flex-1 space-y-3">
          {/* Driver Info */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
              {route.driverName.charAt(0)}
            </div>
            <div>
              <h3 className="font-semibold">{route.driverName}</h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span>{route.driverRating}</span>
                <span className="mx-1">•</span>
                <span>{route.vehicleModel}</span>
              </div>
            </div>
          </div>

          {/* Route Details */}
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <MapPin className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
              <div className="min-w-0">
                <p className="font-medium truncate">{route.startLocation}</p>
                <div className="my-1 ml-2 h-6 w-px bg-border"></div>
                <p className="font-medium truncate">{route.endLocation}</p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{route.departureTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{route.availableSeats} seats</span>
            </div>
            <div>
              <span>{route.distance}</span>
            </div>
          </div>
        </div>

        {/* Right Section - Price & Action */}
        <div className="flex flex-row md:flex-col items-center justify-between md:justify-center gap-4 md:gap-2 border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Price per seat</p>
            <p className="text-2xl font-bold text-primary">${route.pricePerSeat}</p>
          </div>
          <Button className="w-full md:w-auto">
            Book Seat
          </Button>
        </div>
      </div>
    </div>
  );
};
