import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

// Define the review interface based on Google My Business API
interface GoogleReview {
  reviewId: string;
  reviewer: {
    displayName: string;
    profilePhotoUrl?: string;
  };
  starRating: number;
  comment: string;
  createTime: string;
  updateTime: string;
}

// Fallback static reviews (your current ones) in case API fails
const fallbackReviews: GoogleReview[] = [
  {
    reviewId: "1",
    reviewer: {
      displayName: "Carlos Rodriguez",
      profilePhotoUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    starRating: 5,
    comment:
      "Genesis Stone has been our go-to supplier for 5 years. Their bulk pricing and fast delivery keep our projects on schedule and on budget.",
    createTime: "2024-01-15T10:30:00Z",
    updateTime: "2024-01-15T10:30:00Z",
  },
  {
    reviewId: "2",
    reviewer: {
      displayName: "Sarah Chen",
      profilePhotoUrl:
        "https://images.unsplash.com/photo-1494790108755-2616b332c367?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    starRating: 5,
    comment:
      "The luxury collections here are unmatched. The design consultation service helped me create stunning spaces for my high-end clients.",
    createTime: "2024-01-10T14:20:00Z",
    updateTime: "2024-01-10T14:20:00Z",
  },
  {
    reviewId: "3",
    reviewer: {
      displayName: "Mike Thompson",
      profilePhotoUrl:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    starRating: 5,
    comment:
      "Professional service, quality products, and competitive pricing. They handle all our commercial flooring needs across multiple properties.",
    createTime: "2024-01-05T09:15:00Z",
    updateTime: "2024-01-05T09:15:00Z",
  },
];

const GoogleReviews = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>(fallbackReviews);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch reviews from Google My Business API
  const fetchGoogleReviews = async () => {
    setLoading(true);
    setError(null);

    try {
      // Replace with your actual Google My Business API endpoint
      // You'll need to set up Google My Business API credentials
      const response = await fetch("/api/google-reviews", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }

      const data = await response.json();

      // Filter and sort reviews (get latest 3 with 4+ stars)
      const filteredReviews = data.reviews
        ?.filter((review: GoogleReview) => review.starRating >= 4)
        ?.sort(
          (a: GoogleReview, b: GoogleReview) =>
            new Date(b.createTime).getTime() - new Date(a.createTime).getTime(),
        )
        ?.slice(0, 3);

      if (filteredReviews && filteredReviews.length > 0) {
        setReviews(filteredReviews);
      }
    } catch (err) {
      console.error("Error fetching Google reviews:", err);
      setError("Using cached reviews");
      // Keep fallback reviews on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Uncomment when you have API set up
    // fetchGoogleReviews();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating
            ? "text-[rgb(251,189,35)] fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Customers Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real reviews from our Google Business Profile
          </p>
          {loading && (
            <p className="text-sm text-gray-500 mt-2">
              Loading latest reviews...
            </p>
          )}
          {error && <p className="text-sm text-gray-500 mt-2">{error}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card
              key={review.reviewId}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg relative overflow-hidden"
              style={{ borderRadius: "20px" }}
            >
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 text-gray-200">
                <Quote className="h-8 w-8" />
              </div>

              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex items-center mb-6">
                  {renderStars(review.starRating)}
                </div>

                {/* Review text */}
                <p className="text-gray-700 mb-8 leading-relaxed text-lg italic">
                  "{review.comment}"
                </p>

                {/* Reviewer info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    {review.reviewer.profilePhotoUrl ? (
                      <img
                        src={review.reviewer.profilePhotoUrl}
                        alt={review.reviewer.displayName}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-200"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gradient-to-r from-[rgb(138,0,0)] to-[rgb(120,0,0)] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {review.reviewer.displayName.charAt(0)}
                        </span>
                      </div>
                    )}
                    {/* Google verified badge */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">
                      {review.reviewer.displayName}
                    </p>
                    <p className="text-sm text-gray-500">
                      {formatDate(review.createTime)}
                    </p>
                  </div>
                </div>
              </CardContent>

              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-[rgb(138,0,0)] to-[rgb(120,0,0)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </Card>
          ))}
        </div>

        {/* Google Business Profile link */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Genesis+Stone" // Replace with your actual Google Business Profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
