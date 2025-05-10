
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Video, FileText, Folder, Search } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const resourceCategories = [
  {
    title: "ই-বুক",
    icon: BookOpen,
    count: 45,
    link: "/resources/ebooks"
  },
  {
    title: "পিডিএফ গাইড",
    icon: FileText,
    count: 32,
    link: "/resources/guides"
  },
  {
    title: "ভিডিও টিউটোরিয়াল",
    icon: Video,
    count: 76,
    link: "/resources/videos"
  },
  {
    title: "টেমপ্লেট",
    icon: Folder,
    count: 28,
    link: "/resources/templates"
  }
];

const featuredResources = [
  {
    title: "ফ্রিল্যান্সিং শুরু করার কমপ্লিট গাইড",
    type: "ই-বুক",
    description: "ফ্রিল্যান্সিং শুরু করার জন্য প্রয়োজনীয় সকল তথ্য এই ই-বুকে পাবেন।",
    downloadCount: 1245,
    image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80"
  },
  {
    title: "মানসিক স্বাস্থ্য সুরক্ষার ১০টি কৌশল",
    type: "পিডিএফ গাইড",
    description: "মানসিক চাপ মোকাবেলা এবং মানসিক সুস্থতা বজায় রাখার কার্যকর কৌশল।",
    downloadCount: 987,
    image: "https://images.unsplash.com/photo-1565945887714-d5139f4eb0ce?auto=format&fit=crop&q=80"
  },
  {
    title: "ওয়েব ডেভেলপমেন্ট কোর্স",
    type: "ভিডিও সিরিজ",
    description: "HTML, CSS, JavaScript থেকে শুরু করে React, Node.js পর্যন্ত সম্পূর্ণ কোর্স।",
    downloadCount: 1876,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
  },
  {
    title: "রিজ্যুমে টেমপ্লেট প্যাক",
    type: "টেমপ্লেট",
    description: "বিভিন্ন ধরনের জব এপ্লিকেশনের জন্য প্রফেশনাল রিজ্যুমে টেমপ্লেট।",
    downloadCount: 2341,
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80"
  }
];

const Resources = () => {
  return (
    <Layout>
      <div className="bg-youth-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold gradient-text">ফ্রি রিসোর্স লাইব্রেরি</h1>
          <p className="mt-4 text-lg text-youth-dark-gray max-w-3xl mx-auto">
            আপনার জ্ঞান বাড়ানো এবং দক্ষতা উন্নয়নের জন্য বিভিন্ন ধরনের বিনামূল্যের রিসোর্স
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="রিসোর্স সার্চ করুন..."
                className="pl-12 pr-4 py-3 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-youth-purple"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-youth-purple hover:bg-youth-purple/90">
                সার্চ করুন
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 gradient-text">রিসোর্স ক্যাটাগরি</h2>
            <p className="text-youth-dark-gray max-w-2xl mx-auto">
              আপনার প্রয়োজন অনুযায়ী বিভিন্ন ধরনের রিসোর্স ব্রাউজ করুন
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceCategories.map((category, index) => (
              <Link to={category.link} key={index} className="bg-white rounded-lg shadow-sm p-6 card-hover transition-all flex flex-col items-center text-center">
                <div className="h-16 w-16 text-youth-purple mb-4 flex items-center justify-center bg-youth-purple/10 rounded-full">
                  <category.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-youth-dark-gray">{category.count}+ রিসোর্স</p>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 gradient-text">ফিচার্ড রিসোর্স</h2>
            <p className="text-youth-dark-gray max-w-2xl mx-auto">
              আমাদের জনপ্রিয় এবং বাছাইকৃত রিসোর্সসমূহ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden card-hover">
                <div className="h-40">
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="bg-youth-purple/10 text-youth-purple px-2.5 py-1 rounded-full text-sm">{resource.type}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                  <p className="text-youth-dark-gray text-sm mb-4">{resource.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{resource.downloadCount} ডাউনলোড</span>
                    <Button variant="outline" size="sm" className="flex items-center gap-1 border-youth-purple text-youth-purple hover:bg-youth-purple/10">
                      <Download className="h-4 w-4" />
                      ডাউনলোড
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-youth-purple hover:bg-youth-purple/90">
              সকল রিসোর্স দেখুন
            </Button>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 gradient-text">রিসোর্স ক্যাটাগরি অনুযায়ী</h2>
            <p className="text-youth-dark-gray max-w-2xl mx-auto">
              বিষয়ভিত্তিক রিসোর্স ব্রাউজ করুন
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {[
              "ক্যারিয়ার গাইডেন্স", 
              "স্কিল ডেভেলপমেন্ট", 
              "মানসিক স্বাস্থ্য", 
              "প্রোগ্রামিং", 
              "ডিজাইন", 
              "ডিজিটাল মার্কেটিং",
              "ফ্রিল্যান্সিং",
              "লিডারশিপ",
              "ভাষা শেখা",
              "ফিন্যান্সিয়াল লিটারেসি",
              "টাইম ম্যানেজমেন্ট",
              "ছাত্র জীবন"
            ].map((category, index) => (
              <div key={index} className="bg-white border border-youth-purple/20 rounded-md p-3 hover:bg-youth-soft-green hover:border-youth-purple cursor-pointer transition-colors text-center">
                <span className="font-medium">{category}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">নিজের রিসোর্স শেয়ার করুন</h2>
            <p className="text-youth-dark-gray max-w-2xl mx-auto">
              আপনার তৈরি করা রিসোর্স আমাদের কমিউনিটির সাথে শেয়ার করুন এবং অন্যদের শিক্ষায় সহায়তা করুন।
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <Button className="bg-youth-purple hover:bg-youth-purple/90 mb-4">
              রিসোর্স আপলোড করুন
            </Button>
            <p className="text-sm text-gray-500">
              * সকল আপলোডকৃত রিসোর্স মডারেশন প্রক্রিয়ার মাধ্যমে যাচাই করা হবে।
            </p>
          </div>
        </div>
      </div>

      <CallToAction />
    </Layout>
  );
};

export default Resources;
