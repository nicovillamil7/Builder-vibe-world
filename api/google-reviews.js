// Backend API endpoint for Google Reviews
// This can be used with Express.js, Next.js API routes, or any Node.js backend

const GOOGLE_API_KEY = "AIzaSyDOEN5ql3dqILeDzp9R71JodVWlR8P2TKQ";

// Search terms to find Genesis Stone
const SEARCH_TERMS = [
  "Genesis Stone 3399 NW 72nd Ave Miami FL",
  "Genesis Stone Miami FL 33122",
  "Genesis Stone flooring Miami",
];

async function findGenesisStoneePlaceId() {
  for (const term of SEARCH_TERMS) {
    try {
      const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(term)}&key=${GOOGLE_API_KEY}`;

      const response = await fetch(searchUrl);
      const data = await response.json();

      if (data.status === "OK" && data.results.length > 0) {
        // Look for Genesis Stone specifically
        const genesisStone = data.results.find(
          (place) =>
            place.name.toLowerCase().includes("genesis stone") ||
            place.formatted_address.includes("3399 NW 72nd Ave") ||
            place.formatted_address.includes("Miami, FL 33122"),
        );

        if (genesisStone) {
          console.log("✅ Found Genesis Stone:", genesisStone.name);
          console.log("📍 Address:", genesisStone.formatted_address);
          console.log("🆔 Place ID:", genesisStone.place_id);
          return genesisStone.place_id;
        }

        // If no exact match, try the first result
        console.log("Using first result:", data.results[0].name);
        return data.results[0].place_id;
      }
    } catch (error) {
      console.error(`Error searching for "${term}":`, error);
    }
  }
  return null;
}

async function fetchReviewsForPlace(placeId) {
  try {
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total,name,formatted_address,url&key=${GOOGLE_API_KEY}`;

    const response = await fetch(detailsUrl);
    const data = await response.json();

    if (data.status === "OK" && data.result) {
      const result = data.result;

      // Format reviews for frontend
      const formattedReviews =
        result.reviews?.map((review) => ({
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

      // Filter to 4+ stars and get latest 3
      const filteredReviews = formattedReviews
        .filter((review) => review.starRating >= 4)
        .sort(
          (a, b) =>
            new Date(b.createTime).getTime() - new Date(a.createTime).getTime(),
        )
        .slice(0, 3);

      return {
        reviews: filteredReviews,
        businessInfo: {
          name: result.name,
          rating: result.rating,
          totalReviews: result.user_ratings_total,
          address: result.formatted_address,
          googleUrl: result.url,
        },
      };
    }

    throw new Error(`Google API error: ${data.status}`);
  } catch (error) {
    console.error("Error fetching place details:", error);
    throw error;
  }
}

// Main API handler function
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    console.log("🔍 Starting Genesis Stone review fetch...");

    // Step 1: Find Place ID
    const placeId = await findGenesisStoneePlaceId();

    if (!placeId) {
      throw new Error("Could not find Genesis Stone Place ID");
    }

    // Step 2: Fetch reviews
    const data = await fetchReviewsForPlace(placeId);

    console.log(
      `✅ Success! Found ${data.reviews.length} reviews for ${data.businessInfo.name}`,
    );

    res.status(200).json({
      success: true,
      reviews: data.reviews,
      totalReviews: data.businessInfo.totalReviews,
      averageRating: data.businessInfo.rating,
      businessName: data.businessInfo.name,
      address: data.businessInfo.address,
      placeId: placeId,
    });
  } catch (error) {
    console.error("❌ Error in API handler:", error);

    // Return empty reviews to trigger fallback
    res.status(200).json({
      success: false,
      error: error.message,
      reviews: [],
      fallback: true,
    });
  }
}

// For Express.js usage:
/*
const express = require('express');
const app = express();

app.get('/api/google-reviews', async (req, res) => {
  // Use the handler function above
  await handler(req, res);
});

app.listen(3001, () => {
  console.log('API server running on port 3001');
});
*/

// For testing the API directly:
export async function testAPI() {
  console.log("🧪 Testing Genesis Stone Google Reviews API...");

  try {
    const placeId = await findGenesisStoneePlaceId();
    if (placeId) {
      const data = await fetchReviewsForPlace(placeId);
      console.log("✅ Test successful!", data);
      return data;
    } else {
      console.log("❌ Could not find Place ID");
    }
  } catch (error) {
    console.error("❌ Test failed:", error);
  }
}
