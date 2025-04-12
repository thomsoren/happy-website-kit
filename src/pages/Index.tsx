
import React from 'react';
import "@oicl/openbridge-webcomponents/dist/components/top-bar/top-bar.js";
import "@oicl/openbridge-webcomponents/dist/components/button/button.js";
import "@oicl/openbridge-webcomponents/dist/components/card-list-button/card-list-button.js";
import "@oicl/openbridge-webcomponents/dist/components/input/input.js";
import "@oicl/openbridge-webcomponents/dist/components/notification-button/notification-button.js";
import "@oicl/openbridge-webcomponents/dist/components/navigation-menu/navigation-menu.js";
import "@oicl/openbridge-webcomponents/dist/components/toggle-switch/toggle-switch.js";
import "@oicl/openbridge-webcomponents/dist/components/alert-button/alert-button.js";
import "@oicl/openbridge-webcomponents/dist/components/badge/badge.js";
import "@oicl/openbridge-webcomponents/dist/components/breadcrumb/breadcrumb.js";
import "@oicl/openbridge-webcomponents/dist/components/divider/divider.js";
import "@oicl/openbridge-webcomponents/dist/components/tooltip/tooltip.js";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <obc-top-bar title="OpenBridge Demo">
        <obc-navigation-menu slot="navigation">
          <obc-navigation-item>Home</obc-navigation-item>
          <obc-navigation-item>Features</obc-navigation-item>
          <obc-navigation-item>Contact</obc-navigation-item>
        </obc-navigation-menu>
        <obc-notification-button slot="actions"></obc-notification-button>
      </obc-top-bar>

      <main className="flex-grow p-8 max-w-6xl mx-auto">
        <obc-breadcrumb>
          <span>Home</span>
          <span>Dashboard</span>
        </obc-breadcrumb>

        <div className="flex justify-end mb-4">
          <obc-alert-button></obc-alert-button>
        </div>

        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to OpenBridge</h1>
          <p className="text-lg mb-6">Build modern web applications with our component library</p>
          
          <div className="flex gap-4 mb-8">
            <obc-button>Get Started</obc-button>
            <obc-button variant="secondary">Learn More</obc-button>
          </div>

          <div className="flex items-center gap-2">
            <span>Dark Mode</span>
            <obc-toggle-switch></obc-toggle-switch>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <obc-card-list-button heading="Feature One">
            <div className="flex items-center gap-2">
              Description of first feature
              <obc-badge variant="success">New</obc-badge>
            </div>
          </obc-card-list-button>
          <obc-card-list-button heading="Feature Two">
            <div className="flex items-center gap-2">
              Description of second feature
              <obc-badge variant="warning">Beta</obc-badge>
            </div>
          </obc-card-list-button>
          <obc-card-list-button heading="Feature Three">
            <div className="flex items-center gap-2">
              Description of third feature
              <obc-badge variant="primary">Popular</obc-badge>
            </div>
          </obc-card-list-button>
        </section>

        <obc-divider></obc-divider>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <div className="flex gap-4">
            <obc-input placeholder="Your email"></obc-input>
            <obc-tooltip content="Receive updates" position="top">
              <obc-button>Subscribe</obc-button>
            </obc-tooltip>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
