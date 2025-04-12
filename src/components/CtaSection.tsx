
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2/3 bg-muted"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-card border border-border shadow-lg rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="md:max-w-md">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-muted-foreground mb-6 md:mb-0">
                Join thousands of satisfied customers building amazing websites with our templates. Get started today!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
