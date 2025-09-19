# Meta Pixel Integration Setup Guide

This guide explains how to configure and use the Meta Pixel integration in the Mantra Miles travel booking website.

## Overview

The Meta Pixel integration includes:
- **Conversions API**: Server-side event tracking for better data accuracy
- **Client-side Pixel**: Browser-based tracking for standard events
- **GDPR Compliance**: Consent management for user privacy
- **TypeScript Support**: Full type safety for all events and data

## Environment Variables Setup

8 Active Events across 4 Components :
1) Enquiry Section (2 events): Lead (Submit Enquiry), Find Location (Preferred Destination in Enquiry Form)
2) Top Packages Section (1 event): Add To Wishlist (Add to Wishlist Button)
3) Package Details Section (2 events): View Content (View Details and Explore buttons), Customize Product (Download Itinerary and Get Quote buttons)
4) PaymentGateway (3 events): Purchase, InitiateCheckout, AddPaymentInfo


### Required Variables

Add these variables to your `.env.local` file:

```env
# Meta Pixel Configuration
VITE_META_PIXEL_TOKEN=your_access_token_here
VITE_META_PIXEL_ID=your_pixel_id_here
VITE_META_API_VERSION=v18.0
VITE_META_PIXEL_LOGGING=true
```

### Optional Variables

```env
# For testing purposes
VITE_META_PIXEL_TEST_CODE=TEST12345
```

### Getting Your Credentials

1. **Pixel ID**: Found in your Facebook Business Manager → Events Manager → Data Sources → Your Pixel
2. **Access Token**: Generate from Facebook Business Manager → System Users → Create System User → Generate Token with `ads_management` and `business_management` permissions

## Tracked Events

The integration automatically tracks the following conversion events:

### 1. Purchase Event
- **Triggered**: When payment is successfully completed
- **Location**: PaymentGateway component
- **Data**: Transaction value, currency, customer info, package details

### 2. AddPaymentInfo Event
- **Triggered**: When user selects a payment method
- **Location**: PaymentGateway component
- **Data**: Package info, customer details

### 3. InitiateCheckout Event
- **Triggered**: When payment page loads
- **Location**: PaymentGateway component
- **Data**: Package details, estimated value

### 4. ViewContent Event
- **Triggered**: When user views package details
- **Location**: PackageDetails component
- **Data**: Package info, pricing, category

### 5. AddToCart Event (Package Interest)
- **Triggered**: When user requests a quote
- **Location**: QuoteDialog component
- **Data**: Package details, user preferences

### 6. Search Event
- **Triggered**: When user explores destinations
- **Location**: DestinationTabs component
- **Data**: Search terms, destination category

### 7. Contact Event
- **Triggered**: When user submits enquiry form
- **Location**: EnquirySection component
- **Data**: User contact info, inquiry details

### 8. CustomizeProduct Event
- **Triggered**: When user downloads itinerary PDF
- **Location**: PackageDetails component
- **Data**: Package customization details

## Usage Examples

### Basic Event Tracking

```typescript
import { useMetaPixel } from '@/hooks/useMetaPixel';

function MyComponent() {
  const { trackPurchase, isEnabled } = useMetaPixel();
  
  const handlePurchase = async () => {
    if (isEnabled) {
      await trackPurchase(
        {
          currency: 'INR',
          value: 50000
        },
        {
          email: 'user@example.com',
          firstName: 'John',
          lastName: 'Doe'
        },
        {
          packageId: 'golden-triangle',
          packageName: 'Golden Triangle Tour',
          packagePrice: 50000
        }
      );
    }
  };
}
```

### Convenience Functions

```typescript
const { trackPackageView, trackEnquiry } = useMetaPixel();

// Track package view
await trackPackageView({
  id: 'kerala-backwaters',
  name: 'Kerala Backwaters',
  category: 'nature_tour',
  price: 35000,
  currency: 'INR'
});

// Track enquiry
await trackEnquiry(
  packageInfo, // optional
  userData
);
```

## Data Privacy & GDPR Compliance

### Consent Management

The integration includes a consent banner that:
- Appears on first visit
- Stores user consent in localStorage
- Disables tracking if consent is not given
- Allows users to change preferences

### Data Hashing

All personally identifiable information (PII) is automatically hashed:
- Email addresses
- Phone numbers
- Names
- Addresses

### User Control

```typescript
const { enable, disable, isEnabled } = useMetaPixelContext();

// Enable tracking
enable();

// Disable tracking
disable();

// Check status
console.log('Tracking enabled:', isEnabled);
```

## Testing

### Development Mode

- Set `VITE_META_PIXEL_LOGGING=true` to see detailed logs
- Events are not sent to Facebook in localhost
- Use browser console to verify event data

### Test Events

1. Add `VITE_META_PIXEL_TEST_CODE` to your environment
2. Events will be marked as test events in Facebook
3. View test events in Events Manager → Test Events tab

### Verification

1. **Facebook Events Manager**: Check real-time events
2. **Browser Console**: Look for Meta Pixel logs
3. **Network Tab**: Verify API calls to graph.facebook.com

## Troubleshooting

### Common Issues

1. **Events not appearing in Facebook**
   - Check your Pixel ID and Access Token
   - Verify user has given consent
   - Ensure you're not on localhost

2. **API Errors**
   - Check access token permissions
   - Verify API version compatibility
   - Review error logs in console

3. **TypeScript Errors**
   - Ensure all required fields are provided
   - Check data types match interface definitions

### Debug Mode

```typescript
// Enable detailed logging
const config = {
  pixelId: 'YOUR_PIXEL_ID',
  accessToken: 'YOUR_TOKEN',
  enableLogging: true
};
```

## API Reference

### MetaPixelService Methods

- `trackPurchase(purchaseData, userData?, context?)`
- `trackAddPaymentInfo(paymentData?, userData?, context?)`
- `trackViewContent(contentData, userData?, context?)`
- `trackSearch(searchData, userData?)`
- `trackAddToCart(cartData, userData?, context?)`
- `trackInitiateCheckout(checkoutData?, userData?, context?)`
- `trackContact(userData?, context?)`
- `trackCompleteRegistration(userData?, context?)`
- `trackCustomizeProduct(userData?, context?)`

### Hook Functions

- `useMetaPixel()`: Main hook for event tracking
- `useMetaPixelContext()`: Context management and configuration

## Best Practices

1. **Always check `isEnabled`** before tracking events
2. **Provide user data** when available for better attribution
3. **Use meaningful event IDs** to prevent duplicate events
4. **Test thoroughly** before deploying to production
5. **Monitor Events Manager** for data quality issues
6. **Respect user privacy** and consent preferences

## Support

For issues related to:
- **Facebook Pixel**: Facebook Business Help Center
- **Implementation**: Check browser console and network logs
- **Privacy Compliance**: Review Facebook's data usage policies

---

**Note**: This integration is designed for the Mantra Miles travel booking website. Modify event parameters and tracking logic according to your specific business requirements.