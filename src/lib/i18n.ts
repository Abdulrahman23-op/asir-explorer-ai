import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        map: "Smart Map",
        camera: "Smart Camera",
        guide: "Virtual Guide",
        booking: "4x4 Booking",
        events: "Events",
        settings: "Settings"
      },
      // Common
      common: {
        search: "Search",
        filter: "Filter",
        all: "All",
        save: "Save",
        cancel: "Cancel",
        submit: "Submit",
        loading: "Loading...",
        error: "Error",
        success: "Success",
        back: "Back",
        next: "Next",
        previous: "Previous",
        close: "Close",
        open: "Open",
        language: "Language",
        theme: "Theme",
        light: "Light",
        dark: "Dark"
      },
      // Home page
      home: {
        welcome: "Welcome to Smart Asir Explorer",
        subtitle: "Discover the beauty of Asir region with AI-powered exploration",
        exploreNow: "Explore Now",
        getGuide: "Get Guide",
        quickActions: "Quick Actions",
        exploreMap: "Explore Interactive Map",
        exploreMapDesc: "Interactive maps and navigation",
        scanLandmark: "Scan Landmarks with AI",
        scanLandmarkDesc: "AI-powered landmark recognition",
        virtualGuide: "Get Virtual Guide",
        virtualGuideDesc: "Your AI travel companion",
        book4x4: "Book 4x4 Adventure",
        book4x4Desc: "Off-road mountain adventures",
        viewEvents: "View Local Events",
        viewEventsDesc: "Cultural events and festivals",
        featuredDestinations: "Featured Destinations",
        viewAll: "View All",
        alSoudahPark: "Al Soudah Park",
        alSoudahDesc: "Cable car rides and stunning mountain views",
        rijalAlmaaVillage: "Rijal Almaa Village",
        rijalAlmaaDesc: "Traditional stone architecture and heritage",
        habalaVillage: "Habala Hanging Village",
        habalaDesc: "Suspended village adventure experience",
        easy: "Easy",
        moderate: "Moderate",
        challenging: "Challenging",
        explore: "Explore",
        safetyStatus: "Safety Status",
        trailsSafe: "All hiking trails are safe",
        weatherExcellent: "Weather conditions: Excellent",
        highAltitude: "High altitude areas: Use caution",
        lastUpdated: "Last updated: 2 hours ago",
        upcomingEvents: "Upcoming Events",
        asirFestival: "Asir Heritage Festival",
        abhaCenter: "Abha Cultural Center",
        cultural: "Cultural",
        viewAllEvents: "View All Events"
      },
      // Smart Map
      map: {
        title: "Smart Map",
        subtitle: "Discover amazing landmarks in the Asir region",
        myLocation: "My Location",
        interactiveMap: "Interactive Map",
        mapComing: "Maps Integration Coming Soon",
        realTimeGps: "Real-time GPS tracking and route navigation",
        destinationsFound: "destinations found",
        moreFilters: "More Filters",
        navigate: "Navigate",
        details: "Details",
        save: "Save",
        difficulty: "Difficulty",
        distance: "Distance",
        time: "Time",
        coordinates: "Coordinates",
        difficultyLevels: {
          easy: "Easy",
          moderate: "Moderate",
          challenging: "Challenging"
        },
        categories: {
          mountains: "Mountains",
          heritage: "Heritage",
          nature: "Nature",
          dining: "Dining"
        },
        landmarks: {
          alSoudahPark: {
            name: "Al Soudah Park",
            description: "Cable car rides and mountain views",
            features: {
              cableCar: "Cable Car",
              restaurant: "Restaurant",
              parking: "Parking",
              kidsArea: "Kids Area"
            }
          },
          rijalAlmaaVillage: {
            name: "Rijal Almaa Heritage Village",
            description: "Traditional stone architecture",
            features: {
              museum: "Museum",
              traditionalCrafts: "Traditional Crafts",
              photography: "Photography",
              guidedTours: "Guided Tours"
            }
          },
          habalaVillage: {
            name: "Habala Hanging Village",
            description: "Suspended village adventure",
            features: {
              cableCar: "Cable Car",
              hiking: "Hiking",
              adventure: "Adventure",
              photography: "Photography"
            }
          },
          jabalMareer: {
            name: "Jabal Mareer",
            description: "Highest peak in Asir region",
            features: {
              hiking: "Hiking",
              summitViews: "Summit Views",
              camping: "Camping",
              starGazing: "Star Gazing"
            }
          },
          asiriRestaurant: {
            name: "Traditional Asiri Restaurant",
            description: "Authentic local cuisine",
            features: {
              localCuisine: "Local Cuisine",
              traditionalSeating: "Traditional Seating",
              liveMusic: "Live Music",
              takeaway: "Takeaway"
            }
          }
        }
      },
      // Smart Camera
      camera: {
        title: "Smart Camera",
        subtitle: "Point your camera at landmarks to learn more about them",
        liveFeed: "Live Camera Feed",
        scanNow: "Scan Now",
        uploadPhoto: "Upload Photo",
        scanning: "Scanning for landmarks...",
        pointCamera: "Point your camera at a landmark",
        aiIdentify: "AI will identify Asir attractions automatically",
        analyzingImage: "Analyzing Image...",
        usingTensorFlow: "Using TensorFlow.js for landmark detection",
        match: "Match",
        landmarkInfo: "Landmark Information",
        location: "Location",
        locationDetails: "Location Details",
        historicalInfo: "Historical Information",
        tips: "Visitor Tips",
        rating: "Rating",
        reviews: "Reviews",
        tryRecognizing: "Try Recognizing These Landmarks",
        viewOnMap: "View on Map",
        virtualTour: "Virtual Tour",
        addToItinerary: "Add to Itinerary",
        landmarks: {
          rijal: "Rijal Almaa Village",
          rijal_desc: "Traditional stone architecture",
          rijal_category: "Heritage Site",
          habala: "Habala Hanging Village",
          habala_desc: "Suspended mountain village",
          habala_category: "Adventure Site",
          mareer: "Jabal Mareer",
          mareer_desc: "Highest peak in Asir",
          mareer_category: "Mountain"
        }
      },
      // Virtual Guide
      guide: {
        title: "Virtual Guide",
        subtitle: "Get AI-powered personalized recommendations for your Asir adventure. Tell us your preferences and we'll create the perfect itinerary.",
        getRecommendations: "Get Recommendations",
        preferences: "Your Preferences",
        interests: "What interests you?",
        duration: "Preferred Duration",
        groupSize: "Group Size",
        specialRequests: "Special Requests",
        generating: "Generating recommendations...",
        readyToExplore: "Ready to explore Asir?",
        fillPreferences: "Fill out your preferences and get personalized recommendations",
        interestTypes: {
          adventure: "Adventure",
          cultural: "Cultural Sites",
          nature: "Nature",
          photography: "Photography",
          hiking: "Hiking",
          historical: "Historical"
        },
        placeholders: {
          duration: "e.g., Half day, Full day, 2 days",
          groupSize: "e.g., 2 adults, Family of 4",
          specialRequests: "Any special requirements, accessibility needs, or preferences..."
        }
      },
      // Booking
      booking: {
        title: "Book Your Adventure",
        subtitle: "Choose from our exciting tours and experiences in the beautiful Asir region. Book now and create unforgettable memories.",
        bookTour: "Book a Tour",
        myBookings: "My Bookings",
        chooseExperience: "Choose Your Experience",
        bookingDetails: "Booking Details",
        date: "Date",
        time: "Time",
        participants: "Number of Participants",
        fullName: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
        specialRequests: "Special Requests",
        bookNow: "Book Now",
        selectTour: "Select a Tour First",
        success: "Booking confirmed successfully!",
        perPerson: "per person",
        maxPeople: "Max",
        highlights: "Highlights",
        includes: "Includes",
        tours: {
          mountainSafari: {
            title: "Mountain Safari Adventure",
            description: "Explore the rugged mountain terrain of Asir with our expert guides in a comfortable 4x4 vehicle.",
            highlights: ["Mountain trails", "Scenic viewpoints"],
            includes: ["4x4 vehicle", "Professional driver"]
          },
          desertExploration: {
            title: "Desert Exploration",
            description: "Experience the vast desert landscapes surrounding Asir with dune bashing and sunset views.",
            highlights: ["Dune bashing", "Sunset photography"],
            includes: ["4x4 vehicle", "Professional driver"]
          },
          guidedHiking: {
            title: "Guided Hiking Experience",
            description: "Trek through the beautiful trails of Asir National Park with experienced local guides.",
            highlights: ["Juniper forests", "Mountain peaks"],
            includes: ["Professional guide", "Safety equipment"]
          },
          culturalVillage: {
            title: "Cultural Village Tour",
            description: "Visit traditional villages and experience authentic Asir culture and heritage.",
            highlights: ["Traditional architecture", "Local crafts"],
            includes: ["Transportation", "Local guide"]
          }
        },
        placeholders: {
          date: "mm/dd/yyyy",
          time: "--:-- --",
          participants: "Enter number of people",
          fullName: "Enter your full name",
          phone: "+966 xxx xxx xxx",
          email: "your@email.com",
          specialRequests: "Any special requirements or requests..."
        }
      },
      // Events
      events: {
        title: "Local Events",
        subtitle: "Discover cultural events and festivals in the Asir region",
        upcoming: "Upcoming Events",
        past: "Past Events",
        createEvent: "Create Event",
        eventTitle: "Event Title",
        eventDescription: "Event Description",
        eventDate: "Event Date",
        eventTime: "Event Time",
        eventLocation: "Event Location",
        eventCategory: "Event Category",
        categories: {
          cultural: "Cultural",
          festival: "Festival",
          adventure: "Adventure",
          food: "Food & Dining",
          workshop: "Workshop",
          music: "Music"
        },
        interested: "Interested",
        attending: "Attending"
      }
    }
  },
    ar: {
    translation: {
      // Navigation
      nav: {
        home: "الرئيسية",
        map: "الخريطة الذكية",
        camera: "الكاميرا الذكية",
        guide: "المرشد الافتراضي",
        booking: "حجز رحلات الدفع الرباعي",
        events: "الفعاليات",
        settings: "الإعدادات"
      },
      // Common
      common: {
        search: "البحث",
        filter: "تصفية",
        all: "الكل",
        save: "حفظ",
        cancel: "إلغاء",
        submit: "إرسال",
        loading: "جارٍ التحميل...",
        error: "خطأ",
        success: "نجح",
        back: "رجوع",
        next: "التالي",
        previous: "السابق",
        close: "إغلاق",
        open: "فتح",
        language: "اللغة",
        theme: "المظهر",
        light: "فاتح",
        dark: "داكن"
      },
      // Home page
      home: {
        welcome: "مرحباً بك في مستكشف عسير الذكي",
        subtitle: "اكتشف جمال منطقة عسير مع الاستكشاف المدعوم بالذكاء الاصطناعي",
        exploreNow: "استكشف الآن",
        getGuide: "احصل على المرشد",
        quickActions: "الإجراءات السريعة",
        exploreMap: "استكشف الخريطة التفاعلية",
        exploreMapDesc: "خرائط تفاعلية وملاحة",
        scanLandmark: "امسح المعالم بالذكاء الاصطناعي",
        scanLandmarkDesc: "التعرف على المعالم بالذكاء الاصطناعي",
        virtualGuide: "احصل على مرشد افتراضي",
        virtualGuideDesc: "رفيق السفر الذكي",
        book4x4: "احجز مغامرة الدفع الرباعي",
        book4x4Desc: "مغامرات جبلية بالسيارات الرباعية",
        viewEvents: "عرض الفعاليات المحلية",
        viewEventsDesc: "الفعاليات الثقافية والمهرجانات",
        featuredDestinations: "الوجهات المميزة",
        viewAll: "عرض الكل",
        alSoudahPark: "منتزه السودة",
        alSoudahDesc: "رحلات التلفريك ومناظر جبلية خلابة",
        rijalAlmaaVillage: "قرية رجال ألمع",
        rijalAlmaaDesc: "العمارة الحجرية التقليدية والتراث",
        habalaVillage: "قرية حبلة المعلقة",
        habalaDesc: "تجربة قرية معلقة مغامرة",
        easy: "سهل",
        moderate: "متوسط",
        challenging: "صعب",
        explore: "استكشف",
        safetyStatus: "حالة السلامة",
        trailsSafe: "جميع مسارات المشي آمنة",
        weatherExcellent: "الأحوال الجوية: ممتازة",
        highAltitude: "المناطق العالية: استخدم الحذر",
        lastUpdated: "آخر تحديث: منذ ساعتين",
        upcomingEvents: "الفعاليات القادمة",
        asirFestival: "مهرجان عسير للتراث",
        abhaCenter: "مركز أبها الثقافي",
        cultural: "ثقافي",
        viewAllEvents: "عرض جميع الفعاليات"
      },
      // Smart Map
      map: {
        title: "الخريطة الذكية",
        subtitle: "اكتشف المعالم المذهلة في منطقة عسير",
        myLocation: "موقعي",
        interactiveMap: "الخريطة التفاعلية",
        mapComing: "تكامل الخريطة قريباً",
        realTimeGps: "تتبع GPS في الوقت الفعلي والتنقل",
        destinationsFound: "وجهة موجودة",
        moreFilters: "المزيد من التصفيات",
        navigate: "التنقل",
        details: "التفاصيل",
        save: "حفظ",
        difficulty: "الصعوبة",
        distance: "المسافة",
        time: "الوقت",
        coordinates: "الإحداثيات",
        difficultyLevels: {
          easy: "سهل",
          moderate: "متوسط",
          challenging: "صعب"
        },
        categories: {
          mountains: "جبال",
          heritage: "تراث",
          nature: "طبيعة",
          dining: "مطاعم"
        },
        landmarks: {
          alSoudahPark: {
            name: "منتزه السودة",
            description: "رحلات التلفريك ومناظر جبلية خلابة",
            features: {
              cableCar: "التلفريك",
              restaurant: "مطعم",
              parking: "موقف سيارات",
              kidsArea: "منطقة الأطفال"
            }
          },
          rijalAlmaaVillage: {
            name: "قرية رجال ألمع التراثية",
            description: "العمارة الحجرية التقليدية",
            features: {
              museum: "متحف",
              traditionalCrafts: "الحرف التقليدية",
              photography: "التصوير",
              guidedTours: "جولات مرشدة"
            }
          },
          habalaVillage: {
            name: "قرية هابالا المعلقة",
            description: "مغامرة القرية المعلقة",
            features: {
              cableCar: "التلفريك",
              hiking: "المشي لمسافات طويلة",
              adventure: "مغامرة",
              photography: "التصوير"
            }
          },
          jabalMareer: {
            name: "جبل مارير",
            description: "أعلى قمة في منطقة عسير",
            features: {
              hiking: "المشي لمسافات طويلة",
              summitViews: "مناظر القمة",
              camping: "التخييم",
              starGazing: "مراقبة النجوم"
            }
          },
          asiriRestaurant: {
            name: "مطعم عسيري تقليدي",
            description: "المأكولات المحلية الأصيلة",
            features: {
              localCuisine: "المأكولات المحلية",
              traditionalSeating: "الجلوس التقليدي",
              liveMusic: "موسيقى حية",
              takeaway: "وجبات للخارج"
            }
          }
        }
      },
      // Smart Camera
      camera: {
        title: "الكاميرا الذكية",
        subtitle: "وجه كاميرتك نحو المعالم لتعرف المزيد عنها",
        liveFeed: "البث المباشر للكاميرا",
        scanNow: "امسح الآن",
        uploadPhoto: "رفع صورة",
        scanning: "جارٍ البحث عن المعالم...",
        pointCamera: "وجه كاميرتك نحو معلم",
        aiIdentify: "الذكاء الاصطناعي سيتعرف على معالم عسير تلقائياً",
        analyzingImage: "جاري تحليل الصورة...",
        usingTensorFlow: "باستخدام TensorFlow.js لاكتشاف المعالم",
        match: "تطابق",
        landmarkInfo: "معلومات المعلم",
        location: "الموقع",
        locationDetails: "تفاصيل الموقع",
        historicalInfo: "المعلومات التاريخية",
        tips: "نصائح للزوار",
        rating: "التقييم",
        reviews: "المراجعات",
        tryRecognizing: "جرب التعرف على هذه المعالم",
        viewOnMap: "عرض على الخريطة",
        virtualTour: "جولة افتراضية",
        addToItinerary: "إضافة للبرنامج",
        landmarks: {
          rijal: "قرية رجال المع",
          rijal_desc: "العمارة الحجرية التقليدية",
          rijal_category: "موقع تراثي",
          habala: "قرية حبلة المعلقة",
          habala_desc: "القرية الجبلية المعلقة",
          habala_category: "موقع مغامرات",
          mareer: "جبل مرير",
          mareer_desc: "أعلى قمة في عسير",
          mareer_category: "جبل"
        }
      },
      // Virtual Guide
      guide: {
        title: "المرشد الافتراضي الذكي",
        subtitle: "احصل على توصيات شخصية مدعومة بالذكاء الاصطناعي لمغامرتك في عسير. أخبرنا عن تفضيلاتك وسننشئ لك المسار المثالي.",
        getRecommendations: "احصل على التوصيات",
        preferences: "تفضيلاتك",
        interests: "ما الذي يثير اهتمامك؟",
        duration: "المدة المفضلة",
        groupSize: "حجم المجموعة",
        specialRequests: "طلبات خاصة",
        generating: "جاري إنشاء التوصيات...",
        readyToExplore: "مستعد لاستكشاف عسير؟",
        fillPreferences: "املأ تفضيلاتك واحصل على توصيات شخصية",
        interestTypes: {
          adventure: "المغامرة",
          cultural: "المواقع الثقافية",
          nature: "الطبيعة",
          photography: "التصوير",
          hiking: "المشي",
          historical: "التاريخي"
        },
        placeholders: {
          duration: "مثال: نصف يوم، يوم كامل، يومين",
          groupSize: "مثال: بالغين اثنين، عائلة من 4",
          specialRequests: "أي متطلبات خاصة، احتياجات إمكانية الوصول، أو تفضيلات..."
        }
      },
      // Booking
      booking: {
        title: "احجز مغامرتك",
        subtitle: "اختر من جولاتنا وتجاربنا المثيرة في منطقة عسير الجميلة. احجز الآن واصنع ذكريات لا تُنسى.",
        bookTour: "احجز جولة",
        myBookings: "حجوزاتي",
        chooseExperience: "اختر تجربتك",
        bookingDetails: "تفاصيل الحجز",
        date: "التاريخ",
        time: "الوقت",
        participants: "عدد المشاركين",
        fullName: "الاسم الكامل",
        phone: "رقم الهاتف",
        email: "عنوان البريد الإلكتروني",
        specialRequests: "طلبات خاصة",
        bookNow: "احجز الآن",
        selectTour: "اختر جولة أولاً",
        success: "تم تأكيد الحجز بنجاح!",
        perPerson: "للشخص",
        maxPeople: "الحد الأقصى",
        highlights: "أبرز المعالم",
        includes: "يشمل",
        tours: {
          mountainSafari: {
            title: "مغامرة سفاري الجبل",
            description: "استكشف التضاريس الجبلية الوعرة في عسير مع مرشدينا الخبراء في مركبة مريحة رباعية الدفع.",
            highlights: ["مسارات جبلية", "نقاط مراقبة ذات مناظر خلابة"],
            includes: ["مركبة رباعية الدفع", "سائق محترف"]
          },
          desertExploration: {
            title: "استكشاف الصحراء",
            description: "اختبر المناظر الطبيعية الصحراوية الشاسعة المحيطة بعسير مع الانزلاق على الكثبان ومناظر غروب الشمس.",
            highlights: ["الانزلاق على الكثبان", "تصوير غروب الشمس"],
            includes: ["مركبة رباعية الدفع", "سائق محترف"]
          },
          guidedHiking: {
            title: "تجربة المشي المُرشد",
            description: "تنزه عبر المسارات الجميلة في حديقة عسير الوطنية مع مرشدين محليين ذوي خبرة.",
            highlights: ["غابات العرعر", "قمم الجبال"],
            includes: ["مرشد محترف", "معدات السلامة"]
          },
          culturalVillage: {
            title: "جولة القرية الثقافية",
            description: "زر القرى التقليدية واختبر الثقافة والتراث الأصيل لعسير.",
            highlights: ["العمارة التقليدية", "الحرف المحلية"],
            includes: ["النقل", "مرشد محلي"]
          }
        },
        placeholders: {
          date: "شهر/يوم/سنة",
          time: "--:-- --",
          participants: "أدخل عدد الأشخاص",
          fullName: "أدخل اسمك الكامل",
          phone: "+966 xxx xxx xxx",
          email: "your@email.com",
          specialRequests: "أي متطلبات أو طلبات خاصة..."
        }
      },
      // Events
      events: {
        title: "الفعاليات المحلية",
        subtitle: "اكتشف الفعاليات الثقافية والمهرجانات في منطقة عسير",
        upcoming: "الفعاليات القادمة",
        past: "الفعاليات السابقة",
        createEvent: "إنشاء فعالية",
        eventTitle: "عنوان الفعالية",
        eventDescription: "وصف الفعالية",
        eventDate: "تاريخ الفعالية",
        eventTime: "وقت الفعالية",
        eventLocation: "موقع الفعالية",
        eventCategory: "فئة الفعالية",
        categories: {
          cultural: "ثقافي",
          festival: "مهرجان",
          adventure: "مغامرة",
          food: "طعام ومأكولات",
          workshop: "ورشة عمل",
          music: "موسيقى"
        },
        interested: "مهتم",
        attending: "سأحضر"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;