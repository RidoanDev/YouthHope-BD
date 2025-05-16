import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="hero-section"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="hero-content animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Youth Hope Bangladesh</h1>
        <p className="text-xl md:text-2xl mb-8">আমরা তরুণদের ভবিষ্যৎ গড়ি</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/about" className="button-primary">
            আমাদের সম্পর্কে জানুন
          </Link>
          <Link to="/donate" className="button-secondary">
            আমাদের সাপোর্ট করুন
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
