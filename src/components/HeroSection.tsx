import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  // স্লাইডার সেটিংস
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };

  // সব ছবির লিস্ট
  const slides = [
    {
      id: 1,
      bgImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Youth Hope Bangladesh',
      subtitle: 'আমরা তরুণদের ভবিষ্যৎ গড়ি',
    },
    {
      id: 2,
      bgImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'স্বাস্থ্য সেবা',
      subtitle: 'ফ্রি মেডিকেল ক্যাম্প ও চিকিৎসা সহায়তা',
    },
    {
      id: 3,
      bgImage: 'https://images.unsplash.com/photo-1580202301507-72b836f3d39e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'দুর্যোগ সহায়তা',
      subtitle: 'বন্যা ও ঘূর্ণিঝড়ে ত্রাণ বিতরণ',
    },
    {
      id: 4,
      bgImage: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'নারী ক্ষমতায়ন',
      subtitle: 'সেলাই ও হস্তশিল্প প্রশিক্ষণ',
    },
  ];

  return (
    <Slider {...settings} className="hero-slider">
      {slides.map((slide) => (
        <div 
          key={slide.id}
          className="hero-slide"
          style={{ 
            backgroundImage: `url(${slide.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80vh', // আপনার প্রয়োজন অনুযায়ী উচ্চতা调整
          }}
        >
          <div className="hero-content animate-fade-in text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/about" className="button-primary">
                আমাদের সম্পর্কে জানুন
              </Link>
              <Link to="/donate" className="button-secondary">
                আমাদের সাপোর্ট করুন
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSection;
