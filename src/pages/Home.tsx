import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Camera, MessageCircle, Calendar, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const quickActions = [
    {
      title: "Smart Map",
      description: "Explore Asir with interactive maps",
      icon: MapPin,
      path: "/map",
      color: "bg-gradient-to-br from-primary to-primary/80",
    },
    {
      title: "Smart Camera",
      description: "AI-powered landmark recognition",
      icon: Camera,
      path: "/camera",
      color: "bg-gradient-to-br from-accent to-accent/80",
    },
    {
      title: "Virtual Guide",
      description: "Chat with AI about local culture",
      icon: MessageCircle,
      path: "/guide",
      color: "bg-gradient-to-br from-secondary to-secondary/80",
    },
  ];

  const destinations = [
    {
      name: "Al Soudah",
      description: "Mountain resort with cable cars",
      image: "🏔️",
      temp: "18°C",
      difficulty: "Easy",
    },
    {
      name: "Rijal Almaa",
      description: "Historic heritage village",
      image: "🏘️",
      temp: "22°C",
      difficulty: "Moderate",
    },
    {
      name: "Habala",
      description: "Hanging village experience",
      image: "🌲",
      temp: "20°C",
      difficulty: "Challenging",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-accent p-8 text-primary-foreground">
        <div className="relative z-10">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              Welcome to Mazar
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Discover Asir's Hidden Treasures
            </h1>
            <p className="text-lg opacity-90 mb-6 max-w-2xl">
              Your AI-powered guide to the most beautiful region in Saudi Arabia. 
              Explore mountains, heritage villages, and cultural experiences with smart recommendations.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/map">
              <Button variant="secondary" size="lg" className="gap-2">
                <MapPin className="h-5 w-5" />
                Start Exploring
              </Button>
            </Link>
            <Link to="/recommendations">
              <Button variant="outline" size="lg" className="gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Star className="h-5 w-5" />
                Get Recommendations
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-4 right-4 text-6xl opacity-20">🏔️</div>
        <div className="absolute bottom-4 left-4 text-4xl opacity-20">🌲</div>
      </section>

      {/* Quick Actions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.path} to={action.path}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-0 overflow-hidden">
                  <div className={`${action.color} p-6`}>
                    <Icon className="h-8 w-8 text-white mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {action.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {action.description}
                    </p>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Featured Destinations</h2>
          <Link to="/map">
            <Button variant="outline" size="sm">View All</Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {destinations.map((destination) => (
            <Card key={destination.name} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="text-3xl">{destination.image}</div>
                  <Badge variant="outline">{destination.temp}</Badge>
                </div>
                <CardTitle className="text-lg">{destination.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  {destination.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge 
                    variant={destination.difficulty === "Easy" ? "default" : destination.difficulty === "Moderate" ? "secondary" : "destructive"}
                  >
                    {destination.difficulty}
                  </Badge>
                  <Link to="/map">
                    <Button size="sm" variant="ghost">
                      Explore →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Safety & Events */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
              <Shield className="h-5 w-5" />
              Safety Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
              All major routes are clear. Weather conditions are optimal for hiking.
            </p>
            <Link to="/safety">
              <Button variant="outline" size="sm" className="border-amber-300 text-amber-800 hover:bg-amber-100">
                View Details
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
              <Calendar className="h-5 w-5" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
              Soudah Season starts in 2 days! Don't miss cultural performances.
            </p>
            <Link to="/events">
              <Button variant="outline" size="sm" className="border-blue-300 text-blue-800 hover:bg-blue-100">
                View Calendar
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;