import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Upload, 
  Scan, 
  Info, 
  MapPin, 
  Star,
  Clock,
  Mountain,
  Building
} from "lucide-react";

const SmartCamera = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [recognizedLandmark, setRecognizedLandmark] = useState<any>(null);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate AI recognition
    setTimeout(() => {
      setIsScanning(false);
      setRecognizedLandmark({
        name: "Al Soudah Cable Car Station",
        confidence: 94,
        category: "Mountain Resort",
        description: "The main cable car station offering panoramic views of the Asir mountains. Built in 2018, it's one of the most popular tourist attractions in the region.",
        historicalInfo: "Part of the Al Soudah development project, this station connects visitors to the mountain peaks and offers year-round access to high-altitude experiences.",
        tips: [
          "Best visited early morning for clear views",
          "Bring warm clothes - temperature drops at altitude",
          "Photography is excellent from the upper station"
        ],
        coordinates: "18.2688° N, 42.3647° E",
        elevation: "2,800m above sea level",
        rating: 4.7,
        reviews: 1284
      });
    }, 3000);
  };

  const handleUpload = () => {
    // Simulate file upload and recognition
    handleScan();
  };

  const landmarkExamples = [
    {
      name: "Rijal Almaa Village",
      image: "🏘️",
      description: "Traditional stone architecture",
      category: "Heritage Site"
    },
    {
      name: "Habala Hanging Village",
      image: "🌲",
      description: "Suspended mountain village",
      category: "Adventure Site"
    },
    {
      name: "Jabal Mareer",
      image: "🏔️",
      description: "Highest peak in Asir",
      category: "Mountain"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Smart Camera</h1>
        <p className="text-muted-foreground">AI-powered landmark recognition for Asir region</p>
      </div>

      {/* Camera Interface */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5" />
            Live Camera Feed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg overflow-hidden">
            {/* Camera Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              {isScanning ? (
                <div className="text-center space-y-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">🔍 Analyzing Image...</p>
                    <p className="text-sm text-muted-foreground">Using TensorFlow.js for landmark detection</p>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <div className="text-6xl">📷</div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">Point camera at a landmark</p>
                    <p className="text-sm text-muted-foreground">AI will identify Asir attractions automatically</p>
                  </div>
                </div>
              )}
            </div>

            {/* Scanning Overlay */}
            {isScanning && (
              <div className="absolute inset-0 border-4 border-primary animate-pulse rounded-lg"></div>
            )}

            {/* Recognition Result Overlay */}
            {recognizedLandmark && !isScanning && (
              <div className="absolute bottom-4 left-4 right-4">
                <Card className="bg-background/95 backdrop-blur">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="default" className="gap-1">
                        <Scan className="h-3 w-3" />
                        {recognizedLandmark.confidence}% Match
                      </Badge>
                      <Badge variant="outline">{recognizedLandmark.category}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{recognizedLandmark.name}</h3>
                    <p className="text-sm text-muted-foreground">{recognizedLandmark.description}</p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-4">
            <Button 
              onClick={handleScan} 
              disabled={isScanning}
              className="gap-2 flex-1 sm:flex-none"
            >
              <Scan className="h-4 w-4" />
              {isScanning ? "Scanning..." : "Scan Now"}
            </Button>
            <Button 
              variant="outline" 
              onClick={handleUpload}
              className="gap-2 flex-1 sm:flex-none"
            >
              <Upload className="h-4 w-4" />
              Upload Photo
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recognition Results */}
      {recognizedLandmark && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              Landmark Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold mb-1">Location Details</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {recognizedLandmark.coordinates}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mountain className="h-4 w-4" />
                    {recognizedLandmark.elevation}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-1">Rating</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{recognizedLandmark.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({recognizedLandmark.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold mb-2">Historical Information</h3>
                  <p className="text-sm text-muted-foreground">
                    {recognizedLandmark.historicalInfo}
                  </p>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div>
              <h3 className="font-semibold mb-2">Visitor Tips</h3>
              <div className="grid gap-2">
                {recognizedLandmark.tips.map((tip: string, index: number) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4 border-t">
              <Button className="gap-2">
                <MapPin className="h-4 w-4" />
                View on Map
              </Button>
              <Button variant="outline" className="gap-2">
                <Building className="h-4 w-4" />
                Virtual Tour
              </Button>
              <Button variant="outline" className="gap-2">
                <Clock className="h-4 w-4" />
                Add to Itinerary
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Try Recognizing These Landmarks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {landmarkExamples.map((example, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center space-y-3">
                  <div className="text-4xl">{example.image}</div>
                  <div>
                    <h3 className="font-semibold">{example.name}</h3>
                    <p className="text-sm text-muted-foreground">{example.description}</p>
                    <Badge variant="outline" className="mt-2">{example.category}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SmartCamera;