// LocalStorage utilities for the Asir Explorer app

export interface Landmark {
  id: string;
  name: string;
  type: string;
  description: string;
  coordinates: { lat: number; lng: number };
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  distance: string;
  estimatedTime: string;
  features: string[];
  image?: string;
  isFavorite?: boolean;
}

export interface BookingData {
  id: string;
  type: '4x4-tour' | 'hiking' | 'cultural';
  title: string;
  date: string;
  time: string;
  participants: number;
  contactInfo: {
    name: string;
    phone: string;
    email: string;
  };
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: 'festival' | 'cultural' | 'adventure' | 'food';
  image?: string;
  isRegistered?: boolean;
}

export interface CameraRecognition {
  id: string;
  image: string; // base64 or blob URL
  detectedLandmark?: Landmark;
  timestamp: string;
  location?: { lat: number; lng: number };
}

// Generic localStorage functions
const getFromStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading ${key} from localStorage:`, error);
    return defaultValue;
  }
};

const saveToStorage = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};

// Favorites
export const getFavorites = (): Landmark[] => {
  return getFromStorage<Landmark[]>('asir-favorites', []);
};

export const saveFavorite = (landmark: Landmark): void => {
  const favorites = getFavorites();
  const exists = favorites.find(fav => fav.id === landmark.id);
  if (!exists) {
    favorites.push({ ...landmark, isFavorite: true });
    saveToStorage('asir-favorites', favorites);
  }
};

export const removeFavorite = (landmarkId: string): void => {
  const favorites = getFavorites();
  const filtered = favorites.filter(fav => fav.id !== landmarkId);
  saveToStorage('asir-favorites', filtered);
};

export const isFavorite = (landmarkId: string): boolean => {
  const favorites = getFavorites();
  return favorites.some(fav => fav.id === landmarkId);
};

// Bookings
export const getBookings = (): BookingData[] => {
  return getFromStorage<BookingData[]>('asir-bookings', []);
};

export const saveBooking = (booking: BookingData): void => {
  const bookings = getBookings();
  bookings.push(booking);
  saveToStorage('asir-bookings', bookings);
};

export const updateBookingStatus = (bookingId: string, status: BookingData['status']): void => {
  const bookings = getBookings();
  const updated = bookings.map(booking => 
    booking.id === bookingId ? { ...booking, status } : booking
  );
  saveToStorage('asir-bookings', updated);
};

// Events
export const getRegisteredEvents = (): string[] => {
  return getFromStorage<string[]>('asir-registered-events', []);
};

export const registerForEvent = (eventId: string): void => {
  const registered = getRegisteredEvents();
  if (!registered.includes(eventId)) {
    registered.push(eventId);
    saveToStorage('asir-registered-events', registered);
  }
};

export const unregisterFromEvent = (eventId: string): void => {
  const registered = getRegisteredEvents();
  const filtered = registered.filter(id => id !== eventId);
  saveToStorage('asir-registered-events', filtered);
};

export const isRegisteredForEvent = (eventId: string): boolean => {
  const registered = getRegisteredEvents();
  return registered.includes(eventId);
};

// Camera recognitions
export const getCameraHistory = (): CameraRecognition[] => {
  return getFromStorage<CameraRecognition[]>('asir-camera-history', []);
};

export const saveCameraRecognition = (recognition: CameraRecognition): void => {
  const history = getCameraHistory();
  history.unshift(recognition); // Add to beginning
  // Keep only last 50 recognitions
  if (history.length > 50) {
    history.splice(50);
  }
  saveToStorage('asir-camera-history', history);
};

export const clearCameraHistory = (): void => {
  saveToStorage('asir-camera-history', []);
};

// User preferences
export interface UserPreferences {
  language: 'ar' | 'en';
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
  location: boolean;
}

export const getUserPreferences = (): UserPreferences => {
  return getFromStorage<UserPreferences>('asir-user-preferences', {
    language: 'en',
    theme: 'light',
    notifications: true,
    location: true
  });
};

export const saveUserPreferences = (preferences: Partial<UserPreferences>): void => {
  const current = getUserPreferences();
  const updated = { ...current, ...preferences };
  saveToStorage('asir-user-preferences', updated);
};
