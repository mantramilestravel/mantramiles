export type PackageVariant = {
  id: number;
  tag: string;
  name: string;
  subtitle: string;
  price: string;
  pdf: string;
  inclusions: string[];
  exclusions: string[];
  terms: string[];
};

export type ItineraryItem = { day: string; detail: string };

export type PackageType = {
  id: string;
  name: string;
  destinations: string;
  duration: string;
  description: string;
  price: string;
  Oldprice?: string;
  rating: number;
  type: string;
  tag?: string;
  coverImage?: string;
  images: string[];
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  pdf?: string;
  terms?: string[];
  variants?: PackageVariant[];
  itinerary?: ItineraryItem[];
  // Home page hero banner: a trip with showInHero appears as a slide.
  showInHero?: boolean;
  heroImage?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroHighlight?: string;
  heroCta?: string;
};
