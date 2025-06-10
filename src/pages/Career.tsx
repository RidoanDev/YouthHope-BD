
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { CheckCircle, BookOpen, Users, Award, Briefcase, ChevronRight } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const careerPaths = [
  {
    title: "সফটওয়্যার ডেভেলপমেন্ট",
    description: "কম্পিউটার প্রোগ্রামিং, সফটওয়্যার ডিজাইন এবং ডেভেলপমেন্টের মাধ্যমে একটি দারুণ ক্যারিয়ার গড়ুন।",
    icon: "💻",
  },
  {
    title: "ডিজিটাল মার্কেটিং",
    description: "সোশ্যাল মিডিয়া, কনটেন্ট মার্কেটিং, এসইও এবং অনলাইন বিজ্ঞাপন এর উপর দক্ষতা অর্জন করুন।",
    icon: "📱",
  },
  {
    title: "গ্রাফিক ডিজাইন",
    description: "আপনার সৃজনশীলতা কাজে লাগিয়ে ভিজ্যুয়াল কনটেন্ট এবং ডিজাইন তৈরি করার দক্ষতা অর্জন করুন।",
    icon: "🎨",
  },
  {
    title: "বিজনেস ম্যানেজমেন্ট",
    description: "বিজনেস অপারেশন, ম্যানেজমেন্ট এবং লিডারশিপে দক্ষতা অর্জন করুন।",
    icon: "📊",
  },
  {
    title: "মেডিক্যাল প্রফেশন",
    description: "চিকিৎসা সেবার বিভিন্ন ক্ষেত্রে ক্যারিয়ার গড়ার জন্য প্রয়োজনীয় গাইডেন্স এবং প্রস্তুতি।",
    icon: "🏥",
  },
  {
    title: "ফ্রিল্যান্সিং",
    description: "স্বাধীনভাবে কাজ করে আয় করতে চান? ফ্রিল্যান্সিং সম্পর্কে জানুন।",
    icon: "🔄",
  },
];

const careerServices = [
  {
    title: "ক্যারিয়ার কাউন্সেলিং",
    description: "বিশেষজ্ঞদের সাহায্যে আপনার সঠিক ক্যারিয়ার পথ খুঁজে বের করুন।",
    icon: CheckCircle
  },
  {
    title: "স্কিল ডেভেলপমেন্ট",
    description: "ক্যারিয়ার উন্নতির জন্য প্রয়োজনীয় দক্ষতা অর্জন করুন।",
    icon: BookOpen
  },
  {
    title: "নেটওয়ার্কিং",
    description: "পেশাদারদের সাথে সংযোগ স্থাপন করে আপনার ক্যারিয়ার সম্ভাবনা বাড়ান।",
    icon: Users
  },
  {
    title: "সার্টিফিকেশন কোর্স",
    description: "আন্তর্জাতিক মানের সার্টিফিকেশন কোর্স করে যোগ্যতা বাড়ান।",
    icon: Award
  },
  {
    title: "জব প্লেসমেন্ট",
    description: "আমাদের কর্পোরেট পার্টনারদের মাধ্যমে চাকরির সুযোগ পান।",
    icon: Briefcase
  }
];

const Career = () => {
  return (
    <Layout>
      <div className="bg-youth-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold gradient-text">ক্যারিয়ার হাব</h1>
          <p className="mt-4 text-lg text-youth-dark-gray max-w-3xl mx-auto">
            আপনার ভবিষ্যৎ ক্যারিয়ার গড়তে প্রয়োজনীয় গাইডলাইন এবং সাপোর্ট পান
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 gradient-text">ক্যারিয়ার পাথওয়ে</h2>
          <p className="text-youth-dark-gray max-w-2xl mx-auto">
            বিভিন্ন ক্যারিয়ার পাথওয়ে সম্পর্কে জানুন এবং আপনার জন্য সবচেয়ে উপযুক্ত পথ বেছে নিন।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerPaths.map((path, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 card-hover transition-all">
              <div className="text-4xl mb-4">{path.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
              <p className="text-youth-dark-gray mb-4">{path.description}</p>
              <Link to={`/career/${path.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-youth-purple hover:text-youth-green font-medium flex items-center">
                আরো জানুন
                <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 gradient-text">আমাদের ক্যারিয়ার সেবাসমূহ</h2>
            <p className="text-youth-dark-gray max-w-2xl mx-auto">
              আমরা তরুণদের ক্যারিয়ার গঠনে সাহায্য করতে বিভিন্ন সেবা প্রদান করি।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 flex items-start gap-4">
                <div className="h-12 w-12 text-youth-purple flex items-center justify-center bg-youth-purple/10 rounded-lg flex-shrink-0">
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-youth-dark-gray">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-youth-soft-green p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">ক্যারিয়ার কাউন্সেলিং সেশন বুক করুন</h3>
              <p className="text-youth-dark-gray">
                আমাদের বিশেষজ্ঞ ক্যারিয়ার কাউন্সেলরদের সাথে একটি ব্যক্তিগত সেশন নিন এবং আপনার ক্যারিয়ার সম্পর্কে প্রয়োজনীয় পরামর্শ পান।
              </p>
            </div>
            <Button className="bg-youth-purple hover:bg-youth-purple/90 text-white px-6 py-2 text-lg">
              সেশন বুক করুন
            </Button>
          </div>
        </div>
      </div>

      <CallToAction />
    </Layout>
  );
};

export default Career;
