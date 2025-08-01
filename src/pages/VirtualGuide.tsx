import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Clock, 
  Star, 
  Navigation, 
  Camera, 
  Mountain,
  Heart,
  Filter,
  Bot
} from "lucide-react";
import { getFavorites, saveFavorite, removeFavorite, isFavorite } from "@/lib/localStorage";
import { useToast } from "@/hooks/use-toast";

const VirtualGuide = () => {
  const { t } = useTranslation();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [duration, setDuration] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const interests = [
    { id: 'adventure', label: t('guide.interestTypes.adventure'), icon: Mountain },
    { id: 'culture', label: t('guide.interestTypes.cultural'), icon: Star },
    { id: 'nature', label: t('guide.interestTypes.nature'), icon: MapPin },
    { id: 'photography', label: t('guide.interestTypes.photography'), icon: Camera },
    { id: 'hiking', label: t('guide.interestTypes.hiking'), icon: Navigation },
    { id: 'history', label: t('guide.interestTypes.historical'), icon: Clock }
  ];

  const sampleRecommendations = [
    {
      id: '1',
      title: 'Asir National Park Adventure',
      description: 'Explore the stunning landscapes of Asir National Park with guided hiking trails through juniper forests and mountain peaks.',
      duration: '6-8 hours',
      difficulty: 'Moderate',
      highlights: ['Juniper Forest Trail', 'Scenic Viewpoints', 'Wildlife Spotting', 'Photography Opportunities'],
      estimatedCost: 'SAR 200-300',
      bestTime: 'Morning start recommended',
      includes: ['Professional guide', 'Transportation', 'Refreshments'],
      coordinates: { lat: 18.2148, lng: 42.5091 }
    },
    {
      id: '2', 
      title: 'Rijal Almaa Heritage Village',
      description: 'Step back in time at this UNESCO-recognized heritage village, featuring traditional stone architecture and cultural exhibitions.',
      duration: '3-4 hours',
      difficulty: 'Easy',
      highlights: ['Traditional Architecture', 'Local Handicrafts', 'Cultural Museum', 'Mountain Views'],
      estimatedCost: 'SAR 100-150',
      bestTime: 'Any time of day',
      includes: ['Village entry', 'Guided tour', 'Cultural presentation'],
      coordinates: { lat: 18.1951, lng: 42.2411 }
    },
    {
      id: '3',
      title: 'Habala Village Cable Car Experience',
      description: 'Take a thrilling cable car ride to the hanging village of Habala, suspended on cliff edges with breathtaking views.',
      duration: '4-5 hours',
      difficulty: 'Easy',
      highlights: ['Cable Car Ride', 'Cliff Village', 'Panoramic Views', 'Traditional Crafts'],
      estimatedCost: 'SAR 150-250', 
      bestTime: 'Afternoon for best lighting',
      includes: ['Cable car tickets', 'Village tour', 'Local guide'],
      coordinates: { lat: 18.0833, lng: 42.4167 }
    }
  ];

  const generateRecommendations = () => {
    if (selectedInterests.length === 0) {
      toast({
        title: "Please select your interests",
        description: "Choose at least one interest to get personalized recommendations.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    // Simulate AI processing
    setTimeout(() => {
      setRecommendations(sampleRecommendations);
      setIsGenerating(false);
      toast({
        title: "Recommendations generated!",
        description: "Your personalized Asir adventure itinerary is ready.",
      });
    }, 2000);
  };

  const toggleInterest = (interestId: string) => {
    setSelectedInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const toggleFavorite = (recommendation: any) => {
    if (isFavorite(recommendation.id)) {
      removeFavorite(recommendation.id);
      toast({
        title: "Removed from favorites",
        description: `${recommendation.title} has been removed from your favorites.`
      });
    } else {
      const landmark = {
        id: recommendation.id,
        name: recommendation.title,
        type: 'recommendation',
        description: recommendation.description,
        coordinates: recommendation.coordinates,
        difficulty: recommendation.difficulty as any,
        distance: recommendation.duration,
        estimatedTime: recommendation.duration,
        features: recommendation.highlights
      };
      saveFavorite(landmark);
      toast({
        title: "Added to favorites",
        description: `${recommendation.title} has been added to your favorites.`
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Bot className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t('guide.title')}
          </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('guide.subtitle')}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Preferences Panel */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                {t('guide.preferences')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Interests */}
              <div>
                <label className="text-sm font-medium mb-3 block">{t('guide.interests')}</label>
                <div className="grid grid-cols-2 gap-2">
                  {interests.map((interest) => {
                    const Icon = interest.icon;
                    const isSelected = selectedInterests.includes(interest.id);
                    return (
                      <Button
                        key={interest.id}
                        variant={isSelected ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleInterest(interest.id)}
                        className="flex items-center gap-1 h-auto py-2 px-3"
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-xs">{interest.label}</span>
                      </Button>
                    );
                  })}
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="text-sm font-medium mb-2 block">{t('guide.duration')}</label>
                <Input
                  placeholder={t('guide.placeholders.duration')}
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>

              {/* Group Size */}
              <div>
                <label className="text-sm font-medium mb-2 block">{t('guide.groupSize')}</label>
                <Input
                  placeholder={t('guide.placeholders.groupSize')}
                  value={groupSize}
                  onChange={(e) => setGroupSize(e.target.value)}
                />
              </div>

              {/* Special Requests */}
              <div>
                <label className="text-sm font-medium mb-2 block">{t('guide.specialRequests')}</label>
                <Textarea
                  placeholder={t('guide.placeholders.specialRequests')}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  rows={3}
                />
              </div>

              <Button 
                onClick={generateRecommendations}
                disabled={isGenerating}
                className="w-full"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <Bot className="mr-2 h-4 w-4 animate-spin" />
                    {t('guide.generating')}
                  </>
                ) : (
                  <>
                    <Bot className="mr-2 h-4 w-4" />
                    {t('guide.getRecommendations')}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations */}
        <div className="lg:col-span-2">
          {recommendations.length === 0 ? (
            <Card className="h-96 flex items-center justify-center">
              <div className="text-center">
                <Bot className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t('guide.readyToExplore')}</h3>
                <p className="text-muted-foreground">
                  {t('guide.fillPreferences')}
                </p>
              </div>
            </Card>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Your Personalized Itinerary</h2>
                <Badge variant="secondary" className="text-sm">
                  {recommendations.length} recommendations
                </Badge>
              </div>

              {recommendations.map((rec, index) => (
                <Card key={rec.id} className="animate-fade-in">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{rec.title}</CardTitle>
                        <p className="text-muted-foreground">{rec.description}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFavorite(rec)}
                        className="shrink-0"
                      >
                        <Heart 
                          className={`h-5 w-5 ${
                            isFavorite(rec.id) ? 'fill-red-500 text-red-500' : ''
                          }`} 
                        />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{rec.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Badge variant={
                            rec.difficulty === 'Easy' ? 'secondary' : 
                            rec.difficulty === 'Moderate' ? 'default' : 'destructive'
                          }>
                            {rec.difficulty}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {rec.bestTime}
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-primary">{rec.estimatedCost}</div>
                        <div className="text-muted-foreground">Estimated cost</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium mb-2">Highlights</h4>
                        <div className="flex flex-wrap gap-1">
                          {rec.highlights.map((highlight: string, idx: number) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Includes</h4>
                        <ul className="text-sm text-muted-foreground">
                          {rec.includes.map((item: string, idx: number) => (
                            <li key={idx}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button size="sm" className="flex-1">
                        <Navigation className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <MapPin className="mr-2 h-4 w-4" />
                        View on Map
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VirtualGuide;