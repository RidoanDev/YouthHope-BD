
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
      <StatsSection />
      <ServicesSection />
      <TestimonialSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;
