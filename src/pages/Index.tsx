import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialSection from '../components/TestimonialSection';
import CallToAction from '../components/CallToAction';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      {/* ভিডিও সেকশন */}
      <div className="container mx-auto px-4 py-12">
        <div className="rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
          <iframe 
            src="https://streamable.com/e/mm5pwj?autoplay=1&loop=1&muted=0" 
            frameBorder="0" 
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-full aspect-video"
          ></iframe>
        </div>
      </div>
      <StatsSection />
      <ServicesSection />
      <TestimonialSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;
