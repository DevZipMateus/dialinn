
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedCollection from '../components/FeaturedCollection';
import Lookbook from '../components/Lookbook';
import AboutBrand from '../components/AboutBrand';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-urban-black">
      <Header />
      <HeroSection />
      <FeaturedCollection />
      <Lookbook />
      <AboutBrand />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
