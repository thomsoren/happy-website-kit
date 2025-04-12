
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Shield, LineChart, Layers, Compass, Clock } from 'lucide-react';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Optimized for speed with modern technologies ensuring your site loads in milliseconds.',
    icon: Zap,
  },
  {
    title: 'Secure by Default',
    description: 'Built with security in mind, protecting you and your users from common vulnerabilities.',
    icon: Shield,
  },
  {
    title: 'Analytics Built-in',
    description: 'Integrated analytics to help you understand your audience and make better decisions.',
    icon: LineChart,
  },
  {
    title: 'Modular Components',
    description: 'Built with a component-based approach for easy customization and maintenance.',
    icon: Layers,
  },
  {
    title: 'SEO Optimized',
    description: 'Built with SEO best practices to help your site rank higher in search results.',
    icon: Compass,
  },
  {
    title: 'Regular Updates',
    description: 'Constantly updated with the latest technologies and security patches.',
    icon: Clock,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">All the features you need</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build modern websites and applications, without the complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border bg-card transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
