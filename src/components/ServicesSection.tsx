
import { Link } from 'react-router-dom';
import { Book, Briefcase, Heart, Calendar, Users, Trophy } from 'lucide-react';

const services = [
  {
    title: 'ক্যারিয়ার গাইডেন্স',
    description: 'ক্যারিয়ার পরিকল্পনা, স্কিল ডেভেলপমেন্ট এবং জব প্লেসমেন্ট সাহায্য।',
    icon: Briefcase,
    link: '/career'
  },
  {
    title: 'মানসিক স্বাস্থ্য',
    description: 'কাউন্সেলিং, মেন্টাল হেলথ সাপোর্ট এবং সাইকোলজিক্যাল সেবা।',
    icon: Heart,
    link: '/mental-health'
  },
  {
    title: 'ইভেন্টস ও ওয়ার্কশপ',
    description: 'দক্ষতা উন্নয়ন এবং পেশাদারীত্ব বিকাশে ওয়ার্কশপ ও ট্রেনিং।',
    icon: Calendar,
    link: '/events'
  },
  {
    title: 'কমিউনিটি ফোরাম',
    description: 'তরুণদের মধ্যে সংযোগ স্থাপন এবং সহযোগিতার প্ল্যাটফর্ম।',
    icon: Users,
    link: '/community'
  },
  {
    title: 'ফ্রি রিসোর্স',
    description: 'পড়াশোনা এবং স্কিল ডেভেলপমেন্টের জন্য বিনামূল্যে রিসোর্স।',
    icon: Book,
    link: '/resources'
  },
  {
    title: 'সাকসেস স্টোরি',
    description: 'আমাদের সাহায্যে সফল হওয়া তরুণদের অনুপ্রেরণামূলক গল্প।',
    icon: Trophy,
    link: '/success-stories'
  }
];

const ServicesSection = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3 gradient-text">আমাদের সেবাসমূহ</h2>
        <p className="text-youth-dark-gray max-w-2xl mx-auto">আমরা বাংলাদেশের তরুণদের জন্য বিভিন্ন ধরনের সেবা প্রদান করি, যা তাদের ব্যক্তিগত এবং পেশাগত বিকাশে সাহায্য করে।</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 card-hover transition-all">
            <div className="h-12 w-12 text-youth-purple mb-4 flex items-center justify-center bg-youth-purple/10 rounded-lg">
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-youth-dark-gray mb-4">{service.description}</p>
            <Link to={service.link} className="text-youth-purple hover:text-youth-green font-medium flex items-center">
              আরো জানুন
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
