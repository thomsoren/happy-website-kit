
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "This template transformed our website. The clean design and intuitive navigation have significantly improved our user engagement and conversion rates.",
    author: "Sarah Johnson",
    role: "CEO, InnovateX",
  },
  {
    quote: "Implementing this template was a breeze. The code is clean, well-documented, and the customer support team was incredibly helpful throughout the process.",
    author: "Michael Chen",
    role: "CTO, TechLift",
  },
  {
    quote: "The flexibility of this template is impressive. We were able to customize it to perfectly match our brand identity without compromising on performance.",
    author: "Jessica Miller",
    role: "Design Lead, CreativeFlow",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What our customers are saying</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've helped hundreds of companies build better websites. Here's what they think.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#9b87f5" color="#9b87f5" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <CardFooter className="border-t border-border pt-4">
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
