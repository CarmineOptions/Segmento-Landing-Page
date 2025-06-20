import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhereWeHelpSection } from './components/WhereWeHelpSection';
import { SolutionSection } from './components/SolutionSection';
import { HowWeHelpSection } from './components/HowWeHelpSection';
import { ExamplesSection } from './components/ExamplesSection';
import { TeamSection } from './components/TeamSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <WhereWeHelpSection />
        <SolutionSection />
        <HowWeHelpSection />
        <ExamplesSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>;
}