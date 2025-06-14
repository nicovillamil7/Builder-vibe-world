// Utility to extract Place ID from Google Maps URLs

export async function extractPlaceIdFromUrl(
  url: string,
): Promise<string | null> {
  try {
    // For shortened Google Maps URLs, we need to follow the redirect
    if (url.includes("maps.app.goo.gl")) {
      // This would need to be done server-side to avoid CORS issues
      console.log("Shortened URL detected. Please follow these steps:");
      console.log("1. Open the URL in your browser:", url);
      console.log("2. Copy the full redirected URL");
      console.log("3. Look for the Place ID in the URL");
      return null;
    }

    // For full Google Maps URLs, extract Place ID
    const patterns = [
      /place\/([^\/\?]+)/, // Pattern 1: /place/PLACE_ID
      /1s([^!]+)!/, // Pattern 2: 1sPLACE_ID!
      /place_id=([^&]+)/, // Pattern 3: place_id=PLACE_ID
      /@([^,]+,[^,]+)/, // Pattern 4: Coordinates
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        return match[1];
      }
    }

    return null;
  } catch (error) {
    console.error("Error extracting Place ID:", error);
    return null;
  }
}

// Manual steps for your URL
export const manualExtractionSteps = `
TO GET YOUR PLACE ID:

1. Open: https://maps.app.goo.gl/dV7t2MrpEnrbG8Vo7
2. Wait for redirect to full URL
3. Copy the full URL
4. Look for patterns like:
   - ChIJ... (Place ID)
   - Coordinates: @25.123456,-80.123456
   - Business name in URL

COMMON PLACE ID FORMATS:
- ChIJ... (most common)
- 0x123...:0x456... (hex format)
- Business name encoded in URL

Your Genesis Stone business should have a Place ID starting with "ChIJ"
`;

// For Genesis Stone Miami, the Place ID might look like:
// ChIJXXXXXXXXXXXXXXXXXXXXXXX (example)
export const GENESIS_STONE_PLACE_ID = "PLACE_ID_TO_BE_EXTRACTED";
