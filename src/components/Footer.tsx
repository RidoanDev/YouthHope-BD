import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-youth-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Youth Hope</h3>
            <p className="mb-4">
              আমরা বাংলাদেশের তরুণদের জন্য কাজ করি, তাদের শিক্ষা, মানসিক
              স্বাস্থ্য এবং ক্যারিয়ার বিকাশে সাহায্য করি।
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/YouthHopeBD"
                className="text-white hover:text-youth-green"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://wa.me/01886959350"
                className="text-white hover:text-youth-green"
              >
                <span className="sr-only">WhatsApp</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">কুইক লিংক</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-youth-green">
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-youth-green">
                  ব্লগ
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-youth-green">
                  ক্যারিয়ার গাইডেন্স
                </Link>
              </li>
              <li>
                <Link to="/mental-health" className="hover:text-youth-green">
                  মানসিক স্বাস্থ্য
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-youth-green">
                  ইভেন্টস ও ওয়ার্কশপ
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-youth-green">
                  কমিউনিটি ফোরাম
                </Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-youth-green">
                  ডোনেশন
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">সাপোর্ট</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="hover:text-youth-green">
                  সাধারণ প্রশ্নোত্তর
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-youth-green">
                  রিসোর্স লাইব্রেরি
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="hover:text-youth-green">
                  সাকসেস স্টোরিজ
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="hover:text-youth-green">
                  ভলান্টিয়ার প্রোগ্রাম
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-youth-green">
                  ফটো গ্যালারি
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-youth-green">
                  যোগাযোগ করুন
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">যোগাযোগ</h3>
            <address className="not-italic">
              <p className="mb-2">বগুড়া, বাংলাদেশ</p>
              <p className="mb-2">ইমেইল: youthhopebangladesh@gmail.com</p>
              <p className="mb-2">ফোন: +8801886959350</p>
            </address>
          </div>
        </div>

       <div className="mt-8 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between">
  <p>
    © {new Date().getFullYear()} Youth Hope Bangladesh। সর্বস্বত্ব
    সংরক্ষিত।
  </p>
  <div className="mt-4 md:mt-0">
    <Link
      to="https://drive.google.com/file/d/13Y1FHoH6dLubatSBdT7bkQObf2Hcjmue/view"
      className="hover:text-youth-green"
      target="_blank"
      rel="noopener noreferrer"
    >
      নিয়ম ও শর্তাবলী
    </Link>
  </div>
</div>
</div>
</footer>
);
};

export default Footer;
