import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const filters = [
    { id: "all", label: t("events.categories.all"), icon: Calendar },
    { id: "festival", label: t("events.categories.festival"), icon: Star },
    { id: "cultural", label: t("events.categories.cultural"), icon: Users },
    { id: "adventure", label: t("events.categories.adventure"), icon: Mountain },
    { id: "food", label: t("events.categories.food"), icon: Utensils },
  ];

  const events: Event[] = [
    {
      id: '1',
      titleKey: 'asirSummerFestival',
      date: '2024-08-15',
      time: '18:00',
      category: 'festival',
      image: '/placeholder.svg'
    },
    {
      id: '2',
      titleKey: 'cookingWorkshop',
      date: '2024-08-20',
      time: '10:00',
      category: 'food',
      image: '/placeholder.svg'
    },
    {
      id: '3',
      titleKey: 'photographyExhibition',
      date: '2024-08-25',
      time: '16:00',
      category: 'cultural',
      image: '/placeholder.svg'
    },
    {
      id: '4',
      titleKey: 'hikingChallenge',
      date: '2024-08-30',
      time: '06:00',
      category: 'adventure',
      image: '/placeholder.svg'
    },
    {
      id: '5',
      titleKey: 'coffeeExperience',
      date: '2024-09-05',
      time: '14:00',
      category: 'cultural',
      image: '/placeholder.svg'
    },
    {
      id: '6',
      titleKey: 'folkMusicConcert',
      date: '2024-09-10',
      time: '20:00',
      category: 'festival',
      image: '/placeholder.svg'
    },
    {
      id: '7',
      titleKey: 'stargazingNight',
      date: '2024-09-15',
      time: '21:00',
      category: 'adventure',
      image: '/placeholder.svg'
    },
    {
      id: '8',
      titleKey: 'handicraftsFair',
      date: '2024-09-20',
      time: '09:00',
      category: 'cultural',
      image: '/placeholder.svg'
    }
  ];

  const filteredEvents = events.filter(event => {
    const eventTitle = t(`events.eventsList.${event.titleKey}.title`);
    const eventDescription = t(`events.eventsList.${event.titleKey}.description`);
    const eventLocation = t(`events.eventsList.${event.titleKey}.location`);
    const matchesSearch = eventTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         eventDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         eventLocation.toLowerCase().includes(searchQuery.toLowerCase());
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
        title: t("events.registrationCancelled"),
        description: `${t("events.unregisteredMessage")} ${t(`events.eventsList.${event.titleKey}.title`)}.`
      });
    } else {
      registerForEvent(eventId);
      setRegisteredEvents(getRegisteredEvents());
      toast({
        title: t("events.successfullyRegistered"),
        description: `${t("events.registeredMessage")} ${t(`events.eventsList.${event.titleKey}.title`)}.`
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
          {t("events.title")}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("events.subtitle")}
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder={t("events.searchPlaceholder")}
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
            <div className="text-sm text-muted-foreground">{t("events.totalEvents")}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{registeredEvents.length}</div>
            <div className="text-sm text-muted-foreground">{t("events.registered")}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">
              {events.filter(e => !isEventPast(e.date, e.time)).length}
            </div>
            <div className="text-sm text-muted-foreground">{t("events.upcoming_stats")}</div>
          </CardContent>
        </Card>
      </div>

      {/* Events Grid */}
      {filteredEvents.length === 0 ? (
        <Card className="h-64 flex items-center justify-center">
          <div className="text-center">
            <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{t("events.noEventsFound")}</h3>
            <p className="text-muted-foreground">
              {t("events.adjustSearch")}
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
                      {t(`events.categories.${event.category}`)}
                    </Badge>
                    {isPast && (
                      <Badge variant="outline" className="text-xs">
                        {t("events.pastEvent")}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg leading-tight">{t(`events.eventsList.${event.titleKey}.title`)}</CardTitle>
                  <p className="text-sm text-muted-foreground">{t(`events.eventsList.${event.titleKey}.description`)}</p>
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
                      <span>{t(`events.eventsList.${event.titleKey}.location`)}</span>
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
                      {isPast ? t("events.eventEnded") : isRegistered ? t("events.unregister") : t("events.register")}
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