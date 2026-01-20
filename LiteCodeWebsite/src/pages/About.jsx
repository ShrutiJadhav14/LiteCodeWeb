import React from 'react'
import AboutSection from '../components/AboutSection';
import VissionMission from '../components/VissionMission';
import ClientsSection from '../components/ClientsSection';
import StatsSection from '../components/StatsSection';
import WhatsAppFloat from '../components/WhatsAppFloat';

const About = () => {
  return (
        <main className="pt-24">
            <AboutSection />
            <VissionMission />
            <ClientsSection />
            <StatsSection />
            <WhatsAppFloat />
    </main>
  )
}

export default About;