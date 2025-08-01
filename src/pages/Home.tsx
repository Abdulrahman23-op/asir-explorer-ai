import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { 
  MapPin, 
  Camera, 
  MessageCircle, 
  Car, 
  Calendar,
  ArrowRight,
  Shield,
  Thermometer,
  Clock,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();

  const quickActions = [
    {
      title: t("home.exploreMap"),
      description: "Interactive maps and navigation",
      icon: MapPin,
      href: "/map",
      color: "bg-blue-500"
    },
    {
      title: t("home.scanLandmark"),
      description: "AI-powered landmark recognition",
      icon: Camera,
      href: "/camera",
      color: "bg-green-500"
    },
    {
      title: t("home.virtualGuide"),
      description: "Your AI travel companion",
      icon: MessageCircle,
      href: "/guide",
      color: "bg-purple-500"
    },
    {
      title: t("home.book4x4"),
      description: "Off-road mountain adventures",
      icon: Car,
      href: "/booking",
      color: "bg-orange-500"
    },
    {
      title: t("home.viewEvents"),
      description: "Cultural events and festivals",
      icon: Calendar,
      href: "/events",
      color: "bg-red-500"
    }
  ];

  const featuredDestinations = [
    {
      id: 1,
      name: "Al Soudah Park",
      description: "Cable car rides and stunning mountain views",
      temperature: "18°C",
      difficulty: "Easy",
      image: "🏔️",
      rating: 4.8
    },
    {
      id: 2,
      name: "Rijal Almaa Village",
      description: "Traditional stone architecture and heritage",
      temperature: "22°C",
      difficulty: "Moderate",
      image: "🏘️",
      rating: 4.7
    },
    {
      id: 3,
      name: "Habala Hanging Village",
      description: "Suspended village adventure experience",
      temperature: "16°C",
      difficulty: "Challenging",
      image: "🌲",
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("home.welcome")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("home.subtitle")}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <Link to="/map">
                <MapPin className="h-5 w-5" />
                Explore Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link to="/guide">
                <MessageCircle className="h-5 w-5" />
                Get Guide
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Quick Actions */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">{t("home.quickActions")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <Link to={action.href}>
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`w-12 h-12 rounded-full ${action.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{action.title}</h3>
                      <p className="text-sm text-muted-foreground">{action.description}</p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">{t("home.featuredDestinations")}</h2>
            <Button variant="outline" className="gap-2" asChild>
              <Link to="/map">
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-6xl">
                  {destination.image}
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold">{destination.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{destination.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">{destination.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Thermometer className="h-4 w-4" />
                        {destination.temperature}
                      </div>
                      <Badge variant="outline">{destination.difficulty}</Badge>
                    </div>
                    
                    <Button className="w-full gap-2">
                      <MapPin className="h-4 w-4" />
                      Explore
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Safety Status & Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Safety Status */}
          <Card className="border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <Shield className="h-5 w-5" />
                {t("home.safetyStatus")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">All hiking trails are safe</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Weather conditions: Excellent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-sm">High altitude areas: Use caution</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Last updated: 2 hours ago
              </p>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {t("home.upcomingEvents")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <h4 className="font-medium">Asir Heritage Festival</h4>
                  <p className="text-sm text-muted-foreground">Abha Cultural Center</p>
                </div>
                <div className="text-right">
                  <Badge variant="outline">Cultural</Badge>
                  <p className="text-sm text-muted-foreground mt-1">
                    <Clock className="h-3 w-3 inline mr-1" />
                    Dec 15-20
                  </p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full gap-2" asChild>
                <Link to="/events">
                  View All Events
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;