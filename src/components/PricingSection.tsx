
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    description: "Perfect for small projects and individuals",
    price: "$9",
    features: [
      "1 website",
      "10 pages per website",
      "1 GB storage",
      "Basic analytics",
      "24/7 support",
    ],
    featured: false,
  },
  {
    name: "Pro",
    description: "Ideal for businesses and growing teams",
    price: "$29",
    features: [
      "5 websites",
      "50 pages per website",
      "10 GB storage",
      "Advanced analytics",
      "Priority support",
      "Custom domain",
      "SEO tools",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    price: "$99",
    features: [
      "Unlimited websites",
      "Unlimited pages",
      "100 GB storage",
      "Enterprise analytics",
      "Dedicated support",
      "Custom domains",
      "Advanced SEO tools",
      "White labeling",
      "Priority CDN",
    ],
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for you and get started building your website today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`flex flex-col h-full ${
                plan.featured 
                  ? "border-primary shadow-lg shadow-primary/10" 
                  : "border-border"
              }`}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="mt-1">{plan.description}</CardDescription>
                  </div>
                  {plan.featured && (
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      Popular
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check size={18} className="text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.featured ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
