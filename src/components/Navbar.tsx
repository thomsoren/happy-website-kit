
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg mr-2">A</div>
              <span className="font-medium text-xl">Acme</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-accent transition-colors">Features</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-accent transition-colors">Testimonials</a>
            <a href="#pricing" className="text-sm font-medium hover:text-accent transition-colors">Pricing</a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm">Sign In</Button>
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-40 px-4 py-6 animate-fade-in">
          <nav className="flex flex-col gap-4 mb-8">
            <a 
              href="#features" 
              className="text-lg font-medium p-2 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-lg font-medium p-2 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-lg font-medium p-2 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="text-lg font-medium p-2 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </nav>
          <div className="flex flex-col gap-2">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
