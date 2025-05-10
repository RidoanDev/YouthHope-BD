
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { ChevronRight, Quote, MessageCircle, Share2 } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const featuredStories = [
  {
    id: 1,
    name: "রাহিম আহমেদ",
    title: "সফটওয়্যার ডেভেলপার থেকে টেক কোম্পানি প্রতিষ্ঠাতা",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    excerpt: "ইয়ুথ হোপের প্রোগ্রামিং বুটক্যাম্প থেকে শুরু করে নিজের টেক স্টার্টআপ প্রতিষ্ঠা করার গল্প।",
    category: "ক্যারিয়ার",
    tags: ["প্রোগ্রামিং", "স্টার্টআপ", "সফটওয়্যার ডেভেলপমেন্ট"]
  },
  {
    id: 2,
    name: "সাবরিনা খান",
    title: "ডিপ্রেশন থেকে জীবনে ফিরে আসার গল্প",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    excerpt: "ইয়ুথ হোপের মানসিক স্বাস্থ্য প্রোগ্রাম কিভাবে সাবরিনাকে ডিপ্রেশন থেকে বের হতে সাহায্য করেছে।",
    category: "মানসিক স্বাস্থ্য",
    tags: ["ডিপ্রেশন", "মেন্টাল হেলথ", "রিকভারি"]
  },
  {
    id: 3,
    name: "কামাল হোসেন",
    title: "ফ্রিল্যান্সিং থেকে আন্তর্জাতিক কোম্পানি",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    excerpt: "ইয়ুথ হোপের ফ্রিল্যান্সিং প্রোগ্রাম থেকে শিখে কিভাবে আন্তর্জাতিক মানের সার্ভিস কোম্পানি তৈরি করলেন কামাল।",
    category: "উদ্যোক্তা",
    tags: ["ফ্রিল্যান্সিং", "উদ্যোক্তা", "বিজনেস"]
  }
];

const moreStories = [
  {
    id: 4,
    name: "নাজমা আক্তার",
    title: "গ্রাম থেকে শহরের বিশ্ববিদ্যালয়ে",
    image: "https://images.unsplash.com/photo-1611432579699-484f7990b127?auto=format&fit=crop&q=80",
    category: "শিক্ষা",
    date: "১০ মে, ২০২৩"
  },
  {
    id: 5,
    name: "সুমন মিয়া",
    title: "অর্থনৈতিক সংকট থেকে সাফল্যের গল্প",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80",
    category: "আর্থিক",
    date: "২৫ জুন, ২০২৩"
  },
  {
    id: 6,
    name: "লিপি খানম",
    title: "গ্রাফিক ডিজাইনার থেকে আর্ট ডিরেক্টর",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    category: "ক্যারিয়ার",
    date: "১২ জুলাই, ২০২৩"
  },
  {
    id: 7,
    name: "ফারিয়া রহমান",
    title: "সোশ্যাল মিডিয়া মার্কেটিংয়ে সাফল্য",
    image: "https://images.unsplash.com/photo-1619970233256-8ad461a95f95?auto=format&fit=crop&q=80",
    category: "ডিজিটাল মার্কেটিং",
    date: "৫ আগস্ট, ২০২৩"
  },
  {
    id: 8,
    name: "রাকিব হাসান",
    title: "সায়েন্স অলিম্পিয়াডে দেশ প্রতিনিধিত্ব",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    category: "শিক্ষা",
    date: "১৮ সেপ্টেম্বর, ২০২৩"
  },
  {
    id: 9,
    name: "নাসরিন সুলতানা",
    title: "মহিলা উদ্যোক্তা হিসেবে সফলতা",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80",
    category: "উদ্যোক্তা",
    date: "৩০ অক্টোবর, ২০২৩"
  }
];

const categories = ["সকল", "ক্যারিয়ার", "শিক্ষা", "মানসিক স্বাস্থ্য", "উদ্যোক্তা", "আর্থিক", "ডিজিটাল মার্কেটিং"];

const SuccessStories = () => {
  return (
    <Layout>
      <div className="bg-youth-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold gradient-text">সাকসেস স্টোরিজ</h1>
          <p className="mt-4 text-lg text-youth-dark-gray max-w-3xl mx-auto">
            ইয়ুথ হোপ বাংলাদেশের সাহায্যে সফল হওয়া তরুণদের গল্প
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={category === "সকল" ? "default" : "outline"}
                  className={category === "সকল" ? "bg-youth-purple hover:bg-youth-purple/90" : "border-youth-purple/30 hover:bg-youth-purple/10"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-sm overflow-hidden card-hover">
                <div className="h-56">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-youth-purple/10 text-youth-purple px-2.5 py-1 rounded-full text-sm">{story.category}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{story.title}</h2>
                  <p className="text-youth-dark-gray mb-4">{story.excerpt}</p>
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 mr-3">
                      <Quote className="h-6 w-6 text-youth-purple" />
                    </div>
                    <p className="font-medium">{story.name}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.map((tag, index) => (
                      <span key={index} className="bg-youth-gray text-youth-dark-gray px-2 py-1 rounded-full text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <button className="text-youth-dark-gray hover:text-youth-purple">
                        <MessageCircle className="h-5 w-5" />
                      </button>
                      <button className="text-youth-dark-gray hover:text-youth-purple">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                    <Button variant="link" className="text-youth-purple p-0 flex items-center gap-1">
                      সম্পূর্ণ গল্প পড়ুন
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 gradient-text">আরও সাফল্যের গল্প</h2>
            <p className="text-youth-dark-gray max-w-2xl mx-auto">
              আমাদের কমিউনিটির সদস্যদের উৎসাহব্যঞ্জক সাফল্যের গল্প
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moreStories.map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-sm overflow-hidden card-hover flex">
                <div className="w-1/3">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-youth-purple/10 text-youth-purple px-2 py-0.5 rounded-full text-xs">{story.category}</span>
                    <span className="text-xs text-gray-500">{story.date}</span>
                  </div>
                  <h3 className="font-semibold mb-1">{story.title}</h3>
                  <p className="text-sm text-youth-dark-gray mb-2">{story.name}</p>
                  <Button variant="link" className="text-youth-purple p-0 text-sm flex items-center gap-1">
                    বিস্তারিত
                    <ChevronRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-youth-purple hover:bg-youth-purple/90">
              আরও সাফল্যের গল্প দেখুন
            </Button>
          </div>
        </div>

        <div className="bg-youth-soft-green p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">আপনার সাফল্যের গল্প শেয়ার করুন</h2>
            <p className="text-youth-dark-gray mb-6 max-w-2xl mx-auto">
              ইয়ুথ হোপ বাংলাদেশের সাহায্যে আপনি কিভাবে সফল হয়েছেন তা আমাদের জানান। আপনার গল্প অন্যদের অনুপ্রাণিত করতে পারে।
            </p>
            <Button className="bg-youth-purple hover:bg-youth-purple/90">
              আপনার গল্প শেয়ার করুন
            </Button>
          </div>
        </div>
      </div>

      <CallToAction />
    </Layout>
  );
};

export default SuccessStories;
