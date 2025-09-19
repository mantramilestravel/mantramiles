import {
  MetaPixelEvent,
  MetaPixelPayload,
  MetaPixelResponse,
  MetaPixelError,
  MetaPixelConfig,
  MetaPixelUserData,
  MetaPixelCustomData,
  MetaPixelEventName,
  UserFormData,
  PackageInfo,
  ConversionContext,
  PurchaseEventData,
  AddPaymentInfoEventData,
  ViewContentEventData,
  SearchEventData,
  AddToCartEventData,
  InitiateCheckoutEventData,
  LeadEventData,
  AddToWishlistEventData,
  FindLocationEventData
} from '../types/metaPixel';

// Utility function to hash data using SHA-256
const hashData = async (data: string): Promise<string> => {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

// Utility function to get client information
const getClientInfo = () => {
  return {
    client_user_agent: navigator.userAgent,
    client_ip_address: undefined, // Will be determined server-side
    fbc: getCookie('_fbc'),
    fbp: getCookie('_fbp')
  };
};

// Utility function to get cookie value
const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift();
  }
  return undefined;
};

// Generate unique event ID
const generateEventId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

class MetaPixelService {
  private config: MetaPixelConfig;
  private baseUrl: string;

  constructor(config: MetaPixelConfig) {
    this.config = {
      apiVersion: 'v18.0',
      enableLogging: false,
      ...config
    };
    this.baseUrl = `https://graph.facebook.com/${this.config.apiVersion}/${this.config.pixelId}/events`;
  }

  // Convert user form data to Meta Pixel user data format
  private async convertUserData(userData?: UserFormData): Promise<MetaPixelUserData> {
    const metaUserData: MetaPixelUserData = {};

    if (!userData) {
      return metaUserData;
    }

    // Handle fallback user data (browser fingerprinting)
    if (userData.external_id) {
      metaUserData.external_id = [userData.external_id];
    }
    if (userData.fbp) {
      metaUserData.fbp = userData.fbp;
    }
    if (userData.fbc) {
      metaUserData.fbc = userData.fbc;
    }
    if (userData.client_user_agent) {
      metaUserData.client_user_agent = userData.client_user_agent;
    }
    if (userData.client_ip_address) {
      metaUserData.client_ip_address = userData.client_ip_address;
    }

    // Hash PII data (traditional form data)
    if (userData.email) {
      metaUserData.em = [await hashData(userData.email)];
    }
    if (userData.phone) {
      metaUserData.ph = [await hashData(userData.phone.replace(/\D/g, ''))];
    }
    if (userData.firstName) {
      metaUserData.fn = [await hashData(userData.firstName)];
    }
    if (userData.lastName) {
      metaUserData.ln = [await hashData(userData.lastName)];
    }
    if (userData.city) {
      metaUserData.ct = [await hashData(userData.city)];
    }
    if (userData.state) {
      metaUserData.st = [await hashData(userData.state)];
    }
    if (userData.zipCode) {
      metaUserData.zp = [await hashData(userData.zipCode)];
    }
    if (userData.country) {
      metaUserData.country = [userData.country.toUpperCase()];
    }
    if (userData.gender) {
      metaUserData.ge = [userData.gender];
    }

    return metaUserData;
  }

  // Send event to Meta Pixel API
  private async sendEvent(events: MetaPixelEvent[]): Promise<MetaPixelResponse | null> {
    try {
      const payload: MetaPixelPayload = {
        data: events,
        ...(this.config.testEventCode && { test_event_code: this.config.testEventCode }),
        partner_agent: 'mantramiles-website'
      };

      if (this.config.enableLogging) {
        console.log('Meta Pixel Event Payload:', JSON.stringify(payload, null, 2));
      }

      const response = await fetch(`${this.baseUrl}?access_token=${this.config.accessToken}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const responseData = await response.json();

      if (!response.ok) {
        const error = responseData as MetaPixelError;
        console.error('Meta Pixel API Error:', error);
        return null;
      }

      if (this.config.enableLogging) {
        console.log('Meta Pixel Response:', responseData);
      }

      return responseData as MetaPixelResponse;
    } catch (error) {
      console.error('Meta Pixel Service Error:', error);
      return null;
    }
  }

  // Track Purchase event
  async trackPurchase(
    purchaseData: PurchaseEventData,
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> {
    try {
      const event: MetaPixelEvent = {
        event_name: MetaPixelEventName.PURCHASE,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: window.location.href,
        action_source: 'website',
        event_id: generateEventId(),
        user_data: await this.convertUserData(userData),
        custom_data: {
          currency: purchaseData.currency,
          value: purchaseData.value.toString(),
          content_ids: context?.packageId ? [context.packageId] : undefined,
          content_name: context?.packageName,
          content_category: context?.packageCategory || 'travel_package',
          ...purchaseData
        }
      };

      const response = await this.sendEvent([event]);
      return response !== null;
    } catch (error) {
      console.error('Error tracking Purchase event:', error);
      return false;
    }
  }

  // Track AddPaymentInfo event
  async trackAddPaymentInfo(
    paymentData?: AddPaymentInfoEventData,
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> {
    try {
      const event: MetaPixelEvent = {
        event_name: MetaPixelEventName.ADD_PAYMENT_INFO,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: window.location.href,
        action_source: 'website',
        event_id: generateEventId(),
        user_data: await this.convertUserData(userData),
        custom_data: {
          content_category: 'travel_package',
          content_ids: context?.packageId ? [context.packageId] : undefined,
          content_name: context?.packageName,
          currency: context?.currency || 'INR',
          value: context?.packagePrice?.toString(),
          ...paymentData
        }
      };

      const response = await this.sendEvent([event]);
      return response !== null;
    } catch (error) {
      console.error('Error tracking AddPaymentInfo event:', error);
      return false;
    }
  }

  // Track ViewContent event
  async trackViewContent(
    contentData: ViewContentEventData,
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> {
    try {
      const event: MetaPixelEvent = {
        event_name: MetaPixelEventName.VIEW_CONTENT,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: window.location.href,
        action_source: 'website',
        event_id: generateEventId(),
        user_data: await this.convertUserData(userData),
        custom_data: {
          content_type: 'product',
          content_category: 'travel_package',
          ...contentData
        }
      };

      const response = await this.sendEvent([event]);
      return response !== null;
    } catch (error) {
      console.error('Error tracking ViewContent event:', error);
      return false;
    }
  }

  // Track Search event
  async trackSearch(
    searchData: SearchEventData,
    userData?: UserFormData
  ): Promise<boolean> {
    try {
      const event: MetaPixelEvent = {
        event_name: MetaPixelEventName.SEARCH,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: window.location.href,
        action_source: 'website',
        event_id: generateEventId(),
        user_data: await this.convertUserData(userData),
        custom_data: {
          content_category: 'travel_package',
          ...searchData
        }
      };

      const response = await this.sendEvent([event]);
      return response !== null;
    } catch (error) {
      console.error('Error tracking Search event:', error);
      return false;
    }
  }

  // Track AddToCart event
  async trackAddToCart(
    cartData: AddToCartEventData,
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> {
    try {
      const event: MetaPixelEvent = {
        event_name: MetaPixelEventName.ADD_TO_CART,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: window.location.href,
        action_source: 'website',
        event_id: generateEventId(),
        user_data: await this.convertUserData(userData),
        custom_data: {
          content_type: 'product',
          content_category: 'travel_package',
          currency: context?.currency || 'INR',
          ...cartData
        }
      };

      const response = await this.sendEvent([event]);
      return response !== null;
    } catch (error) {
      console.error('Error tracking AddToCart event:', error);
      return false;
    }
  }

  // Track InitiateCheckout event
  async trackInitiateCheckout(
    checkoutData?: InitiateCheckoutEventData,
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> {
    try {
      const event: MetaPixelEvent = {
        event_name: MetaPixelEventName.INITIATE_CHECKOUT,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: window.location.href,
        action_source: 'website',
        event_id: generateEventId(),
        user_data: await this.convertUserData(userData),
        custom_data: {
          content_category: 'travel_package',
          content_ids: context?.packageId ? [context.packageId] : undefined,
          content_name: context?.packageName,
          currency: context?.currency || 'INR',
          value: context?.packagePrice?.toString(),
          num_items: 1,
          ...checkoutData
        }
      };

      const response = await this.sendEvent([event]);
      return response !== null;
    } catch (error) {
      console.error('Error tracking InitiateCheckout event:', error);
      return false;
    }
  }

  // Track Contact event
  async trackContact(
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> {
    try {
      const event: MetaPixelEvent = {
        event_name: MetaPixelEventName.CONTACT,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: window.location.href,
        action_source: 'website',
        event_id: generateEventId(),
        user_data: await this.convertUserData(userData),
        custom_data: {
          content_category: 'travel_inquiry',
          content_name: context?.packageName || 'General Inquiry'
        }
      };

      const response = await this.sendEvent([event]);
      return response !== null;
    } catch (error) {
      console.error('Error tracking Contact event:', error);
      return false;
    }
  }

  // Track CompleteRegistration event
  async trackCompleteRegistration(
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> {
    try {
      const event: MetaPixelEvent = {
        event_name: MetaPixelEventName.COMPLETE_REGISTRATION,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: window.location.href,
        action_source: 'website',
        event_id: generateEventId(),
        user_data: await this.convertUserData(userData),
        custom_data: {
          content_category: 'registration',
          content_name: 'Newsletter Signup'
        }
      };

      const response = await this.sendEvent([event]);
      return response !== null;
    } catch (error) {
      console.error('Error tracking CompleteRegistration event:', error);
      return false;
    }
  }

  // Track CustomizeProduct event
  async trackCustomizeProduct(
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> {
    try {
      const event: MetaPixelEvent = {
        event_name: MetaPixelEventName.CUSTOMIZE_PRODUCT,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: window.location.href,
        action_source: 'website',
        event_id: generateEventId(),
        user_data: await this.convertUserData(userData),
        custom_data: {
          content_category: 'travel_package',
          content_ids: context?.packageId ? [context.packageId] : undefined,
          content_name: context?.packageName
        }
      };

      const response = await this.sendEvent([event]);
      return response !== null;
    } catch (error) {
      console.error('Error tracking CustomizeProduct event:', error);
      return false;
    }
  }

  // Track PageView event
  async trackPageView(
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> {
    try {
      const event: MetaPixelEvent = {
        event_name: MetaPixelEventName.PAGE_VIEW,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: window.location.href,
        action_source: 'website',
        event_id: generateEventId(),
        user_data: await this.convertUserData(userData),
        custom_data: {
          content_category: 'website',
          content_name: document.title
        }
      };

      const response = await this.sendEvent([event]);
      return response !== null;
    } catch (error) {
      console.error('Error tracking PageView event:', error);
      return false;
    }
  }

  // Track Lead event
  async trackLead(
    leadData?: LeadEventData,
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> {
    try {
      const event: MetaPixelEvent = {
        event_name: MetaPixelEventName.LEAD,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: window.location.href,
        action_source: 'website',
        event_id: generateEventId(),
        user_data: await this.convertUserData(userData),
        custom_data: {
          content_category: 'lead_generation',
          content_name: context?.packageName || 'General Lead',
          currency: context?.currency || 'INR',
          value: context?.packagePrice?.toString(),
          ...leadData
        }
      };

      const response = await this.sendEvent([event]);
      return response !== null;
    } catch (error) {
      console.error('Error tracking Lead event:', error);
      return false;
    }
  }

  // Track AddToWishlist event
  async trackAddToWishlist(
    wishlistData: AddToWishlistEventData,
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> {
    try {
      const event: MetaPixelEvent = {
        event_name: MetaPixelEventName.ADD_TO_WISHLIST,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: window.location.href,
        action_source: 'website',
        event_id: generateEventId(),
        user_data: await this.convertUserData(userData),
        custom_data: {
          content_type: 'product',
          content_category: 'travel_package',
          content_ids: context?.packageId ? [context.packageId] : undefined,
          content_name: context?.packageName,
          currency: context?.currency || 'INR',
          value: context?.packagePrice?.toString(),
          ...wishlistData
        }
      };

      const response = await this.sendEvent([event]);
      return response !== null;
    } catch (error) {
      console.error('Error tracking AddToWishlist event:', error);
      return false;
    }
  }

  // Track FindLocation event
  async trackFindLocation(
    locationData?: FindLocationEventData,
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> {
    try {
      const event: MetaPixelEvent = {
        event_name: MetaPixelEventName.FIND_LOCATION,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: window.location.href,
        action_source: 'website',
        event_id: generateEventId(),
        user_data: await this.convertUserData(userData),
        custom_data: {
          content_category: 'location_search',
          content_name: context?.packageName || 'Location Search',
          search_string: locationData?.search_string,
          currency: context?.currency || 'INR',
          value: context?.packagePrice?.toString(),
          ...locationData
        }
      };

      const response = await this.sendEvent([event]);
      return response !== null;
    } catch (error) {
      console.error('Error tracking FindLocation event:', error);
      return false;
    }
  }
}

// Create singleton instance
let metaPixelService: MetaPixelService | null = null;

export const initializeMetaPixel = (config: MetaPixelConfig): MetaPixelService => {
  metaPixelService = new MetaPixelService(config);
  return metaPixelService;
};

export const getMetaPixelService = (): MetaPixelService | null => {
  return metaPixelService;
};

export default MetaPixelService;