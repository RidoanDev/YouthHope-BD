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
      {/* রেস্পন্সিভ ভিডিও সেকশন */}
      <div className="container mx-auto px-4 py-12">
        <div className="rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto bg-black">
          <div className="relative pb-[56.25%] h-0"> {/* 16:9 aspect ratio */}
            <iframe 
              src="https://www.youtube.com/embed/cKwXmNDWJHM?autoplay=0&rel=0" 
              frameBorder="0" 
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
              title="YouTube video player"
            ></iframe>
          </div>
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
