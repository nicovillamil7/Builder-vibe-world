// Backend API endpoint for Google Business Profile reviews
// Place this in your backend (Node.js/Express, Next.js API routes, etc.)

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Option 1: Google Places API (Easier to implement)
    const placeId = process.env.GOOGLE_PLACE_ID; // Your Google Business Place ID
    const apiKey = process.env.GOOGLE_PLACES_API_KEY; // Your Google Places API key

    const placesResponse = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!placesResponse.ok) {
      throw new Error("Failed to fetch reviews from Google Places API");
    }

    const placesData = await placesResponse.json();

    if (placesData.status !== "OK") {
      throw new Error(`Google Places API error: ${placesData.status}`);
    }

    // Format the reviews for our component
    const formattedReviews =
      placesData.result.reviews?.map((review: any) => ({
        reviewId: `${review.author_name}_${review.time}`,
        reviewer: {
          displayName: review.author_name,
          profilePhotoUrl: review.profile_photo_url,
        },
        starRating: review.rating,
        comment: review.text,
        createTime: new Date(review.time * 1000).toISOString(),
        updateTime: new Date(review.time * 1000).toISOString(),
      })) || [];

    // Filter reviews with 4+ stars and get the latest 3
    const filteredReviews = formattedReviews
      .filter((review: any) => review.starRating >= 4)
      .sort(
        (a: any, b: any) =>
          new Date(b.createTime).getTime() - new Date(a.createTime).getTime(),
      )
      .slice(0, 3);

    res.status(200).json({
      reviews: filteredReviews,
      totalReviews: placesData.result.user_ratings_total || 0,
      averageRating: placesData.result.rating || 0,
    });
  } catch (error) {
    console.error("Error fetching Google reviews:", error);

    // Return empty array to trigger fallback reviews in frontend
    res.status(200).json({
      reviews: [],
      error: "Unable to fetch latest reviews - using cached reviews",
    });
  }
}

/* 
COMPLETE SETUP GUIDE:

1. **Get Google Places API Key:**
   - Go to Google Cloud Console (console.cloud.google.com)
   - Create/select a project
   - Enable "Places API"
   - Go to "Credentials" → "Create Credentials" → "API Key"
   - Restrict the key to "Places API" for security

2. **Find Your Place ID:**
   - Go to: https://developers.google.com/maps/documentation/places/web-service/place-id
   - Search for "Genesis Stone" in Miami
   - Copy the Place ID (starts with "ChIJ...")

3. **Environment Variables:**
   Add to your .env file:
   ```
   GOOGLE_PLACES_API_KEY=your_api_key_here
   GOOGLE_PLACE_ID=your_place_id_here
   ```

4. **Deploy this API endpoint to your backend**

5. **Update the component to use real API:**
   Uncomment the fetchGoogleReviews() call in useEffect

ALTERNATIVE SIMPLER APPROACH:
If you don't want to set up the API, you can manually update the fallback reviews
in GoogleReviews.tsx with your actual Google reviews by copying them from your
Google Business Profile.
*/
