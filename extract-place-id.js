// Quick script to extract Place ID from your Google Maps URL
// Run this in your browser console or as a Node.js script

async function extractPlaceId() {
  const shortUrl = "https://maps.app.goo.gl/dV7t2MrpEnrbG8Vo7";

  try {
    // Method 1: Try to fetch the redirect URL
    const response = await fetch(shortUrl, {
      method: "HEAD",
      redirect: "manual",
    });

    const location = response.headers.get("location");
    console.log("Redirect URL:", location);

    // Extract Place ID from the URL
    if (location) {
      const placeIdMatch = location.match(/place\/([^\/]+)/);
      if (placeIdMatch) {
        const placeId = placeIdMatch[1];
        console.log("Extracted Place ID:", placeId);
        return placeId;
      }
    }
  } catch (error) {
    console.error("Error extracting Place ID:", error);
  }

  return null;
}

// Alternative method - Manual extraction steps:
console.log(`
MANUAL METHOD TO GET PLACE ID:

1. Open this URL in your browser: https://maps.app.goo.gl/dV7t2MrpEnrbG8Vo7

2. Wait for it to redirect to the full Google Maps URL

3. Look for a URL pattern like:
   https://www.google.com/maps/place/Genesis+Stone/@25.7889689,-80.3370671,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9b6d6f6f6f6f6:0x1234567890abcdef!8m2!3d25.7889689!4d-80.3370671!16s%2Fg%2F11c0q0q0q0

4. The Place ID is the part after "1s" and before the next "!" 
   Example: 0x88d9b6d6f6f6f6f6:0x1234567890abcdef

5. OR look for a cleaner URL like:
   https://www.google.com/maps/place/data=!4m2!3m1!1s[PLACE_ID_HERE]

6. Copy the Place ID (starts with ChIJ... or could be coordinates)
`);

extractPlaceId();
