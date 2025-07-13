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
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read reviews from satisfied customers who chose Genesis Stone for their flooring projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-red-100 text-red-600 font-semibold">
                      {getInitials(review.author_name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.author_name}</h4>
                    <p className="text-sm text-gray-500">{review.relative_time_description}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(review.rating)}
                </div>

                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gray-50 px-6 py-3 rounded-full">
            <div className="flex items-center space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold text-gray-900">5.0</span>
            <span className="text-gray-600">• 150+ reviews on Google</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;