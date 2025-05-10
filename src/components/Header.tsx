import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-youth-purple">
                YouthHope
              </span>
              <span className="text-2xl font-bold text-youth-green">BD</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-youth-dark-gray hover:text-youth-purple font-medium"
            >
              হোমপেজ
            </Link>
            <Link
              to="/about"
              className="text-youth-dark-gray hover:text-youth-purple font-medium"
            >
              আমাদের সম্পর্কে
            </Link>
            <Link
              to="/blog"
              className="text-youth-dark-gray hover:text-youth-purple font-medium"
            >
              ব্লগ
            </Link>
            <Link
              to="/career"
              className="text-youth-dark-gray hover:text-youth-purple font-medium"
            >
              ক্যারিয়ার
            </Link>
            <Link
              to="/mental-health"
              className="text-youth-dark-gray hover:text-youth-purple font-medium"
            >
              মানসিক স্বাস্থ্য
            </Link>
            <Link
              to="/contact"
              className="text-youth-dark-gray hover:text-youth-purple font-medium"
            >
              যোগাযোগ
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Link to="/donate" className="button-primary">
              ডোনেট করুন
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-youth-dark-gray hover:text-youth-purple focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-youth-dark-gray hover:bg-youth-gray hover:text-youth-purple"
              onClick={toggleMenu}
            >
              হোমপেজ
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-youth-dark-gray hover:bg-youth-gray hover:text-youth-purple"
              onClick={toggleMenu}
            >
              আমাদের সম্পর্কে
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-youth-dark-gray hover:bg-youth-gray hover:text-youth-purple"
              onClick={toggleMenu}
            >
              ব্লগ
            </Link>
            <Link
              to="/career"
              className="block px-3 py-2 rounded-md text-base font-medium text-youth-dark-gray hover:bg-youth-gray hover:text-youth-purple"
              onClick={toggleMenu}
            >
              ক্যারিয়ার
            </Link>
            <Link
              to="/mental-health"
              className="block px-3 py-2 rounded-md text-base font-medium text-youth-dark-gray hover:bg-youth-gray hover:text-youth-purple"
              onClick={toggleMenu}
            >
              মানসিক স্বাস্থ্য
            </Link>
            <Link
              to="/events"
              className="block px-3 py-2 rounded-md text-base font-medium text-youth-dark-gray hover:bg-youth-gray hover:text-youth-purple"
              onClick={toggleMenu}
            >
              ইভেন্টস
            </Link>
            <Link
              to="/community"
              className="block px-3 py-2 rounded-md text-base font-medium text-youth-dark-gray hover:bg-youth-gray hover:text-youth-purple"
              onClick={toggleMenu}
            >
              কমিউনিটি
            </Link>
            <Link
              to="/resources"
              className="block px-3 py-2 rounded-md text-base font-medium text-youth-dark-gray hover:bg-youth-gray hover:text-youth-purple"
              onClick={toggleMenu}
            >
              রিসোর্স
            </Link>
            <Link
              to="/success-stories"
              className="block px-3 py-2 rounded-md text-base font-medium text-youth-dark-gray hover:bg-youth-gray hover:text-youth-purple"
              onClick={toggleMenu}
            >
              সাকসেস স্টোরিজ
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-youth-dark-gray hover:bg-youth-gray hover:text-youth-purple"
              onClick={toggleMenu}
            >
              যোগাযোগ
            </Link>
            <Link
              to="/donate"
              className="block px-3 py-2 rounded-md text-base font-medium text-youth-dark-gray hover:bg-youth-gray hover:text-youth-purple"
              onClick={toggleMenu}
            >
              ডোনেট
            </Link>
            <Link
              to="/gallery"
              className="block px-3 py-2 rounded-md text-base font-medium text-youth-dark-gray hover:bg-youth-gray hover:text-youth-purple"
              onClick={toggleMenu}
            >
              গ্যালারি
            </Link>
            <Link
              to="/faq"
              className="block px-3 py-2 rounded-md text-base font-medium text-youth-dark-gray hover:bg-youth-gray hover:text-youth-purple"
              onClick={toggleMenu}
            >
              এফএকিউ
            </Link>
            <Link
              to="/volunteer"
              className="block px-3 py-2 rounded-md text-base font-medium text-youth-dark-gray hover:bg-youth-gray hover:text-youth-purple"
              onClick={toggleMenu}
            >
              ভলান্টিয়ার
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
