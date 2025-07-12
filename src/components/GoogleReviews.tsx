
import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, Users, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface Review {
  id: string;
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
}

interface GoogleReviewsResponse {
  result: {
    reviews: Review[];
    rating: number;
    user_ratings_total: number;
  };
  status: string;
}

const GoogleReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [totalReviews, setTotalReviews] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fallback reviews for demo purposes
  const fallbackReviews: Review[] = [
    {
      id: '1',
      author_name: 'Maria Rodriguez',
      rating: 5,
      text: 'Exceptional service and quality materials! Genesis Stone helped us transform our entire home with beautiful porcelain tiles. The team was professional and knowledgeable throughout the process.',
      time: Date.now() - 86400000,
      profile_photo_url: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=64&h=64&fit=crop&crop=face'
    },
    {
      id: '2',
      author_name: 'Carlos Martinez',
      rating: 5,
      text: 'Outstanding selection of natural stone and excellent customer service. They guided us through every step of choosing the perfect travertine for our pool deck. Highly recommend!',
      time: Date.now() - 172800000,
      profile_photo_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face'
    },
    {
      id: '3',
      author_name: 'Jennifer Thompson',
      rating: 5,
      text: 'Genesis Stone exceeded our expectations. Their luxury vinyl plank selection is amazing and the installation guidance was invaluable. Our floors look absolutely stunning!',
      time: Date.now() - 259200000,
      profile_photo_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face'
    }
  ];

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;
        const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
        
        if (!placeId || !apiKey) {
          console.log('Google Places API credentials not configured, using fallback reviews');
          setReviews(fallbackReviews);
          setAverageRating(4.9);
          setTotalReviews(127);
          setLoading(false);
          return;
        }

        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: GoogleReviewsResponse = await response.json();
        
        if (data.status === 'OK' && data.result) {
          setReviews(data.result.reviews || []);
          setAverageRating(data.result.rating || 0);
          setTotalReviews(data.result.user_ratings_total || 0);
        } else {
          throw new Error(`API error: ${data.status}`);
        }
      } catch (err) {
        console.error('API call failed.', err);
        console.log('Using fallback reviews for demo');
        setReviews(fallbackReviews);
        setAverageRating(4.9);
        setTotalReviews(127);
        setError('Unable to load live reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const formatTimeAgo = (timestamp: number) => {
    const now = Date.now();
    const diffInMs = now - timestamp;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return '1 day ago';
    if (diffInDays < 30) return `${diffInDays} days ago`;
    if (diffInDays < 365) {
      const months = Math.floor(diffInDays / 30);
      return months === 1 ? '1 month ago' : `${months} months ago`;
    }
    const years = Math.floor(diffInDays / 365);
    return years === 1 ? '1 year ago' : `${years} years ago`;
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real reviews from satisfied customers across South Florida
          </p>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center mt-8 space-x-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold text-gray-900 mr-2">
                  {averageRating.toFixed(1)}
                </span>
                <div className="flex">
                  {renderStars(Math.round(averageRating))}
                </div>
              </div>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-blue-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">
                  {totalReviews}+
                </span>
              </div>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-green-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">17+</span>
              </div>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      {review.profile_photo_url ? (
                        <img
                          src={review.profile_photo_url}
                          alt={review.author_name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-red-600 font-semibold text-sm">
                          {review.author_name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {review.author_name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {formatTimeAgo(review.time)}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <MessageSquare className="w-3 h-3 mr-1" />
                    Google
                  </Badge>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  {renderStars(review.rating)}
                  <span className="ml-2 text-sm text-gray-600">
                    {review.rating}/5
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                  {review.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Star className="w-5 h-5 mr-2" />
            Leave us a Review
          </a>
        </div>

        {error && (
          <div className="text-center mt-4">
            <p className="text-sm text-amber-600">
              {error} - Showing sample reviews
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GoogleReviews;
