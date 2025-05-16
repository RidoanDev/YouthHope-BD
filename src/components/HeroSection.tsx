import { Link } from 'react-router-dom';

const HeroSection = () => {
  // Array of online humanitarian/helping images
  const backgroundImages = [
    'https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ];

  return (
    <section className="hero-section relative h-screen flex items-center justify-center">
      {/* Background slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className="absolute inset-0 bg-cover bg-center opacity-0"
            style={{
              backgroundImage: `url(${image})`,
              animation: `fadeInOut ${backgroundImages.length * 3}s infinite`,
animationDelay: `${index * 3}s`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="hero-content text-center text-white relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Youth Hope Bangladesh</h1>
        <p className="text-xl md:text-2xl mb-8">আমরা তরুণদের ভবিষ্যৎ গড়ি</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/about" className="button-primary bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            আমাদের সম্পর্কে জানুন
          </Link>
          <Link to="/donate" className="button-secondary bg-transparent hover:bg-white hover:text-black text-white font-bold py-3 px-6 border-2 border-white rounded-lg transition duration-300">
            আমাদের সাপোর্ট করুন
          </Link>
        </div>
      </div>

      {/* Add this style tag for the animation */}
      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0; }
          10% { opacity: 1; }
          20% { opacity: 1; }
          30% { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
