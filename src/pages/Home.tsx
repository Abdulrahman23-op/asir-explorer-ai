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
      description: t("home.exploreMapDesc"),
      icon: MapPin,
      href: "/map",
      color: "bg-blue-500"
    },
    {
      title: t("home.scanLandmark"),
      description: t("home.scanLandmarkDesc"),
      icon: Camera,
      href: "/camera",
      color: "bg-green-500"
    },
    {
      title: t("home.virtualGuide"),
      description: t("home.virtualGuideDesc"),
      icon: MessageCircle,
      href: "/guide",
      color: "bg-purple-500"
    },
    {
      title: t("home.book4x4"),
      description: t("home.book4x4Desc"),
      icon: Car,
      href: "/booking",
      color: "bg-orange-500"
    },
    {
      title: t("home.viewEvents"),
      description: t("home.viewEventsDesc"),
      icon: Calendar,
      href: "/events",
      color: "bg-red-500"
    }
  ];

  const featuredDestinations = [
    {
      id: 1,
      name: t("home.alSoudahPark"),
      description: t("home.alSoudahDesc"),
      temperature: "18°C",
      difficulty: t("home.easy"),
      image: "🏔️",
      rating: 4.8
    },
    {
      id: 2,
      name: t("home.rijalAlmaaVillage"),
      description: t("home.rijalAlmaaDesc"),
      temperature: "22°C",
      difficulty: t("home.moderate"),
      image: "🏘️",
      rating: 4.7
    },
    {
      id: 3,
      name: t("home.habalaVillage"),
      description: t("home.habalaDesc"),
      temperature: "16°C",
      difficulty: t("home.challenging"),
      image: "🌲",
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative py-24 px-4 cultural-border-pattern mb-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 opacity-80">
            <img 
              src="/lovable-uploads/3f1fa2c3-a472-4d3e-b908-c3f8f93d9ff4.png" 
              alt="Mazar Logo Decoration" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-10 right-10 w-16 h-16 opacity-10" style={{
            background: `radial-gradient(circle, hsl(var(--cultural-green)), transparent 70%)`
          }}></div>
        </div>
        <div className="container mx-auto text-center space-y-6 relative">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-relaxed min-h-[120px] md:min-h-[180px] flex items-center justify-center">
              {t("home.welcome")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("home.subtitle")}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <Link to="/map">
                <MapPin className="h-5 w-5" />
                {t("home.exploreNow")}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link to="/guide">
                <MessageCircle className="h-5 w-5" />
                {t("home.getGuide")}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Image 1 */}
          <div className="relative group">
            <div className="absolute -inset-4 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" style={{
              background: `linear-gradient(135deg, hsl(var(--cultural-orange)), hsl(var(--cultural-green)))`
            }}></div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/lovable-uploads/63108b5e-e2f2-449d-b937-3f4d74076b91.png" 
                alt="Traditional Asir Architecture - Stone Village" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group">
            <div className="absolute -inset-4 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" style={{
              background: `linear-gradient(135deg, hsl(var(--cultural-green)), hsl(var(--primary)))`
            }}></div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/lovable-uploads/9b260ada-36ea-43a9-ae7b-eb04b4082073.png" 
                alt="Traditional Asir Architecture - Illuminated Village" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative group">
            <div className="absolute -inset-4 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" style={{
              background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--cultural-orange)))`
            }}></div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/lovable-uploads/1c4d9cb7-4891-4f51-844c-00cc0c7aca0d.png" 
                alt="Traditional Asir Architecture - Historic Village" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Quick Actions */}
        <section className="space-y-6 geometric-decoration">
          <div className="relative">
            <h2 className="text-3xl font-bold text-center">{t("home.quickActions")}</h2>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded" style={{
              background: `linear-gradient(to right, hsl(var(--cultural-orange)), hsl(var(--cultural-green)))`
            }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group cursor-pointer traditional-corner">
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
        <section className="space-y-6 cultural-border-pattern">
          <div className="flex items-center justify-between relative">
            <div className="relative">
              <h2 className="text-3xl font-bold">{t("home.featuredDestinations")}</h2>
              <div className="absolute -bottom-2 left-0 w-20 h-1 rounded" style={{
                background: `linear-gradient(to right, hsl(var(--cultural-green)), hsl(var(--cultural-orange)))`
              }}></div>
            </div>
            <Button variant="outline" className="gap-2" asChild>
              <Link to="/map">
                {t("home.viewAll")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDestinations.map((destination, index) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow geometric-decoration">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-6xl relative">
                  {destination.image}
                  <div className="absolute top-2 left-2 w-6 h-6 opacity-30" style={{
                    background: `conic-gradient(from ${index * 45}deg at 50% 50%, hsl(var(--cultural-orange)), transparent, hsl(var(--cultural-green)))`
                  }}></div>
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
                      {t("home.explore")}
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
          <Card className="border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800 traditional-corner">
            <CardHeader className="relative">
              <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <Shield className="h-5 w-5" />
                {t("home.safetyStatus")}
              </CardTitle>
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full opacity-50" style={{
                background: `hsl(var(--cultural-green))`
              }}></div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">{t("home.trailsSafe")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">{t("home.weatherExcellent")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-sm">{t("home.highAltitude")}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                {t("home.lastUpdated")}
              </p>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="geometric-decoration">
            <CardHeader className="relative">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {t("home.upcomingEvents")}
              </CardTitle>
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full opacity-50" style={{
                background: `hsl(var(--cultural-orange))`
              }}></div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 relative">
                <div className="absolute left-0 top-0 w-1 h-full rounded-l" style={{
                  background: `linear-gradient(to bottom, hsl(var(--cultural-orange)), hsl(var(--cultural-green)))`
                }}></div>
                <div className="ml-3">
                  <h4 className="font-medium">{t("home.asirFestival")}</h4>
                  <p className="text-sm text-muted-foreground">{t("home.abhaCenter")}</p>
                </div>
                <div className="text-right">
                  <Badge variant="outline">{t("home.cultural")}</Badge>
                  <p className="text-sm text-muted-foreground mt-1">
                    <Clock className="h-3 w-3 inline mr-1" />
                    Dec 15-20
                  </p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full gap-2" asChild>
                <Link to="/events">
                  {t("home.viewAllEvents")}
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