
import React, { useState } from 'react';
import "@oicl/openbridge-webcomponents/dist/components/top-bar/top-bar.js";
import "@oicl/openbridge-webcomponents/dist/components/button/button.js";
import "@oicl/openbridge-webcomponents/dist/components/card-list-button/card-list-button.js";
import "@oicl/openbridge-webcomponents/dist/components/input/input.js";
import "@oicl/openbridge-webcomponents/dist/components/notification-button/notification-button.js";
import "@oicl/openbridge-webcomponents/dist/components/navigation-menu/navigation-menu.js";
import "@oicl/openbridge-webcomponents/dist/components/navigation-item/navigation-item.js";
import "@oicl/openbridge-webcomponents/dist/components/toggle-switch/toggle-switch.js";
import "@oicl/openbridge-webcomponents/dist/components/alert-button/alert-button.js";
import "@oicl/openbridge-webcomponents/dist/components/badge/badge.js";
import "@oicl/openbridge-webcomponents/dist/components/breadcrumb/breadcrumb.js";
import "@oicl/openbridge-webcomponents/dist/components/divider/divider.js";
import "@oicl/openbridge-webcomponents/dist/components/tooltip/tooltip.js";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-obc-theme', darkMode ? 'day' : 'night');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <obc-top-bar title="OpenBridge Demo">
        <obc-navigation-menu slot="navigation">
          <obc-navigation-item>Home</obc-navigation-item>
          <obc-navigation-item>Features</obc-navigation-item>
          <obc-navigation-item>Pricing</obc-navigation-item>
          <obc-navigation-item>About</obc-navigation-item>
          <obc-navigation-item>Contact</obc-navigation-item>
        </obc-navigation-menu>
        <div slot="actions" className="flex items-center gap-4">
          <obc-notification-button></obc-notification-button>
          <obc-alert-button></obc-alert-button>
        </div>
      </obc-top-bar>

      <main className="flex-grow">
        <div className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
          <obc-breadcrumb>
            <span>Home</span>
            <span>Dashboard</span>
          </obc-breadcrumb>
          
          <section className="py-12">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-4xl font-bold mb-4">Welcome to OpenBridge</h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  A modern UI component library for building responsive web applications
                  with a consistent look and feel.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span>{darkMode ? 'Dark' : 'Light'} Mode</span>
                <obc-toggle-switch onClick={toggleDarkMode}></obc-toggle-switch>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <obc-button>Get Started</obc-button>
              <obc-button variant="secondary">Documentation</obc-button>
            </div>
          </section>
          
          <obc-divider></obc-divider>
          
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8">Featured Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <obc-card-list-button heading="Fleet Management">
                <div className="flex items-center justify-between">
                  <p>Advanced vessel tracking and monitoring</p>
                  <obc-badge variant="primary">Popular</obc-badge>
                </div>
              </obc-card-list-button>
              
              <obc-card-list-button heading="Maintenance Planning">
                <div className="flex items-center justify-between">
                  <p>Streamline scheduled maintenance tasks</p>
                  <obc-badge variant="success">New</obc-badge>
                </div>
              </obc-card-list-button>
              
              <obc-card-list-button heading="Navigation Systems">
                <div className="flex items-center justify-between">
                  <p>Integrated bridge and navigation solutions</p>
                  <obc-badge variant="warning">Updated</obc-badge>
                </div>
              </obc-card-list-button>
              
              <obc-card-list-button heading="Safety Management">
                <div className="flex items-center justify-between">
                  <p>Comprehensive safety protocol solutions</p>
                  <obc-badge variant="secondary">Essential</obc-badge>
                </div>
              </obc-card-list-button>
              
              <obc-card-list-button heading="Crew Management">
                <div className="flex items-center justify-between">
                  <p>Efficient scheduling and certification tracking</p>
                  <obc-badge variant="primary">Featured</obc-badge>
                </div>
              </obc-card-list-button>
              
              <obc-card-list-button heading="Analytics Dashboard">
                <div className="flex items-center justify-between">
                  <p>Real-time data visualization and insights</p>
                  <obc-badge variant="success">Beta</obc-badge>
                </div>
              </obc-card-list-button>
            </div>
          </section>
          
          <obc-divider></obc-divider>
          
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            
            <div className="max-w-xl mx-auto">
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">Name</label>
                  <obc-input placeholder="Your name"></obc-input>
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium">Email</label>
                  <obc-input placeholder="your.email@example.com"></obc-input>
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium">Message</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={4}
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <div>
                  <obc-tooltip content="Send your message" position="top">
                    <obc-button>Submit</obc-button>
                  </obc-tooltip>
                </div>
              </div>
            </div>
          </section>
          
          <obc-divider></obc-divider>
          
          <footer className="py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600">© 2025 OpenBridge. All rights reserved.</p>
              
              <div className="flex gap-4 mt-4 md:mt-0">
                <obc-button variant="secondary">Privacy Policy</obc-button>
                <obc-button variant="secondary">Terms of Service</obc-button>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
