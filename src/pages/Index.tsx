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
      
      {/* ভিডিও সেকশন - Hero Section এর নিচে */}
      <div className="w-full my-8 lg:my-12">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <video 
              autoPlay 
              loop 
              muted={false} 
              controls={false}
              className="w-full h-auto"
            >
              {/* Streamable ভিডিওর direct MP4 লিঙ্ক ব্যবহার করুন */}
              <source src="https://streamable.com/mm5pwj" type="video/mp4" />
              আপনার ব্রাউজার ভিডিও সাপোর্ট করে না
            </video>
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
