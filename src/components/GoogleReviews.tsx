
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ExternalLink } from "lucide-react";

const hardcodedReviews = [
  {
    id: "1",
    author_name: "Maria Rodriguez",
    rating: 5,
    text: "Outstanding service and quality travertine for our pool area. The team provided excellent guidance throughout the selection process. Highly recommend Genesis Stone!",
    time: Date.now() - 86400000,
    profile_photo_url: "https://lh3.googleusercontent.com/a/default-user=s40-c"
  },
  {
    id: "2",
    author_name: "John Smith",
    rating: 5,
    text: "Professional installation and beautiful porcelain tiles. The showroom has an amazing selection and the staff is very knowledgeable. Will definitely return for future projects!",
    time: Date.now() - 172800000,
    profile_photo_url: "https://lh3.googleusercontent.com/a/default-user=s40-c"
  },
  {
    id: "3",
    author_name: "Sarah Chen",
    rating: 5,
    text: "Amazing travertine selection for my pool deck project. The expert guidance and quality materials made all the difference. Will definitely return for future projects!",
    time: Date.now() - 259200000,
    profile_photo_url: "https://lh3.googleusercontent.com/a/default-user=s40-c"
  }
];

const GoogleReviews = () => {
  const formatTimeAgo = (timestamp: number): string => {
    const now = Date.now();
    const diffInSeconds = Math.floor((now - timestamp) / 1000);
    const diffInDays = Math.floor(diffInSeconds / 86400);
    
    if (diffInDays === 0) return "today";
    if (diffInDays === 1) return "1 day ago";
    return `${diffInDays} days ago`;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from homeowners and contractors who trust Genesis Stone
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold text-gray-900">5.0</span>
            <span className="text-gray-600">(150 reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {hardcodedReviews.map((review) => (
            <Card key={review.id} className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="absolute top-4 left-4 text-[rgb(138,0,0)] opacity-20">
                  <Quote className="h-8 w-8" />
                </div>
                
                <div className="flex items-center mb-4">
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-12 h-12 rounded-full mr-4 bg-gray-200"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(review.author_name) + "&background=8a0000&color=fff";
                    }}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.author_name}</h4>
                    <p className="text-sm text-gray-600">{formatTimeAgo(review.time)}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.google.com/search?q=Genesis+Stone+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[rgb(138,0,0)] text-white font-semibold rounded-lg hover:bg-[rgb(110,0,0)] transition-colors duration-200"
          >
            View All Reviews
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
