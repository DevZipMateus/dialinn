
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import GalleryHighlight from '../components/GalleryHighlight';
import TestimonialsSection from '../components/TestimonialsSection';
import LocationSection from '../components/LocationSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        <section id="sobre">
          <AboutSection />
        </section>
        <section id="servicos">
          <ServicesSection />
        </section>
        <section id="galeria-destaque">
          <GalleryHighlight />
        </section>
        <section id="depoimentos">
          <TestimonialsSection />
        </section>
        <section id="localizacao">
          <LocationSection />
        </section>
        <section id="contato">
          <ContactSection />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
