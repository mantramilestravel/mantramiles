// Meta Pixel TypeScript Types

export interface MetaPixelUserData {
  em?: string[]; // Email addresses (hashed)
  ph?: string[]; // Phone numbers (hashed)
  ge?: string[]; // Gender
  db?: string[]; // Date of birth (YYYYMMDD)
  ln?: string[]; // Last name (hashed)
  fn?: string[]; // First name (hashed)
  ct?: string[]; // City (hashed)
  st?: string[]; // State (hashed)
  zp?: string[]; // Zip code (hashed)
  country?: string[]; // Country code (ISO 3166-1 alpha-2)
  external_id?: string[]; // External ID
  client_ip_address?: string; // Client IP address (do not hash)
  client_user_agent?: string; // Client user agent (do not hash)
  fbc?: string; // Click ID cookie (do not hash)
  fbp?: string; // Browser ID cookie (do not hash)
  subscription_id?: string; // Subscription ID (do not hash)
}

export interface MetaPixelCustomData {
  currency?: string; // Currency code (ISO 4217)
  value?: string | number; // Value of the conversion
  content_ids?: string[]; // Product IDs
  content_type?: string; // Content type
  content_name?: string; // Content name
  content_category?: string; // Content category
  contents?: Array<{
    id: string;
    quantity: number;
    item_price?: number;
  }>;
  num_items?: number; // Number of items
  search_string?: string; // Search string
  status?: string; // Status
}

export interface MetaPixelEvent {
  event_name: string;
  event_time: number; // Unix timestamp
  event_source_url?: string;
  action_source: 'website' | 'email' | 'app' | 'phone_call' | 'chat' | 'physical_store' | 'system_generated' | 'other';
  event_id?: string;
  opt_out?: boolean;
  user_data?: MetaPixelUserData;
  custom_data?: MetaPixelCustomData;
  data_processing_options?: string[];
  data_processing_options_country?: number;
  data_processing_options_state?: number;
}

export interface MetaPixelPayload {
  data: MetaPixelEvent[];
  test_event_code?: string;
  partner_agent?: string;
}

export interface MetaPixelResponse {
  events_received: number;
  messages: string[];
  fbtrace_id: string;
}

export interface MetaPixelError {
  error: {
    message: string;
    type: string;
    code: number;
    fbtrace_id: string;
  };
}

// Event-specific interfaces
export interface PurchaseEventData extends MetaPixelCustomData {
  currency: string;
  value: string | number;
}

export interface AddPaymentInfoEventData extends MetaPixelCustomData {
  currency?: string;
  value?: string | number;
}

export interface ViewContentEventData extends MetaPixelCustomData {
  content_ids?: string[];
  content_type?: string;
  content_name?: string;
  content_category?: string;
  value?: string | number;
  currency?: string;
}

export interface SearchEventData extends MetaPixelCustomData {
  search_string: string;
  content_category?: string;
}

export interface AddToCartEventData extends MetaPixelCustomData {
  content_ids: string[];
  content_type: string;
  currency?: string;
  value?: string | number;
}

export interface InitiateCheckoutEventData extends MetaPixelCustomData {
  currency?: string;
  value?: string | number;
  num_items?: number;
}

export interface LeadEventData extends MetaPixelCustomData {
  content_name?: string;
  content_category?: string;
  value?: string | number;
  currency?: string;
}

export interface AddToWishlistEventData extends MetaPixelCustomData {
  content_ids?: string[];
  content_type?: string;
  content_name?: string;
  content_category?: string;
  value?: string | number;
  currency?: string;
}

export interface FindLocationEventData extends MetaPixelCustomData {
  content_name?: string;
  content_category?: string;
  search_string?: string;
  value?: string | number;
  currency?: string;
}

// Event names enum
export enum MetaPixelEventName {
  PURCHASE = 'Purchase',
  ADD_PAYMENT_INFO = 'AddPaymentInfo',
  VIEW_CONTENT = 'ViewContent',
  CONTACT = 'Contact',
  COMPLETE_REGISTRATION = 'CompleteRegistration',
  CUSTOMIZE_PRODUCT = 'CustomizeProduct',
  INITIATE_CHECKOUT = 'InitiateCheckout',
  ADD_TO_CART = 'AddToCart',
  SEARCH = 'Search',
  PAGE_VIEW = 'PageView',
  LEAD = 'Lead',
  ADD_TO_WISHLIST = 'AddToWishlist',
  FIND_LOCATION = 'FindLocation'
}

// Configuration interface
export interface MetaPixelConfig {
  pixelId: string;
  accessToken: string;
  apiVersion: string;
  testEventCode?: string;
  enableLogging?: boolean;
}

// User information for form data
export interface UserFormData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  gender?: 'm' | 'f';
  // Browser fingerprinting fields for anonymous tracking
  external_id?: string;
  fbp?: string;
  fbc?: string;
  client_user_agent?: string;
  client_ip_address?: string;
}

// Browser fingerprinting data interface
export interface BrowserFingerprintData {
  fbp?: string;
  fbc?: string;
  userAgent?: string;
  clientId?: string;
}

// Package/Product information
export interface PackageInfo {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  duration?: string;
  destination?: string;
}

// Conversion tracking context
export interface ConversionContext {
  packageId?: string;
  packageName?: string;
  packageCategory?: string;
  packagePrice?: number;
  currency?: string;
  searchQuery?: string;
  userAgent?: string;
  ipAddress?: string;
  referrer?: string;
}