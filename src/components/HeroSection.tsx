import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const images = [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1580202301507-72b836f3d39e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="hero-section"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
        height: '100vh',
      }}
    >
      <div className="hero-content animate-fade-in">
        {/* কন্টেন্ট একই থাকবে */}
      </div>
    </section>
  );
};
