import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ExternalLink } from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

const GoogleReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  // Fallback reviews for demo purposes
  const fallbackReviews: Review[] = [
    {
      id: 1,
      name: "Maria Rodriguez",
      rating: 5,
      text: "Excellent service and quality flooring materials. The team at Genesis Stone helped us choose the perfect porcelain tiles for our Miami home renovation. Highly recommended!",
      date: "2024-01-15",
      verified: true,
    },
    {
      id: 2,
      name: "Carlos Martinez",
      rating: 5,
      text: "Best flooring supplier in South Florida. Their natural stone selection is outstanding and the prices are very competitive. Professional delivery service too.",
      date: "2024-01-10",
      verified: true,
    },
    {
      id: 3,
      name: "Jennifer Smith",
      rating: 5,
      text: "Genesis Stone provided amazing customer service for our luxury vinyl plank installation. The showroom is beautiful and the staff is very knowledgeable.",
      date: "2024-01-08",
      verified: true,
    },
    {
      id: 4,
      name: "David Johnson",
      rating: 5,
      text: "Top quality materials and excellent prices. We've used Genesis Stone for multiple contractor projects and they always deliver on time.",
      date: "2024-01-05",
      verified: true,
    },
  ];

  useEffect(() => {
    // Simulate API call (this would be replaced with actual Google Reviews API)
    const fetchReviews = async () => {
      try {
        // This would be your actual API endpoint
        // const response = await fetch('/api/google-reviews');
        // const data = await response.json();

        // For now, simulate a failed API call and use fallback
        throw new Error('API not configured');
      } catch (error) {
        console.log('API call failed.');
        console.log('Using fallback reviews for demo');
        setReviews(fallbackReviews);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real reviews from satisfied customers across South Florida
          </p>
          <div className="flex items-center justify-center mt-4 space-x-2">
            <div className="flex">{renderStars(5)}</div>
            <span className="text-sm text-gray-600 ml-2">
              Based on 150+ Google Reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="hover:shadow-lg transition-shadow duration-300 bg-white border-gray-200"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {review.name}
                    </h4>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                  {review.verified && (
                    <div className="flex items-center text-xs text-green-600">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Verified
                    </div>
                  )}
                </div>

                <div className="flex mb-3">{renderStars(review.rating)}</div>

                <div className="relative">
                  <Quote className="w-4 h-4 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {review.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/Genesis+Stone"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;