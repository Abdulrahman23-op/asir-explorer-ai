import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar,
  Clock,
  Users,
  Phone,
  Mail,
  MapPin,
  Car,
  Mountain,
  Camera,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { getBookings, saveBooking, type BookingData } from "@/lib/localStorage";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("book");
  const [selectedTour, setSelectedTour] = useState<string>("");
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    participants: "",
    name: "",
    phone: "",
    email: "",
    specialRequests: ""
  });
  const [bookings, setBookings] = useState<BookingData[]>(getBookings());
  const { toast } = useToast();

  const tours = [
    {
      id: '4x4-mountain',
      type: '4x4-tour' as const,
      title: t('booking.tours.mountainSafari.title'),
      description: t('booking.tours.mountainSafari.description'),
      duration: '6 hours',
      price: 'SAR 450',
      maxParticipants: 6,
      highlights: t('booking.tours.mountainSafari.highlights', { returnObjects: true }) as string[],
      includes: t('booking.tours.mountainSafari.includes', { returnObjects: true }) as string[],
      difficulty: 'Moderate'
    },
    {
      id: '4x4-desert',
      type: '4x4-tour' as const,
      title: t('booking.tours.desertExploration.title'),
      description: t('booking.tours.desertExploration.description'),
      duration: '5 hours',
      price: 'SAR 380',
      maxParticipants: 6,
      highlights: t('booking.tours.desertExploration.highlights', { returnObjects: true }) as string[],
      includes: t('booking.tours.desertExploration.includes', { returnObjects: true }) as string[],
      difficulty: 'Easy'
    },
    {
      id: 'hiking-guided',
      type: 'hiking' as const,
      title: t('booking.tours.guidedHiking.title'),
      description: t('booking.tours.guidedHiking.description'),
      duration: '4 hours',
      price: 'SAR 220',
      maxParticipants: 8,
      highlights: t('booking.tours.guidedHiking.highlights', { returnObjects: true }) as string[],
      includes: t('booking.tours.guidedHiking.includes', { returnObjects: true }) as string[],
      difficulty: 'Moderate'
    },
    {
      id: 'cultural-village',
      type: 'cultural' as const,
      title: t('booking.tours.culturalVillage.title'),
      description: t('booking.tours.culturalVillage.description'),
      duration: '3 hours',
      price: 'SAR 180',
      maxParticipants: 10,
      highlights: t('booking.tours.culturalVillage.highlights', { returnObjects: true }) as string[],
      includes: t('booking.tours.culturalVillage.includes', { returnObjects: true }) as string[],
      difficulty: 'Easy'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBooking = () => {
    if (!selectedTour || !formData.date || !formData.time || !formData.participants || !formData.name || !formData.phone) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const tour = tours.find(t => t.id === selectedTour);
    if (!tour) return;

    const booking: BookingData = {
      id: Date.now().toString(),
      type: tour.type,
      title: tour.title,
      date: formData.date,
      time: formData.time,
      participants: parseInt(formData.participants),
      contactInfo: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email
      },
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    saveBooking(booking);
    setBookings(getBookings());
    
    // Reset form
    setFormData({
      date: "",
      time: "",
      participants: "",
      name: "",
      phone: "",
      email: "",
      specialRequests: ""
    });
    setSelectedTour("");

    toast({
      title: "Booking submitted!",
      description: "Your booking has been submitted. We'll contact you shortly to confirm.",
    });

    setActiveTab("my-bookings");
  };

  const getStatusColor = (status: BookingData['status']) => {
    switch (status) {
      case 'confirmed': return 'default';
      case 'pending': return 'secondary';
      case 'cancelled': return 'destructive';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: BookingData['status']) => {
    switch (status) {
      case 'confirmed': return CheckCircle;
      case 'pending': return Clock;
      case 'cancelled': return AlertCircle;
      default: return Clock;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
          {t('booking.title')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('booking.subtitle')}
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="book" className="flex items-center gap-2">
            <Car className="h-4 w-4" />
            {t('booking.bookTour')}
          </TabsTrigger>
          <TabsTrigger value="my-bookings" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {t('booking.myBookings')} ({bookings.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="book" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Tour Selection */}
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('booking.chooseExperience')}</h2>
              <div className="space-y-4">
                {tours.map((tour) => (
                  <Card 
                    key={tour.id} 
                    className={`cursor-pointer transition-all hover-scale ${
                      selectedTour === tour.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedTour(tour.id)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{tour.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{tour.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-primary">{tour.price}</div>
                          <div className="text-xs text-muted-foreground">{t('booking.perPerson')}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {tour.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {t('booking.maxPeople')} {tour.maxParticipants}
                        </div>
                        <Badge variant={
                          tour.difficulty === 'Easy' ? 'secondary' : 
                          tour.difficulty === 'Moderate' ? 'default' : 'destructive'
                        } className="text-xs">
                          {tour.difficulty}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <div className="font-medium mb-1">{t('booking.highlights')}</div>
                          <ul className="text-muted-foreground space-y-0.5">
                            {tour.highlights.slice(0, 2).map((highlight, idx) => (
                              <li key={idx}>• {highlight}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="font-medium mb-1">{t('booking.includes')}</div>
                          <ul className="text-muted-foreground space-y-0.5">
                            {tour.includes.slice(0, 2).map((include, idx) => (
                              <li key={idx}>• {include}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('booking.bookingDetails')}</h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">{t('booking.date')} *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">{t('booking.time')} *</Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleInputChange('time', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="participants">{t('booking.participants')} *</Label>
                    <Input
                      id="participants"
                      type="number"
                      min="1"
                      max={selectedTour ? tours.find(t => t.id === selectedTour)?.maxParticipants : 10}
                      value={formData.participants}
                      onChange={(e) => handleInputChange('participants', e.target.value)}
                      placeholder={t('booking.placeholders.participants')}
                    />
                  </div>

                  <div>
                    <Label htmlFor="name">{t('booking.fullName')} *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder={t('booking.placeholders.fullName')}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">{t('booking.phone')} *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder={t('booking.placeholders.phone')}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">{t('booking.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder={t('booking.placeholders.email')}
                    />
                  </div>

                  <div>
                    <Label htmlFor="requests">{t('booking.specialRequests')}</Label>
                    <Textarea
                      id="requests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      placeholder={t('booking.placeholders.specialRequests')}
                      rows={3}
                    />
                  </div>

                  <Button 
                    onClick={handleBooking}
                    disabled={!selectedTour}
                    className="w-full"
                    size="lg"
                  >
                    {selectedTour ? t('booking.bookNow') : t('booking.selectTour')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="my-bookings">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">{t('booking.myBookings')}</h2>
            {bookings.length === 0 ? (
              <Card className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No bookings yet</h3>
                  <p className="text-muted-foreground">
                    Book your first adventure to see it here
                  </p>
                </div>
              </Card>
            ) : (
              <div className="space-y-4">
                {bookings.map((booking) => {
                  const StatusIcon = getStatusIcon(booking.status);
                  return (
                    <Card key={booking.id} className="animate-fade-in">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              {booking.title}
                              <Badge variant={getStatusColor(booking.status)} className="flex items-center gap-1">
                                <StatusIcon className="h-3 w-3" />
                                {booking.status}
                              </Badge>
                            </CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">
                              Booking ID: {booking.id}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span>{new Date(booking.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>{booking.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Users className="h-4 w-4 text-muted-foreground" />
                              <span>{booking.participants} participants</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                              <span>{booking.contactInfo.phone}</span>
                            </div>
                            {booking.contactInfo.email && (
                              <div className="flex items-center gap-2 text-sm">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <span>{booking.contactInfo.email}</span>
                              </div>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Booked on {new Date(booking.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Booking;