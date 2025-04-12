
import React from 'react';
import { Github, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="md:max-w-xs">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg mr-2">A</div>
              <span className="font-medium text-xl">Acme</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Beautiful, modern website templates for your next project. Easy to customize and built with the latest web technologies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            <div>
              <h3 className="font-medium text-lg mb-3">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Templates</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Customers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Guides</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Support</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Acme Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
