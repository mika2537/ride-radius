import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Plus, X, ArrowLeft, Calendar, Clock, DollarSign, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreateRoute = () => {
  const navigate = useNavigate();
  const [stops, setStops] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    startLocation: "",
    endLocation: "",
    date: "",
    time: "",
    seats: "",
    pricePerSeat: "",
    notes: ""
  });

  const addStop = () => {
    if (stops.length < 3) {
      setStops([...stops, ""]);
    }
  };

  const removeStop = (index: number) => {
    setStops(stops.filter((_, i) => i !== index));
  };

  const updateStop = (index: number, value: string) => {
    const newStops = [...stops];
    newStops[index] = value;
    setStops(newStops);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.startLocation || !formData.endLocation || !formData.date || !formData.time || !formData.seats || !formData.pricePerSeat) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Route created successfully!");
    navigate("/driver/dashboard");
  };

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
            <div>
              <h1 className="text-2xl font-bold">Create New Route</h1>
              <p className="text-muted-foreground">Set up your route details and pricing</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Route Details Card */}
            <Card className="p-6">
              <h2 className="mb-6 flex items-center gap-2 text-xl font-bold">
                <MapPin className="h-5 w-5 text-primary" />
                Route Details
              </h2>

              <div className="space-y-4">
                {/* Start Location */}
                <div className="space-y-2">
                  <Label htmlFor="start">Start Location *</Label>
                  <Input
                    id="start"
                    placeholder="e.g., Downtown Plaza, 123 Main St"
                    value={formData.startLocation}
                    onChange={(e) => setFormData({ ...formData, startLocation: e.target.value })}
                    required
                  />
                </div>

                {/* Intermediate Stops */}
                {stops.map((stop, index) => (
                  <div key={index} className="space-y-2">
                    <Label htmlFor={`stop-${index}`}>Stop {index + 1}</Label>
                    <div className="flex gap-2">
                      <Input
                        id={`stop-${index}`}
                        placeholder="Optional intermediate stop"
                        value={stop}
                        onChange={(e) => updateStop(index, e.target.value)}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeStop(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}

                {/* Add Stop Button */}
                {stops.length < 3 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={addStop}
                    className="w-full gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add Stop (Optional - Max 3)
                  </Button>
                )}

                {/* End Location */}
                <div className="space-y-2">
                  <Label htmlFor="end">End Location *</Label>
                  <Input
                    id="end"
                    placeholder="e.g., Airport Terminal, Gate 5"
                    value={formData.endLocation}
                    onChange={(e) => setFormData({ ...formData, endLocation: e.target.value })}
                    required
                  />
                </div>
              </div>
            </Card>

            {/* Schedule Card */}
            <Card className="p-6">
              <h2 className="mb-6 flex items-center gap-2 text-xl font-bold">
                <Clock className="h-5 w-5 text-primary" />
                Schedule
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="date">Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Departure Time *</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    required
                  />
                </div>
              </div>
            </Card>

            {/* Capacity & Pricing Card */}
            <Card className="p-6">
              <h2 className="mb-6 flex items-center gap-2 text-xl font-bold">
                <DollarSign className="h-5 w-5 text-primary" />
                Capacity & Pricing
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="seats">Available Seats *</Label>
                  <Input
                    id="seats"
                    type="number"
                    min="1"
                    max="8"
                    placeholder="1-8"
                    value={formData.seats}
                    onChange={(e) => setFormData({ ...formData, seats: e.target.value })}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    How many passengers can you take?
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Price Per Seat *</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="price"
                      type="number"
                      min="1"
                      step="0.50"
                      placeholder="15.00"
                      className="pl-7"
                      value={formData.pricePerSeat}
                      onChange={(e) => setFormData({ ...formData, pricePerSeat: e.target.value })}
                      required
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Set your price per passenger
                  </p>
                </div>
              </div>

              {/* Estimated Earnings Preview */}
              {formData.seats && formData.pricePerSeat && (
                <div className="mt-4 rounded-lg bg-primary/10 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Potential Earnings (Full):</span>
                    <span className="text-2xl font-bold text-primary">
                      ${(Number(formData.seats) * Number(formData.pricePerSeat)).toFixed(2)}
                    </span>
                  </div>
                </div>
              )}
            </Card>

            {/* Additional Notes Card */}
            <Card className="p-6">
              <h2 className="mb-6 text-xl font-bold">Additional Notes</h2>
              
              <div className="space-y-2">
                <Label htmlFor="notes">Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Any special requirements or information for passengers..."
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Link to="/driver/dashboard" className="flex-1">
                <Button type="button" variant="outline" className="w-full">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" className="flex-1">
                Create Route
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateRoute;
