
import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const GoogleReviews: React.FC = () => {
  const reviews = [
    {
      id: '1',
      author_name: 'Adina Caicedo',
      rating: 5,
      text: 'From start to finish the experience with genesis stone and more was seamless. They helped me choose the perfect tile for my home. Awesome customer service, very attentive.',
      relative_time_description: 'a week ago',
      initial: 'A',
      avatarColor: 'bg-blue-500'
    },
    {
      id: '2',
      author_name: 'Shirley Martinez',
      rating: 5,
      text: 'Have a good variety, small but Luis and Maribel will find you anything you want. Very personalized service and fair prices',
      relative_time_description: '2 weeks ago',
      initial: 'S',
      avatarColor: 'bg-green-500'
    },
    {
      id: '3',
      author_name: 'David Wilson',
      rating: 5,
      text: 'Great quality materials and great customer service! The team at Genesis was so kind and helpful through every step of my experience and offered a product selection I couldn\'t find anywhere else. Would definitely recommend them to anyone!',
      relative_time_description: '3 weeks ago',
      initial: 'D',
      avatarColor: 'bg-purple-500'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Customers Experience
          </h2>
          
          {/* Overall Rating Badge */}
          <div className="inline-flex items-center space-x-3 bg-[rgb(138,0,0)] text-white px-6 py-3 rounded-full mb-4">
            <div className="flex items-center space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold">4.8</span>
          </div>
          
          <p className="text-gray-600 mb-8">127+ Customer Reviews</p>
          <p className="text-sm text-gray-500">Real Customer Testimonials</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Stars at top */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Review text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>

                {/* Author info at bottom */}
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback className={`${review.avatarColor} text-white font-semibold`}>
                      {review.initial}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.author_name}</h4>
                    <p className="text-sm text-gray-500">{review.relative_time_description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=genesis+stone+miami&oq=genesis+stone&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgkIARBFGDkYgAQyBwgCEAAYgAQyBggDEEUYOzIHCAQQABiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDQxMjJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x88d9b985d5b7b853:0x61002a1d232607,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#4285f4] hover:bg-[#3367d6] text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>View All Reviews on Google</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
