// Utility to find Place ID for Genesis Stone using Google Places API

const API_KEY = "AIzaSyDOEN5ql3dqILeDzp9R71JodVWlR8P2TKQ";

export async function findGenesisStoneePlaceId(): Promise<string | null> {
  try {
    // Search for Genesis Stone in Miami using Text Search API
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=Genesis+Stone+Miami+FL&key=${API_KEY}`;

    const response = await fetch(searchUrl);
    const data = await response.json();

    if (data.status === "OK" && data.results.length > 0) {
      // Find the exact match for Genesis Stone
      const genesisStone = data.results.find(
        (place: any) =>
          place.name.toLowerCase().includes("genesis stone") ||
          place.formatted_address.includes("3399 NW 72nd Ave") ||
          place.formatted_address.includes("Miami, FL 33122"),
      );

      if (genesisStone) {
        console.log("Found Genesis Stone:", genesisStone);
        console.log("Place ID:", genesisStone.place_id);
        return genesisStone.place_id;
      }

      // If no exact match, return the first result
      console.log("Using first result:", data.results[0]);
      return data.results[0].place_id;
    }

    console.error("No places found");
    return null;
  } catch (error) {
    console.error("Error finding Place ID:", error);
    return null;
  }
}

// Alternative search terms if the first doesn't work
export async function searchWithAlternativeTerms(): Promise<string | null> {
  const searchTerms = [
    "Genesis Stone 3399 NW 72nd Ave Miami FL",
    "Genesis Stone Miami FL 33122",
    "Genesis Stone flooring Miami",
    "flooring store 3399 NW 72nd Ave Miami",
  ];

  for (const term of searchTerms) {
    try {
      const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(term)}&key=${API_KEY}`;
      const response = await fetch(searchUrl);
      const data = await response.json();

      if (data.status === "OK" && data.results.length > 0) {
        console.log(`Found with term "${term}":`, data.results[0]);
        return data.results[0].place_id;
      }
    } catch (error) {
      console.error(`Error with term "${term}":`, error);
    }
  }

  return null;
}

// For manual testing - run this in browser console
export const testPlaceIdSearch = async () => {
  console.log("Searching for Genesis Stone Place ID...");

  let placeId = await findGenesisStoneePlaceId();

  if (!placeId) {
    console.log("Trying alternative search terms...");
    placeId = await searchWithAlternativeTerms();
  }

  if (placeId) {
    console.log("✅ Success! Place ID found:", placeId);
    console.log("Copy this Place ID for your environment variables");

    // Test fetching reviews with this Place ID
    const reviewsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total,name,formatted_address&key=${API_KEY}`;

    try {
      const reviewsResponse = await fetch(reviewsUrl);
      const reviewsData = await reviewsResponse.json();

      if (reviewsData.status === "OK") {
        console.log(
          "✅ Reviews found:",
          reviewsData.result.reviews?.length || 0,
        );
        console.log("⭐ Rating:", reviewsData.result.rating);
        console.log("📍 Address:", reviewsData.result.formatted_address);
        console.log(
          "📝 Recent reviews:",
          reviewsData.result.reviews?.slice(0, 3),
        );
      }
    } catch (error) {
      console.error("Error testing reviews:", error);
    }
  } else {
    console.log("❌ Could not find Place ID. Please check manually.");
  }

  return placeId;
};
