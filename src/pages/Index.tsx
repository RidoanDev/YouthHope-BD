import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialSection from '../components/TestimonialSection';
import CallToAction from '../components/CallToAction';

const Index = () => {
  return (
    <Layout>
      {/* HeroSection এর পরিবর্তে সরাসরি ভিডিও */}
      <div className="relative w-full h-screen overflow-hidden">
        <iframe 
          src="https://streamable.com/e/mm5pwj?autoplay=1&muted=1&loop=1" 
          frameBorder="0" 
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full object-cover"
          allow="autoplay"
        ></iframe>
      </div>
      
      <StatsSection />
      <ServicesSection />
      <TestimonialSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;
