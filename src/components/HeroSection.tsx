import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  // স্লাইড ডেটা অ্যারে
  const slides = [
    {
      id: 1,
      title: "Youth Hope Bangladesh",
      subtitle: "আমরা তরুণদের ভবিষ্যৎ গড়ি",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      button1Text: "আমাদের সম্পর্কে জানুন",
      button1Link: "/about",
      button2Text: "সাপোর্ট করুন",
      button2Link: "/donate"
    },
    {
      id: 2,
      title: "স্বাস্থ্য সেবা",
      subtitle: "ফ্রি মেডিকেল ক্যাম্প",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      button1Text: "ক্যাম্প শিডিউল",
      button1Link: "/health",
      button2Text: "ডোনেট",
      button2Link: "/donate"
    },
    {
      id: 3,
      title: "দুর্যোগ সহায়তা",
      subtitle: "ত্রাণ বিতরণ কার্যক্রম",
      image: "https://images.unsplash.com/photo-1580202301507-72b836f3d39e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      button1Text: "সহযোগিতা করুন",
      button1Link: "/relief",
      button2Text: "ভলান্টিয়ার",
      button2Link: "/volunteer"
    },
    {
      id: 4,
      title: "নারী ক্ষমতায়ন",
      subtitle: "সেলাই প্রশিক্ষণ কেন্দ্র",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      button1Text: "জয়েন করুন",
      button1Link: "/women",
      button2Text: "স্পন্সর করুন",
      button2Link: "/sponsor"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // অটো-স্লাইড লজিক
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* স্লাইড শো */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white px-4 animate-fade-in">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      to={slide.button1Link}
                      className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition"
                    >
                      {slide.button1Text}
                    </Link>
                    <Link
                      to={slide.button2Link}
                      className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition"
                    >
                      {slide.button2Text}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ডট নেভিগেশন */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
