
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Brain, Heart, Users, ThumbsUp, Calendar, Shield } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const resources = [
  {
    title: "স্ট্রেস ম্যানেজমেন্ট",
    description: "দৈনন্দিন চাপ এবং স্ট্রেস মোকাবেলার উপায় সম্পর্কে জানুন।",
    icon: Brain
  },
  {
    title: "মানসিক সুস্থতা",
    description: "মানসিক সুস্থতা বজায় রাখার জন্য প্রয়োজনীয় টিপস এবং কৌশল।",
    icon: Heart
  },
  {
    title: "সামাজিক সম্পর্ক",
    description: "স্বাস্থ্যকর সামাজিক সম্পর্ক এবং যোগাযোগ বজায় রাখার উপায়।",
    icon: Users
  },
  {
    title: "আত্মবিশ্বাস বৃদ্ধি",
    description: "আত্মবিশ্বাস বৃদ্ধি এবং আত্মসম্মান উন্নয়নের কৌশল।",
    icon: ThumbsUp
  },
  {
    title: "রুটিন মেনে চলা",
    description: "একটি সুষম জীবনযাপন এবং স্বাস্থ্যকর রুটিন তৈরি করার উপায়।",
    icon: Calendar
  },
  {
    title: "নিরাপত্তা বোধ",
    description: "মানসিক নিরাপত্তা এবং স্থিতিশীলতা অনুভব করার কৌশল।",
    icon: Shield
  }
];

const MentalHealth = () => {
  return (
    <Layout>
      <div className="bg-youth-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold gradient-text">মানসিক স্বাস্থ্য সাপোর্ট</h1>
          <p className="mt-4 text-lg text-youth-dark-gray max-w-3xl mx-auto">
            মানসিক স্বাস্থ্যের উন্নতি এবং সুস্থতা বজায় রাখতে আমাদের সাহায্য নিন
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-4 gradient-text">আমরা কী সাহায্য করি?</h2>
            <p className="text-youth-dark-gray mb-4">
              আমরা তরুণদের মানসিক স্বাস্থ্যের উন্নতি এবং সুস্থতা বজায় রাখতে বিভিন্ন সেবা প্রদান করি। আমাদের যোগ্য কাউন্সেলর এবং মনোবিজ্ঞানীরা আপনাকে যেকোন ধরনের মানসিক সমস্যা মোকাবেলা করতে সাহায্য করবেন।
            </p>
            <p className="text-youth-dark-gray">
              আমাদের লক্ষ্য হল তরুণদের মাঝে মানসিক স্বাস্থ্য সচেতনতা বৃদ্ধি করা এবং তাদেরকে প্রয়োজনীয় সহায়তা প্রদান করা। আমরা বিশ্বাস করি যে মানসিক স্বাস্থ্য সম্পর্কে কথা বলা এবং সাহায্য চাওয়া কোন দুর্বলতা নয়।
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&q=80" 
              alt="মানসিক স্বাস্থ্য সাপোর্ট" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 gradient-text">মানসিক স্বাস্থ্য রিসোর্স</h2>
          <p className="text-youth-dark-gray max-w-2xl mx-auto">
            আপনার মানসিক স্বাস্থ্যের যত্ন নিতে সাহায্য করবে এমন বিভিন্ন রিসোর্স এখানে পাবেন।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 card-hover transition-all">
              <div className="h-12 w-12 text-youth-purple mb-4 flex items-center justify-center bg-youth-purple/10 rounded-lg">
                <resource.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-youth-dark-gray mb-4">{resource.description}</p>
              <Link to={`/mental-health/${resource.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-youth-purple hover:text-youth-green font-medium flex items-center">
                আরো জানুন
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-white p-8 rounded-lg shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">আপনি কি কাউন্সেলিং সেশন নিতে চান?</h2>
            <p className="text-youth-dark-gray max-w-2xl mx-auto">
              আমাদের যোগ্য কাউন্সেলরদের সাথে ব্যক্তিগত বা গ্রুপ সেশনের জন্য রেজিস্ট্রেশন করুন।
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-youth-soft-green p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">ব্যক্তিগত কাউন্সেলিং</h3>
              <ul className="list-disc list-inside mb-4 text-youth-dark-gray">
                <li>একজন কাউন্সেলরের সাথে ব্যক্তিগত সেশন</li>
                <li>সম্পূর্ণ গোপনীয়তা নিশ্চিত</li>
                <li>অনলাইন বা সশরীরে সেশনের সুযোগ</li>
                <li>ব্যক্তিগত চাহিদা অনুযায়ী পরামর্শ</li>
              </ul>
              <Button className="bg-youth-purple hover:bg-youth-purple/90 w-full">
                রেজিস্ট্রেশন করুন
              </Button>
            </div>
            
            <div className="bg-youth-soft-green p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">গ্রুপ সাপোর্ট সেশন</h3>
              <ul className="list-disc list-inside mb-4 text-youth-dark-gray">
                <li>সমান চ্যালেঞ্জ সম্মুখীন অন্যদের সাথে সেশন</li>
                <li>অভিজ্ঞতা শেয়ার করার সুযোগ</li>
                <li>সাপোর্টিভ কমিউনিটি</li>
                <li>কম খরচে কাউন্সেলিং সেবা</li>
              </ul>
              <Button className="bg-youth-purple hover:bg-youth-purple/90 w-full">
                গ্রুপে যোগ দিন
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">জরুরি হেল্পলাইন</h2>
          <p className="text-center text-youth-dark-gray mb-8">
            জরুরি প্রয়োজনে নিম্নলিখিত হেল্পলাইন নম্বরে যোগাযোগ করুন।
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-youth-purple/20 p-4 rounded-lg text-center">
              <h3 className="font-bold mb-2">ন্যাশনাল মেন্টাল হেলথ হেল্পলাইন</h3>
              <p className="text-xl text-youth-purple">১৬১২৩</p>
              <p className="text-sm text-gray-500">২৪/৭ সেবা</p>
            </div>
            <div className="border border-youth-purple/20 p-4 rounded-lg text-center">
              <h3 className="font-bold mb-2">ইয়ুথ হোপ হেল্পলাইন</h3>
              <p className="text-xl text-youth-purple">০১৭০০-০০০০০০</p>
              <p className="text-sm text-gray-500">সকাল ৯টা - রাত ৯টা</p>
            </div>
            <div className="border border-youth-purple/20 p-4 rounded-lg text-center">
              <h3 className="font-bold mb-2">ক্রাইসিস হেল্পলাইন</h3>
              <p className="text-xl text-youth-purple">০১৮০০-০০০০০০</p>
              <p className="text-sm text-gray-500">২৪/৭ সেবা</p>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </Layout>
  );
};

export default MentalHealth;
