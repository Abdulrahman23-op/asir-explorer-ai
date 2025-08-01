import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  Search,
  Filter,
  Star,
  Music,
  Utensils,
  Mountain
} from "lucide-react";
import { getRegisteredEvents, registerForEvent, unregisterFromEvent, isRegisteredForEvent, type Event } from "@/lib/localStorage";
import { useToast } from "@/hooks/use-toast";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [registeredEvents, setRegisteredEvents] = useState<string[]>(getRegisteredEvents());
  const { toast } = useToast();

  const filters = [
    { id: "all", label: "All Events", icon: Calendar },
    { id: "festival", label: "Festivals", icon: Star },
    { id: "cultural", label: "Cultural", icon: Users },
    { id: "adventure", label: "Adventure", icon: Mountain },
    { id: "food", label: "Food & Dining", icon: Utensils },
  ];

  const events: Event[] = [
    {
      id: '1',
      title: 'Asir Summer Festival',
      description: 'Annual celebration featuring traditional music, dance, and local crafts from the Asir region.',
      date: '2024-08-15',
      time: '18:00',
      location: 'Abha Cultural Center',
      category: 'festival',
      image: '/placeholder.svg'
    },
    {
      id: '2',
      title: 'Traditional Cooking Workshop',
      description: 'Learn to prepare authentic Asir cuisine with local chefs and traditional cooking methods.',
      date: '2024-08-20',
      time: '10:00',
      location: 'Heritage Village Kitchen',
      category: 'food',
      image: '/placeholder.svg'
    },
    {
      id: '3',
      title: 'Mountain Photography Exhibition',
      description: 'Showcase of stunning landscape photography capturing the beauty of Asir mountains.',
      date: '2024-08-25',
      time: '16:00',
      location: 'Asir Art Gallery',
      category: 'cultural',
      image: '/placeholder.svg'
    },
    {
      id: '4',
      title: 'Hiking Challenge',
      description: 'Guided group hike to the highest peaks in Asir National Park. All skill levels welcome.',
      date: '2024-08-30',
      time: '06:00',
      location: 'Asir National Park Entrance',
      category: 'adventure',
      image: '/placeholder.svg'
    },
    {
      id: '5',
      title: 'Coffee Culture Experience',
      description: 'Discover the rich coffee culture of Saudi Arabia with traditional preparation and tasting.',
      date: '2024-09-05',
      time: '14:00',
      location: 'Traditional Coffee House',
      category: 'cultural',
      image: '/placeholder.svg'
    },
    {
      id: '6',
      title: 'Folk Music Concert',
      description: 'Evening of traditional Asir folk music performed by local artists under the stars.',
      date: '2024-09-10',
      time: '20:00',
      location: 'Outdoor Amphitheater',
      category: 'festival',
      image: '/placeholder.svg'
    },
    {
      id: '7',
      title: 'Desert Stargazing Night',
      description: 'Professional astronomy session with telescopes and expert guides in the clear desert sky.',
      date: '2024-09-15',
      time: '21:00',
      location: 'Desert Observatory',
      category: 'adventure',
      image: '/placeholder.svg'
    },
    {
      id: '8',
      title: 'Local Handicrafts Fair',
      description: 'Browse and purchase authentic handmade crafts from local artisans and craftspeople.',
      date: '2024-09-20',
      time: '09:00',
      location: 'Main Market Square',
      category: 'cultural',
      image: '/placeholder.svg'
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "all" || event.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleRegistration = (eventId: string) => {
    const event = events.find(e => e.id === eventId);
    if (!event) return;

    if (isRegisteredForEvent(eventId)) {
      unregisterFromEvent(eventId);
      setRegisteredEvents(getRegisteredEvents());
      toast({
        title: "Registration cancelled",
        description: `You have unregistered from ${event.title}.`
      });
    } else {
      registerForEvent(eventId);
      setRegisteredEvents(getRegisteredEvents());
      toast({
        title: "Successfully registered!",
        description: `You are now registered for ${event.title}.`
      });
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'festival': return Star;
      case 'cultural': return Users;
      case 'adventure': return Mountain;
      case 'food': return Utensils;
      default: return Calendar;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'festival': return 'default';
      case 'cultural': return 'secondary';
      case 'adventure': return 'destructive';
      case 'food': return 'outline';
      default: return 'secondary';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const isEventPast = (dateString: string, timeString: string) => {
    const eventDateTime = new Date(`${dateString}T${timeString}`);
    return eventDateTime < new Date();
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
          Events & Experiences
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover exciting events, festivals, and cultural experiences happening in the Asir region. Join us in celebrating the rich heritage and natural beauty of Saudi Arabia.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search events, locations, or descriptions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter.id)}
                className="flex items-center gap-2"
              >
                <Icon className="h-4 w-4" />
                {filter.label}
                {filter.id !== "all" && (
                  <Badge variant="secondary" className="ml-1">
                    {events.filter(e => e.category === filter.id).length}
                  </Badge>
                )}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{events.length}</div>
            <div className="text-sm text-muted-foreground">Total Events</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{registeredEvents.length}</div>
            <div className="text-sm text-muted-foreground">Registered</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">
              {events.filter(e => !isEventPast(e.date, e.time)).length}
            </div>
            <div className="text-sm text-muted-foreground">Upcoming</div>
          </CardContent>
        </Card>
      </div>

      {/* Events Grid */}
      {filteredEvents.length === 0 ? (
        <Card className="h-64 flex items-center justify-center">
          <div className="text-center">
            <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No events found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const CategoryIcon = getCategoryIcon(event.category);
            const isPast = isEventPast(event.date, event.time);
            const isRegistered = isRegisteredForEvent(event.id);
            
            return (
              <Card 
                key={event.id} 
                className={`animate-fade-in hover-scale ${isPast ? 'opacity-75' : ''}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Badge 
                      variant={getCategoryColor(event.category)}
                      className="flex items-center gap-1"
                    >
                      <CategoryIcon className="h-3 w-3" />
                      {event.category}
                    </Badge>
                    {isPast && (
                      <Badge variant="outline" className="text-xs">
                        Past Event
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleRegistration(event.id)}
                      disabled={isPast}
                      variant={isRegistered ? "outline" : "default"}
                      size="sm"
                      className="flex-1"
                    >
                      {isPast ? 'Event Ended' : isRegistered ? 'Unregister' : 'Register'}
                    </Button>
                    <Button variant="outline" size="sm">
                      <MapPin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Events;