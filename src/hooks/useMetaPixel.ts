import { useCallback } from 'react';
import { useMetaPixelContext } from './useMetaPixelContext';
import {
  UserFormData,
  ConversionContext,
  PurchaseEventData,
  AddPaymentInfoEventData,
  ViewContentEventData,
  SearchEventData,
  AddToCartEventData,
  InitiateCheckoutEventData,
  LeadEventData,
  AddToWishlistEventData,
  FindLocationEventData,
  PackageInfo
} from '../types/metaPixel';

export interface UseMetaPixelReturn {
  // Event tracking functions
  trackPurchase: (purchaseData: PurchaseEventData, userData?: UserFormData, context?: ConversionContext) => Promise<boolean>;
  trackAddPaymentInfo: (paymentData?: AddPaymentInfoEventData, userData?: UserFormData, context?: ConversionContext) => Promise<boolean>;
  trackViewContent: (contentData: ViewContentEventData, userData?: UserFormData, context?: ConversionContext) => Promise<boolean>;
  trackSearch: (searchData: SearchEventData, userData?: UserFormData) => Promise<boolean>;
  trackAddToCart: (cartData: AddToCartEventData, userData?: UserFormData, context?: ConversionContext) => Promise<boolean>;
  trackInitiateCheckout: (checkoutData?: InitiateCheckoutEventData, userData?: UserFormData, context?: ConversionContext) => Promise<boolean>;
  trackContact: (userData?: UserFormData, context?: ConversionContext) => Promise<boolean>;
  trackCompleteRegistration: (userData?: UserFormData, context?: ConversionContext) => Promise<boolean>;
  trackCustomizeProduct: (userData?: UserFormData, context?: ConversionContext) => Promise<boolean>;
  trackPageView: (userData?: UserFormData, context?: ConversionContext) => Promise<boolean>;
  trackLead: (leadData?: LeadEventData, userData?: UserFormData, context?: ConversionContext) => Promise<boolean>;
  trackAddToWishlist: (wishlistData: AddToWishlistEventData, userData?: UserFormData, context?: ConversionContext) => Promise<boolean>;
  trackFindLocation: (locationData?: FindLocationEventData, userData?: UserFormData, context?: ConversionContext) => Promise<boolean>;
  
  // Convenience functions
  trackPackageView: (packageInfo: PackageInfo, userData?: UserFormData) => Promise<boolean>;
  trackPackageInterest: (packageInfo: PackageInfo, userData?: UserFormData) => Promise<boolean>;
  trackEnquiry: (packageInfo?: PackageInfo, userData?: UserFormData) => Promise<boolean>;
  trackNewsletterSignup: (userData: UserFormData) => Promise<boolean>;
  trackWishlistAdd: (packageInfo: PackageInfo, userData?: UserFormData) => Promise<boolean>;
  trackLeadGeneration: (userData: UserFormData, packageInfo?: PackageInfo) => Promise<boolean>;
  trackLocationSearch: (searchQuery: string, userData?: UserFormData, packageInfo?: PackageInfo) => Promise<boolean>;
  
  // State
  isInitialized: boolean;
  isEnabled: boolean;
}

export const useMetaPixel = (): UseMetaPixelReturn => {
  const { service, isInitialized, isEnabled } = useMetaPixelContext();
  
  // Core event tracking functions
  const trackPurchase = useCallback(async (
    purchaseData: PurchaseEventData,
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> => {
    if (!service) return false;
    return await service.trackPurchase(purchaseData, userData, context);
  }, [service]);
  
  const trackAddPaymentInfo = useCallback(async (
    paymentData?: AddPaymentInfoEventData,
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> => {
    if (!service) return false;
    return await service.trackAddPaymentInfo(paymentData, userData, context);
  }, [service]);
  
  const trackViewContent = useCallback(async (
    contentData: ViewContentEventData,
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> => {
    if (!service) return false;
    return await service.trackViewContent(contentData, userData, context);
  }, [service]);
  
  const trackSearch = useCallback(async (
    searchData: SearchEventData,
    userData?: UserFormData
  ): Promise<boolean> => {
    if (!service) return false;
    return await service.trackSearch(searchData, userData);
  }, [service]);
  
  const trackAddToCart = useCallback(async (
    cartData: AddToCartEventData,
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> => {
    if (!service) return false;
    return await service.trackAddToCart(cartData, userData, context);
  }, [service]);
  
  const trackInitiateCheckout = useCallback(async (
    checkoutData?: InitiateCheckoutEventData,
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> => {
    if (!service) return false;
    return await service.trackInitiateCheckout(checkoutData, userData, context);
  }, [service]);
  
  const trackContact = useCallback(async (
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> => {
    if (!service) return false;
    return await service.trackContact(userData, context);
  }, [service]);
  
  const trackCompleteRegistration = useCallback(async (
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> => {
    if (!service) return false;
    return await service.trackCompleteRegistration(userData, context);
  }, [service]);
  
  const trackCustomizeProduct = useCallback(async (
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> => {
    if (!service) return false;
    return await service.trackCustomizeProduct(userData, context);
  }, [service]);
  
  const trackPageView = useCallback(async (
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> => {
    if (!service) return false;
    return await service.trackPageView(userData, context);
  }, [service]);
  
  const trackLead = useCallback(async (
    leadData?: LeadEventData,
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> => {
    if (!service) return false;
    return await service.trackLead(leadData, userData, context);
  }, [service]);
  
  const trackAddToWishlist = useCallback(async (
    wishlistData: AddToWishlistEventData,
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> => {
    if (!service) return false;
    return await service.trackAddToWishlist(wishlistData, userData, context);
  }, [service]);
  
  const trackFindLocation = useCallback(async (
    locationData?: FindLocationEventData,
    userData?: UserFormData,
    context?: ConversionContext
  ): Promise<boolean> => {
    if (!service) return false;
    return await service.trackFindLocation(locationData, userData, context);
  }, [service]);
  
  // Convenience functions for common use cases
  const trackPackageView = useCallback(async (
    packageInfo: PackageInfo,
    userData?: UserFormData
  ): Promise<boolean> => {
    const contentData: ViewContentEventData = {
      content_ids: [packageInfo.id],
      content_name: packageInfo.name,
      content_category: packageInfo.category,
      content_type: 'product',
      currency: packageInfo.currency,
      value: packageInfo.price
    };
    
    const context: ConversionContext = {
      packageId: packageInfo.id,
      packageName: packageInfo.name,
      packageCategory: packageInfo.category,
      packagePrice: packageInfo.price,
      currency: packageInfo.currency
    };
    
    return await trackViewContent(contentData, userData, context);
  }, [trackViewContent]);
  
  const trackPackageInterest = useCallback(async (
    packageInfo: PackageInfo,
    userData?: UserFormData
  ): Promise<boolean> => {
    const cartData: AddToCartEventData = {
      content_ids: [packageInfo.id],
      content_type: 'product',
      currency: packageInfo.currency,
      value: packageInfo.price
    };
    
    const context: ConversionContext = {
      packageId: packageInfo.id,
      packageName: packageInfo.name,
      packageCategory: packageInfo.category,
      packagePrice: packageInfo.price,
      currency: packageInfo.currency
    };
    
    return await trackAddToCart(cartData, userData, context);
  }, [trackAddToCart]);
  
  const trackEnquiry = useCallback(async (
    packageInfo?: PackageInfo,
    userData?: UserFormData
  ): Promise<boolean> => {
    const context: ConversionContext | undefined = packageInfo ? {
      packageId: packageInfo.id,
      packageName: packageInfo.name,
      packageCategory: packageInfo.category,
      packagePrice: packageInfo.price,
      currency: packageInfo.currency
    } : undefined;
    
    return await trackContact(userData, context);
  }, [trackContact]);
  
  const trackNewsletterSignup = useCallback(async (
    userData: UserFormData
  ): Promise<boolean> => {
    return await trackCompleteRegistration(userData, {
      packageName: 'Newsletter Subscription'
    });
  }, [trackCompleteRegistration]);
  
  const trackWishlistAdd = useCallback(async (
    packageInfo: PackageInfo,
    userData?: UserFormData
  ): Promise<boolean> => {
    const wishlistData: AddToWishlistEventData = {
      content_ids: [packageInfo.id],
      content_type: 'product',
      content_name: packageInfo.name,
      content_category: packageInfo.category,
      currency: packageInfo.currency,
      value: packageInfo.price
    };
    
    const context: ConversionContext = {
      packageId: packageInfo.id,
      packageName: packageInfo.name,
      packageCategory: packageInfo.category,
      packagePrice: packageInfo.price,
      currency: packageInfo.currency
    };
    
    return await trackAddToWishlist(wishlistData, userData, context);
  }, [trackAddToWishlist]);
  
  const trackLeadGeneration = useCallback(async (
    userData: UserFormData,
    packageInfo?: PackageInfo
  ): Promise<boolean> => {
    const leadData: LeadEventData = {
      content_category: 'lead_generation',
      content_name: packageInfo?.name || 'General Inquiry',
      currency: packageInfo?.currency || 'INR',
      value: packageInfo?.price
    };
    
    const context: ConversionContext | undefined = packageInfo ? {
      packageId: packageInfo.id,
      packageName: packageInfo.name,
      packageCategory: packageInfo.category,
      packagePrice: packageInfo.price,
      currency: packageInfo.currency
    } : undefined;
    
    return await trackLead(leadData, userData, context);
  }, [trackLead]);
  
  const trackLocationSearch = useCallback(async (
    searchQuery: string,
    userData?: UserFormData,
    packageInfo?: PackageInfo
  ): Promise<boolean> => {
    const locationData: FindLocationEventData = {
      content_category: 'location_search',
      content_name: packageInfo?.name || 'Location Search',
      search_string: searchQuery,
      currency: packageInfo?.currency || 'INR',
      value: packageInfo?.price
    };
    
    const context: ConversionContext | undefined = packageInfo ? {
      packageId: packageInfo.id,
      packageName: packageInfo.name,
      packageCategory: packageInfo.category,
      packagePrice: packageInfo.price,
      currency: packageInfo.currency
    } : undefined;
    
    return await trackFindLocation(locationData, userData, context);
  }, [trackFindLocation]);
  
  return {
    // Core tracking functions
    trackPurchase,
    trackAddPaymentInfo,
    trackViewContent,
    trackSearch,
    trackAddToCart,
    trackInitiateCheckout,
    trackContact,
    trackCompleteRegistration,
    trackCustomizeProduct,
    trackPageView,
    trackLead,
    trackAddToWishlist,
    trackFindLocation,
    
    // Convenience functions
    trackPackageView,
    trackPackageInterest,
    trackEnquiry,
    trackNewsletterSignup,
    trackWishlistAdd,
    trackLeadGeneration,
    trackLocationSearch,
    
    // State
    isInitialized,
    isEnabled
  };
};

export default useMetaPixel;