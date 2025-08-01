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
        welcome: "Welcome to Asir Explorer AI",
        subtitle: "Discover the beauty of Asir region with AI-powered exploration",
        quickActions: "Quick Actions",
        featuredDestinations: "Featured Destinations",
        safetyStatus: "Safety Status",
        upcomingEvents: "Upcoming Events",
        exploreMap: "Explore Interactive Map",
        scanLandmark: "Scan Landmarks with AI",
        virtualGuide: "Get Virtual Guide",
        book4x4: "Book 4x4 Adventure",
        viewEvents: "View Local Events"
      },
      // Smart Map
      map: {
        title: "Smart Map",
        subtitle: "Discover amazing landmarks in the Asir region",
        myLocation: "My Location",
        interactiveMap: "Interactive Map",
        mapComing: "Interactive map integration coming soon!",
        navigate: "Navigate",
        details: "Details",
        difficulty: "Difficulty",
        distance: "Distance",
        time: "Time",
        coordinates: "Coordinates",
        categories: {
          mountains: "Mountains",
          heritage: "Heritage",
          nature: "Nature",
          dining: "Dining"
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
        pointCamera: "Point your camera at a landmark in the Asir region",
        landmarkInfo: "Landmark Information",
        location: "Location",
        historicalInfo: "Historical Information",
        tips: "Visitor Tips",
        rating: "Rating",
        reviews: "Reviews",
        tryRecognizing: "Try Recognizing These Landmarks"
      },
      // Virtual Guide
      guide: {
        title: "Virtual Guide",
        subtitle: "Your AI-powered companion for exploring Asir",
        startChat: "Start Conversation",
        askQuestion: "Ask me anything about Asir...",
        suggestedQuestions: "Suggested Questions",
        q1: "What are the best hiking trails in Asir?",
        q2: "Tell me about local cuisine and restaurants",
        q3: "What's the weather like in different seasons?",
        q4: "Where can I find traditional markets?",
        q5: "What are the must-visit historical sites?"
      },
      // Booking
      booking: {
        title: "4x4 Adventure Booking",
        subtitle: "Book your off-road adventure in the Asir mountains",
        availablePackages: "Available Packages",
        bookNow: "Book Now",
        myBookings: "My Bookings",
        duration: "Duration",
        difficulty: "Difficulty Level",
        includes: "Includes",
        price: "Price",
        from: "From",
        selectDate: "Select Date",
        selectTime: "Select Time",
        selectPackage: "Select Package",
        participants: "Number of Participants",
        contactInfo: "Contact Information",
        name: "Full Name",
        email: "Email",
        phone: "Phone Number",
        status: "Status",
        date: "Date",
        time: "Time",
        package: "Package"
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
        quickActions: "الإجراءات السريعة",
        featuredDestinations: "الوجهات المميزة",
        safetyStatus: "حالة السلامة",
        upcomingEvents: "الفعاليات القادمة",
        exploreMap: "استكشف الخريطة التفاعلية",
        scanLandmark: "امسح المعالم بالذكاء الاصطناعي",
        virtualGuide: "احصل على مرشد افتراضي",
        book4x4: "احجز مغامرة الدفع الرباعي",
        viewEvents: "عرض الفعاليات المحلية"
      },
      // Smart Map
      map: {
        title: "الخريطة الذكية",
        subtitle: "اكتشف المعالم المذهلة في منطقة عسير",
        myLocation: "موقعي",
        interactiveMap: "الخريطة التفاعلية",
        mapComing: "تكامل الخريطة التفاعلية قريباً!",
        navigate: "التنقل",
        details: "التفاصيل",
        difficulty: "الصعوبة",
        distance: "المسافة",
        time: "الوقت",
        coordinates: "الإحداثيات",
        categories: {
          mountains: "جبال",
          heritage: "تراث",
          nature: "طبيعة",
          dining: "مطاعم"
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
        pointCamera: "وجه كاميرتك نحو معلم في منطقة عسير",
        landmarkInfo: "معلومات المعلم",
        location: "الموقع",
        historicalInfo: "المعلومات التاريخية",
        tips: "نصائح للزوار",
        rating: "التقييم",
        reviews: "المراجعات",
        tryRecognizing: "جرب التعرف على هذه المعالم"
      },
      // Virtual Guide
      guide: {
        title: "المرشد الافتراضي",
        subtitle: "رفيقك المدعوم بالذكاء الاصطناعي لاستكشاف عسير",
        startChat: "ابدأ المحادثة",
        askQuestion: "اسألني أي شيء عن عسير...",
        suggestedQuestions: "الأسئلة المقترحة",
        q1: "ما هي أفضل مسارات المشي في عسير؟",
        q2: "أخبرني عن المطبخ المحلي والمطاعم",
        q3: "كيف هو الطقس في المواسم المختلفة؟",
        q4: "أين يمكنني العثور على الأسواق التقليدية؟",
        q5: "ما هي المواقع التاريخية التي يجب زيارتها؟"
      },
      // Booking
      booking: {
        title: "حجز مغامرة الدفع الرباعي",
        subtitle: "احجز مغامرتك على الطرق الوعرة في جبال عسير",
        availablePackages: "الباقات المتاحة",
        bookNow: "احجز الآن",
        myBookings: "حجوزاتي",
        duration: "المدة",
        difficulty: "مستوى الصعوبة",
        includes: "يشمل",
        price: "السعر",
        from: "من",
        selectDate: "اختر التاريخ",
        selectTime: "اختر الوقت",
        selectPackage: "اختر الباقة",
        participants: "عدد المشاركين",
        contactInfo: "معلومات الاتصال",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        status: "الحالة",
        date: "التاريخ",
        time: "الوقت",
        package: "الباقة"
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