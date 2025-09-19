# Meta Pixel Events Integration Guide

## New Events Added

The following three new Meta Pixel events have been successfully integrated into the Mantra Miles website:

### 1. Lead Event
**Purpose**: Tracks customer information submissions with contact intent

**Implementation**: 
- Integrated in `EnquirySection` component
- Triggers when users submit the enquiry form
- Tracks user data (name, email, phone) and package interest

**Usage Example**:
```typescript
const { trackLeadGeneration } = useMetaPixel();

// Track lead when form is submitted
await trackLeadGeneration(userData, packageInfo);
```

### 2. AddToWishlist Event
**Purpose**: Tracks when users add packages to their wishlist

**Implementation**:
- Integrated in `TopPackagesSection` component
- Heart icon button on each package card
- Tracks package details and user interaction

**Usage Example**:
```typescript
const { trackWishlistAdd } = useMetaPixel();

// Track wishlist addition
await trackWishlistAdd(packageInfo, userData);
```

### 3. FindLocation Event
**Purpose**: Tracks location searches with visit intent

**Implementation**:
- Integrated in `EnquirySection` destination search
- Triggers when users type destination names (3+ characters)
- Tracks search queries for location-based intent

**Usage Example**:
```typescript
const { trackLocationSearch } = useMetaPixel();

// Track location search
await trackLocationSearch(searchQuery, userData, packageInfo);
```

## Testing the Events

### Lead Event Testing
1. Navigate to the enquiry section
2. Fill out the form with your details
3. Submit the form
4. Check browser console for "Meta Pixel Event Payload" logs

### AddToWishlist Event Testing
1. Scroll to the "Best-Selling Travel Packages" section
2. Click the heart icon on any package card
3. Check browser console for tracking confirmation
4. Toast notification will confirm wishlist addition

### FindLocation Event Testing
1. Navigate to the enquiry section
2. Type a destination name in the "Preferred Destination" field
3. Type at least 3 characters to trigger the event
4. Check browser console for location search tracking

## Event Parameters

All events include the following standard parameters:
- `event_time`: Unix timestamp
- `event_source_url`: Current page URL
- `action_source`: 'website'
- `event_id`: Unique identifier
- `user_data`: Hashed PII data (email, phone, name)
- `custom_data`: Event-specific data

## Configuration

Events are configured in:
- **Types**: `src/types/metaPixel.ts`
- **Service**: `src/services/metaPixel.ts`
- **Hook**: `src/hooks/useMetaPixel.ts`
- **Components**: Various UI components

## Environment Variables

Make sure to set the following in your `.env.local`:
```
NEXT_PUBLIC_META_PIXEL_TOKEN=your_access_token_here
VITE_META_PIXEL_ID=your_pixel_id_here
```

## API Endpoint

Events are sent to:
```
https://graph.facebook.com/v18.0/{PIXEL_ID}/events?access_token={TOKEN}
```

## Error Handling

All events include comprehensive error handling:
- Network failures are logged but don't break functionality
- Invalid data is validated before sending
- Fallback mechanisms ensure user experience isn't affected

## GDPR Compliance

The integration includes:
- Consent management through MetaPixelContext
- PII data hashing (SHA-256)
- Opt-out capabilities
- Data processing options support

## Next Steps

1. Configure your actual Meta Pixel ID and access token
2. Test events in Facebook Events Manager
3. Set up custom conversions based on these events
4. Monitor event quality and data accuracy
5. Optimize ad campaigns based on event data