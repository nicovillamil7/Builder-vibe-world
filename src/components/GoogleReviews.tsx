
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const GoogleReviews: React.FC = () => {
  const reviews = [
    {
      id: '1',
      author_name: 'Michael Rodriguez',
      rating: 5,
      text: 'Outstanding service and quality products! Genesis Stone helped us transform our entire home with beautiful natural stone flooring. The team was professional and the installation was flawless.',
      relative_time_description: 'a week ago'
    },
    {
      id: '2', 
      author_name: 'Sarah Johnson',
      rating: 5,
      text: 'Absolutely love our new porcelain tiles from Genesis Stone! The quality is exceptional and the customer service was top-notch. Highly recommend for anyone looking for premium flooring solutions.',
      relative_time_description: '2 weeks ago'
    },
    {
      id: '3',
      author_name: 'Carlos Martinez',
      rating: 5,
      text: 'Genesis Stone delivered exactly what they promised. Great selection, competitive prices, and excellent installation service. Our travertine pool deck looks amazing!',
      relative_time_description: '3 weeks ago'
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied customers across South Florida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-[rgb(138,0,0)] text-white font-semibold">
                      {getInitials(review.author_name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{review.author_name}</h3>
                    <div className="flex items-center space-x-2">
                      {renderStars(review.rating)}
                      <span className="text-sm text-gray-500">{review.relative_time_description}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
