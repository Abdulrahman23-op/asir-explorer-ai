import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import { 
  MapPin, 
  Navigation, 
  Filter, 
  Mountain, 
  Building, 
  TreePine, 
  Utensils,
  Search,
  Route,
  Clock
} from "lucide-react";

const SmartMap = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();

  const filters = [
    { id: "all", label: t("common.all"), icon: MapPin },
    { id: "mountains", label: t("map.categories.mountains"), icon: Mountain },
    { id: "heritage", label: t("map.categories.heritage"), icon: Building },
    { id: "nature", label: t("map.categories.nature"), icon: TreePine },
    { id: "dining", label: t("map.categories.dining"), icon: Utensils },
  ];

  const landmarks = [
    {
      id: 1,
      name: "Al Soudah Park",
      type: "mountains",
      distance: "2.5 km",
      time: "5 min drive",
      description: "Cable car rides and mountain views",
      difficulty: "Easy",
      coordinates: "18.2688° N, 42.3647° E",
      features: ["Cable Car", "Restaurant", "Parking", "Kids Area"]
    },
    {
      id: 2,
      name: "Rijal Almaa Heritage Village",
      type: "heritage",
      distance: "15.2 km",
      time: "25 min drive",
      description: "Traditional stone architecture",
      difficulty: "Moderate",
      coordinates: "18.1951° N, 42.2394° E",
      features: ["Museum", "Traditional Crafts", "Photography", "Guided Tours"]
    },
    {
      id: 3,
      name: "Habala Hanging Village",
      type: "nature",
      distance: "45.8 km",
      time: "1h 15min drive",
      description: "Suspended village adventure",
      difficulty: "Challenging",
      coordinates: "18.0769° N, 42.4512° E",
      features: ["Cable Car", "Hiking", "Adventure", "Photography"]
    },
    {
      id: 4,
      name: "Jabal Mareer",
      type: "mountains",
      distance: "8.3 km",
      time: "15 min drive",
      description: "Highest peak in Asir region",
      difficulty: "Challenging",
      coordinates: "18.2123° N, 42.4234° E",
      features: ["Hiking", "Summit Views", "Camping", "Star Gazing"]
    },
    {
      id: 5,
      name: "Traditional Asiri Restaurant",
      type: "dining",
      distance: "1.2 km",
      time: "3 min walk",
      description: "Authentic local cuisine",
      difficulty: "Easy",
      coordinates: "18.2456° N, 42.3567° E",
      features: ["Local Cuisine", "Traditional Seating", "Live Music", "Takeaway"]
    }
  ];

  const filteredLandmarks = landmarks.filter(landmark => {
    const matchesFilter = selectedFilter === "all" || landmark.type === selectedFilter;
    const matchesSearch = landmark.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         landmark.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Moderate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Challenging": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">{t("map.title")}</h1>
            <p className="text-muted-foreground">{t("map.subtitle")}</p>
          </div>
          <Button className="gap-2">
            <Navigation className="h-4 w-4" />
            {t("map.myLocation")}
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("common.search")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter.id)}
                className="gap-2"
              >
                <Icon className="h-4 w-4" />
                {filter.label}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Map Placeholder */}
      <Card className="h-64 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-dashed">
        <CardContent className="h-full flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="text-6xl">🗺️</div>
            <h3 className="text-lg font-semibold text-foreground">{t("map.interactiveMap")}</h3>
            <p className="text-muted-foreground">{t("map.realTimeGps")}</p>
            <Badge variant="secondary">{t("map.mapComing")}</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {filteredLandmarks.length} {t("map.destinationsFound")}
          </h2>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            {t("map.moreFilters")}
          </Button>
        </div>

        <div className="grid gap-4">
          {filteredLandmarks.map((landmark) => (
            <Card key={landmark.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{landmark.name}</CardTitle>
                    <p className="text-muted-foreground text-sm mb-3">{landmark.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {landmark.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Badge className={getDifficultyColor(landmark.difficulty)}>
                    {t(`map.difficultyLevels.${landmark.difficulty.toLowerCase()}`)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Route className="h-4 w-4 text-muted-foreground" />
                    <span>{landmark.distance}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{landmark.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm col-span-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{landmark.coordinates}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" className="gap-2">
                    <Navigation className="h-4 w-4" />
                    {t("map.navigate")}
                  </Button>
                  <Button variant="outline" size="sm">
                    {t("map.details")}
                  </Button>
                  <Button variant="outline" size="sm">
                    {t("map.save")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmartMap;