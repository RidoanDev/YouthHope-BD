
import { useState } from 'react';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import CallToAction from '../components/CallToAction';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const faqItems: FaqItem[] = [
  {
    question: "ইয়ুথ হোপ বাংলাদেশ কী?",
    answer: "ইয়ুথ হোপ বাংলাদেশ হলো একটি অলাভজনক সংস্থা যা বাংলাদেশের তরুণদের উন্নয়নের জন্য কাজ করে। আমরা তরুণদের ক্যারিয়ার গাইডেন্স, মানসিক স্বাস্থ্য সমর্থন, লিডারশিপ ডেভেলপমেন্ট এবং কমিউনিটি বিল্ডিং সহ বিভিন্ন কার্যক্রমের মাধ্যমে তরুণদের সাহায্য করি।",
    category: "সাধারণ"
  },
  {
    question: "কীভাবে ইয়ুথ হোপ বাংলাদেশের সদস্য হতে পারি?",
    answer: "আমাদের ওয়েবসাইটের 'কমিউনিটি' পেজে গিয়ে আপনি ইয়ুথ হোপ বাংলাদেশের কমিউনিটিতে যোগ দিতে পারেন। যোগ দেওয়ার জন্য একটি ফর্ম পূরণ করতে হবে এবং আমরা আপনার সাথে যোগাযোগ করব।",
    category: "সদস্যতা"
  },
  {
    question: "ইয়ুথ হোপ বাংলাদেশে স্বেচ্ছাসেবক হিসেবে কীভাবে যোগ দিতে পারি?",
    answer: "আমাদের 'ভলান্টিয়ার' পেজে গিয়ে আপনি আমাদের স্বেচ্ছাসেবক প্রোগ্রামে আবেদন করতে পারেন। আমরা আপনার দক্ষতা এবং আগ্রহের উপর ভিত্তি করে আপনাকে একটি স্বেচ্ছাসেবক দল বরাদ্দ করব।",
    category: "স্বেচ্ছাসেবা"
  },
  {
    question: "ইয়ুথ হোপ বাংলাদেশ কি বিনামূল্যে ক্যারিয়ার কাউন্সেলিং সেবা প্রদান করে?",
    answer: "হ্যাঁ, আমরা বাংলাদেশের তরুণদের জন্য বিনামূল্যে ক্যারিয়ার কাউন্সেলিং সেবা প্রদান করি। আমাদের 'ক্যারিয়ার' পেজে গিয়ে আপনি ক্যারিয়ার কাউন্সেলিং সেশনের জন্য আবেদন করতে পারেন।",
    category: "ক্যারিয়ার"
  },
  {
    question: "ইয়ুথ হোপ বাংলাদেশ কি মানসিক স্বাস্থ্য বিষয়ক কাউন্সেলিং সেবা প্রদান করে?",
    answer: "হ্যাঁ, আমরা তরুণদের জন্য মানসিক স্বাস্থ্য বিষয়ক কাউন্সেলিং সেবা প্রদান করি। আমাদের যোগ্য মনোবিজ্ঞানী এবং কাউন্সেলররা তরুণদের বিভিন্ন মানসিক সমস্যা মোকাবেলায় সাহায্য করেন। 'মানসিক স্বাস্থ্য' পেজে গিয়ে আপনি বিস্তারিত জানতে পারবেন।",
    category: "মানসিক স্বাস্থ্য"
  },
  {
    question: "কীভাবে ইয়ুথ হোপ বাংলাদেশের ইভেন্টগুলোতে অংশগ্রহণ করতে পারি?",
    answer: "আমাদের 'ইভেন্টস' পেজে গিয়ে আপনি আসন্ন ইভেন্টগুলি দেখতে পারবেন এবং সেগুলিতে রেজিস্ট্রেশন করতে পারবেন। আমরা নিয়মিতভাবে ওয়ার্কশপ, সেমিনার এবং ট্রেনিং সেশন আয়োজন করে থাকি।",
    category: "ইভেন্টস"
  },
  {
    question: "আমি কি ইয়ুথ হোপ বাংলাদেশকে আর্থিক সাহায্য করতে পারি?",
    answer: "হ্যাঁ, আপনি আমাদের 'ডোনেট' পেজে গিয়ে ইয়ুথ হোপ বাংলাদেশকে আর্থিক সাহায্য করতে পারেন। আপনার অনুদান আমাদের তরুণদের জন্য আরও বেশি কার্যক্রম পরিচালনা করতে সাহায্য করবে।",
    category: "অনুদান"
  },
  {
    question: "আমি কিভাবে ইয়ুথ হোপ বাংলাদেশের সাথে যোগাযোগ করতে পারি?",
    answer: "আমাদের 'যোগাযোগ' পেজে গিয়ে আপনি আমাদের সাথে যোগাযোগ করতে পারেন। আপনি ইমেইল বা ফোন নম্বরের মাধ্যমেও আমাদের সাথে যোগাযোগ করতে পারেন।",
    category: "যোগাযোগ"
  },
  {
    question: "ইয়ুথ হোপ বাংলাদেশ কি অনলাইন কোর্স প্রদান করে?",
    answer: "হ্যাঁ, আমরা বিভিন্ন বিষয়ে অনলাইন কোর্স প্রদান করি। আমাদের 'রিসোর্স' পেজে গিয়ে আপনি আমাদের অনলাইন কোর্সগুলি দেখতে পারবেন।",
    category: "রিসোর্স"
  },
  {
    question: "ইয়ুথ হোপ বাংলাদেশ কোন কোন বিষয়ে ওয়ার্কশপ আয়োজন করে?",
    answer: "আমরা ক্যারিয়ার ডেভেলপমেন্ট, লিডারশিপ, কমিউনিকেশন স্কিলস, মানসিক স্বাস্থ্য, আর্থিক সাক্ষরতা, উদ্যোক্তা ডেভেলপমেন্ট, ডিজিটাল মার্কেটিং সহ বিভিন্ন বিষয়ে ওয়ার্কশপ আয়োজন করি।",
    category: "ইভেন্টস"
  },
  {
    question: "ইয়ুথ হোপ বাংলাদেশের মেন্টরশিপ প্রোগ্রাম কি?",
    answer: "আমাদের মেন্টরশিপ প্রোগ্রাম তরুণদেরকে বিভিন্ন ক্ষেত্রের অভিজ্ঞ পেশাজীবীদের সাথে সংযুক্ত করে। মেন্টররা তরুণদের ক্যারিয়ার গাইডেন্স, স্কিল ডেভেলপমেন্ট, নেটওয়ার্কিং এবং ব্যক্তিগত উন্নয়নে সাহায্য করে থাকেন।",
    category: "মেন্টরশিপ"
  },
  {
    question: "আমি কিভাবে ইয়ুথ হোপ বাংলাদেশের মেন্টর হতে পারি?",
    answer: "আমাদের 'মেন্টর' পেজে গিয়ে আপনি মেন্টর হিসেবে আবেদন করতে পারেন। আমরা আপনার অভিজ্ঞতা এবং দক্ষতার উপর ভিত্তি করে আপনাকে মেন্টর হিসেবে নিয়োগ করব।",
    category: "মেন্টরশিপ"
  }
];

const categories = [
  "সকল", "সাধারণ", "সদস্যতা", "স্বেচ্ছাসেবা", "ক্যারিয়ার", 
  "মানসিক স্বাস্থ্য", "ইভেন্টস", "অনুদান", "যোগাযোগ", "রিসোর্স", "মেন্টরশিপ"
];

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState("সকল");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const filteredFaqs = faqItems.filter(item => {
    const matchesCategory = activeCategory === "সকল" || item.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
                         item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="bg-youth-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold gradient-text">সাধারণ জিজ্ঞাসা</h1>
          <p className="mt-4 text-lg text-youth-dark-gray max-w-3xl mx-auto">
            ইয়ুথ হোপ বাংলাদেশ সম্পর্কে সাধারণ প্রশ্ন এবং উত্তর
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="প্রশ্ন সার্চ করুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-youth-purple"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h2 className="text-xl font-bold mb-4">ক্যাটাগরি</h2>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={`block w-full text-left py-2 px-4 rounded-md transition-colors ${
                      activeCategory === category 
                        ? 'bg-youth-purple text-white' 
                        : 'hover:bg-youth-gray'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm divide-y">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((item, index) => (
                  <div key={index} className="p-6">
                    <button
                      onClick={() => toggleItem(index)}
                      className="flex justify-between items-center w-full text-left"
                    >
                      <h3 className="text-lg font-semibold">{item.question}</h3>
                      {openItems.includes(index) ? (
                        <ChevronUp className="h-5 w-5 text-youth-purple" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-youth-purple" />
                      )}
                    </button>
                    {openItems.includes(index) && (
                      <div className="mt-4 text-youth-dark-gray">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="p-8 text-center">
                  <p className="text-youth-dark-gray">কোন প্রশ্ন পাওয়া যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।</p>
                </div>
              )}
            </div>

            <div className="mt-8 bg-youth-soft-green p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">আপনার প্রশ্ন খুঁজে পাননি?</h3>
              <p className="mb-4 text-youth-dark-gray">
                আমাদের যোগাযোগ পেজের মাধ্যমে আমাদের সাথে যোগাযোগ করুন। আমরা আপনার প্রশ্নের উত্তর দিতে সবসময় প্রস্তুত।
              </p>
              <Button className="bg-youth-purple hover:bg-youth-purple/90">
                যোগাযোগ করুন
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </Layout>
  );
};

export default Faq;
