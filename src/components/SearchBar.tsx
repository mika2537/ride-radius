import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="rounded-xl bg-card p-6 shadow-card-lg">
      <div className="space-y-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Pickup location"
            className="pl-10"
          />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Drop-off location"
            className="pl-10"
          />
        </div>
        <Button className="w-full gap-2">
          <Search className="h-5 w-5" />
          Search Routes
        </Button>
      </div>
    </div>
  );
};
