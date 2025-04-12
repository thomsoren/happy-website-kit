
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Build <span className="gradient-text">beautiful websites</span> faster than ever
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            A modern website template designed for businesses ready to stand out. Fast, responsive, and incredibly easy to customize.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 md:mt-20 max-w-5xl mx-auto">
          <div className="rounded-xl border bg-card shadow-lg overflow-hidden">
            <div className="h-6 bg-muted flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/70"></div>
              <div className="w-3 h-3 rounded-full bg-accent/70"></div>
              <div className="w-3 h-3 rounded-full bg-primary/70"></div>
            </div>
            <div className="p-4 bg-card">
              <div className="h-[320px] md:h-[400px] bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Website Preview Dashboard
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
