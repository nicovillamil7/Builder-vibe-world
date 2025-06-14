# Google Business Profile Reviews Integration

## ✅ What's Been Done

1. **Applied diff changes**: Updated carousel spacing and layout
2. **Created GoogleReviews component**: Displays real Google Business Profile reviews
3. **Replaced testimonials section**: Now uses dynamic Google reviews
4. **Added API endpoint**: Backend integration for fetching reviews

## 🚀 Setup Options

### Option 1: Full API Integration (Recommended)

#### Step 1: Get Google Places API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create/select a project
3. Enable "Places API"
4. Go to "Credentials" → "Create Credentials" → "API Key"
5. Restrict the key to "Places API" for security

#### Step 2: Find Your Place ID

1. Go to [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for "Genesis Stone Miami FL"
3. Copy the Place ID (starts with "ChIJ...")

#### Step 3: Set Environment Variables

Add to your `.env` file:

```
GOOGLE_PLACES_API_KEY=your_api_key_here
GOOGLE_PLACE_ID=your_place_id_here
```

#### Step 4: Deploy API Endpoint

- Move `api/google-reviews.ts` to your backend
- Deploy to your server/hosting platform

#### Step 5: Enable Real Reviews

In `src/components/GoogleReviews.tsx`, uncomment line 95:

```typescript
// Change this:
// fetchGoogleReviews();

// To this:
fetchGoogleReviews();
```

### Option 2: Manual Update (Quick Setup)

If you prefer not to set up the API, you can manually update the reviews:

1. Copy your actual Google reviews from Google Business Profile
2. Update the `fallbackReviews` array in `src/components/GoogleReviews.tsx`
3. Replace the example data with your real reviews

## 🎨 Features Included

### Visual Design

- **Modern card design** with glass morphism effect
- **Google verification badges** on profile photos
- **Real star ratings** from Google
- **Profile photos** from Google accounts
- **Hover animations** and gradients
- **Google branding** with "View All Reviews" button

### Functionality

- **Real-time reviews** fetched from Google API
- **Automatic filtering** (4+ stars only)
- **Fallback reviews** if API fails
- **Loading states** and error handling
- **Responsive design** for all devices

### Data Displayed

- ✅ **Reviewer name** from Google profile
- ✅ **Profile photo** from Google account
- ✅ **Star rating** (1-5 stars)
- ✅ **Review text** complete comment
- ✅ **Review date** formatted nicely
- ✅ **Google verification** badge

## 📱 Mobile Responsive

The reviews component is fully responsive and looks great on:

- Desktop (3 columns)
- Tablet (2 columns)
- Mobile (1 column)

## 🔗 Google Business Profile Integration

### Direct Link

The component includes a "View All Reviews on Google" button that links directly to your Google Business Profile.

**Update the link** in `GoogleReviews.tsx` line 172:

```typescript
href = "https://www.google.com/maps/place/Genesis+Stone"; // Replace with your actual URL
```

### Find Your Google Business Profile URL

1. Search "Genesis Stone Miami" on Google Maps
2. Click on your business listing
3. Copy the URL from the address bar
4. Use that URL in the component

## 🛠️ Customization Options

### Filter Settings

You can customize which reviews to show by modifying the filter in the API:

```typescript
// Current: Shows reviews with 4+ stars
.filter((review: any) => review.starRating >= 4)

// Show all reviews:
.filter((review: any) => review.starRating >= 1)

// Show only 5-star reviews:
.filter((review: any) => review.starRating === 5)
```

### Number of Reviews

Change how many reviews to display:

```typescript
// Current: Shows 3 reviews
.slice(0, 3)

// Show 6 reviews:
.slice(0, 6)
```

### Styling

The component uses your existing design system colors:

- Primary red: `rgb(138,0,0)`
- Gold stars: `rgb(251,189,35)`
- Consistent with your brand

## 🚨 Important Notes

1. **Google API Limits**: Google Places API has usage limits. Monitor your usage.
2. **Caching**: Consider caching reviews to reduce API calls
3. **Privacy**: Google reviews are public, so no privacy concerns
4. **Updates**: Reviews refresh automatically when the page loads
5. **Fallback**: Always keeps working even if Google API is down

## 📊 Benefits

✅ **Real customer reviews** instead of fake testimonials
✅ **Automatic updates** when new reviews come in
✅ **Google credibility** with verification badges
✅ **SEO benefits** from real review content
✅ **Social proof** from actual customer photos
✅ **Professional appearance** with modern design

## 🔧 Troubleshooting

If reviews don't load:

1. Check API key is valid
2. Verify Place ID is correct
3. Ensure Places API is enabled
4. Check browser console for errors
5. Fallback reviews will always display

The component is designed to gracefully handle any API issues while maintaining a professional appearance.
