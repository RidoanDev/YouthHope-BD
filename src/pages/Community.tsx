import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { MessageSquare, UserPlus, Award, Heart, ExternalLink } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const communityBenefits = [
  {
    title: "স্কিল শেয়ারিং",
    description: "কমিউনিটির সদস্যরা তাদের দক্ষতা এবং জ্ঞান একে অপরের সাথে শেয়ার করতে পারেন।",
    icon: MessageSquare
  },
  {
    title: "নেটওয়ার্কিং",
    description: "বিভিন্ন ক্ষেত্রের পেশাদারদের সাথে পরিচিত হওয়া এবং সম্পর্ক গড়ে তোলার সুযোগ।",
    icon: UserPlus
  },
  {
    title: "মেন্টরশিপ প্রোগ্রাম",
    description: "অভিজ্ঞ মেন্টরদের কাছ থেকে গাইডেন্স এবং পরামর্শ পাওয়ার সুযোগ।",
    icon: Award
  },
  {
    title: "সাপোর্ট সিস্টেম",
    description: "একই ধরনের চ্যালেঞ্জ সম্মুখীন হওয়া তরুণদের সাপোর্ট গ্রুপ।",
    icon: Heart
  }
];

const communityStories = [
  {
    name: "সাদিয়া আহমেদ",
    role: "প্রোগ্রাম লিড",
    story: "ইয়ুথ হোপ কমিউনিটিতে যোগ দেওয়ার পর আমি অনেক নতুন মানুষের সাথে পরিচিত হয়েছি এবং আমার লিডারশিপ স্কিল উন্নত করতে পেরেছি। এখানে আমি আমার পেশাগত দক্ষতা উন্নত করার জন্য প্রয়োজনীয় সাপোর্ট পেয়েছি।",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  },
  {
    name: "রাহুল হোসেন",
    role: "সফটওয়্যার ডেভেলপার",
    story: "আমি কমিউনিটির কোডিং বুটক্যাম্পে অংশগ্রহণ করেছিলাম, যা আমার ক্যারিয়ারে একটি বড় পরিবর্তন নিয়ে এসেছে। সেখানে আমি অনেক ভালো মেন্টর এবং সহকর্মী পেয়েছি, যারা আমাকে ক্যারিয়ারে এগিয়ে যেতে সাহায্য করেছে।",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    name: "নাজনীন খান",
    role: "ডিজিটাল মার্কেটার",
    story: "ইয়ুথ হোপ কমিউনিটি আমাকে মানসিকভাবে শক্তিশালী হতে সাহায্য করেছে। আমি যখন ক্যারিয়ারে হতাশ ছিলাম, তখন কমিউনিটির সদস্যরা আমাকে সাহস যুগিয়েছে এবং সঠিক পথে পরামর্শ দিয়েছে।",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  }
];

const forumCategories = [
  { name: "ক্যারিয়ার বিষয়ক", count: 120 },
  { name: "শিক্ষা বিষয়ক", count: 85 },
  { name: "মানসিক স্বাস্থ্য", count: 64 },
  { name: "স্কিল ডেভেলপমেন্ট", count: 47 },
  { name: "সামাজিক বিষয়", count: 32 },
  { name: "ভ্রমণ", count: 25 }
];

const whatsappGroups = [
  {
    name: "ইয়ুথ হোপ মেইন গ্রুপ",
    description: "সকল সদস্যদের জন্য মূল গ্রুপ",
    link: "https://chat.whatsapp.com/[YOUR_MAIN_GROUP_LINK]"
  },
  {
    name: "ক্যারিয়ার ডিসকাশন",
    description: "ক্যারিয়ার সম্পর্কিত আলোচনা এবং পরামর্শ",
    link: "https://chat.whatsapp.com/[YOUR_CAREER_GROUP_LINK]"
  },
  {
    name: "মেন্টাল হেলথ সাপোর্ট",
    description: "মানসিক স্বাস্থ্য বিষয়ক আলোচনা এবং সাপোর্ট",
    link: "https://chat.whatsapp.com/[YOUR_MENTAL_HEALTH_GROUP_LINK]"
  }
];

const Community = () => {
  const openWhatsAppGroup = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <Layout>
      <div className="bg-youth-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold gradient-text">কমিউনিটি ফোরাম</h1>
          <p className="mt-4 text-lg text-youth-dark-gray max-w-3xl mx-auto">
            একই ধরনের চিন্তাভাবনা এবং লক্ষ্য রাখা তরুণদের সাথে যোগাযোগ করুন, জ্ঞান শেয়ার করুন এবং একসাথে বৃদ্ধি পান
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-4 gradient-text">আমাদের কমিউনিটি</h2>
            <p className="text-youth-dark-gray mb-4">
              ইয়ুথ হোপ কমিউনিটি হল একটি সম্প্রদায় যেখানে সমান চিন্তাধারার তরুণরা একত্রিত হয়ে নিজেদের অভিজ্ঞতা, জ্ঞান এবং দক্ষতা শেয়ার করে। আমরা বিশ্বাস করি যে একসাথে কাজ করে আমরা আরও বেশি অর্জন করতে পারি।
            </p>
            <p className="text-youth-dark-gray mb-6">
              আমাদের কমিউনিটিতে যোগ দিয়ে আপনি পাবেন:
            </p>
            <ul className="list-disc list-inside space-y-2 text-youth-dark-gray mb-6">
              <li>সমান চিন্তাধারা সম্পন্ন তরুণদের সাথে নেটওয়ার্কিং</li>
              <li>ক্যারিয়ার বিষয়ক পরামর্শ এবং সাপোর্ট</li>
              <li>স্কিল ডেভেলপমেন্ট সেশন</li>
              <li>মানসিক স্বাস্থ্য সাপোর্ট গ্রুপ</li>
              <li>এক্সক্লুসিভ ইভেন্ট এবং ওয়ার্কশপ</li>
            </ul>
            <Button 
              className="bg-youth-purple hover:bg-youth-purple/90"
              onClick={() => openWhatsAppGroup("https://chat.whatsapp.com/[YOUR_MAIN_GROUP_LINK]")}
            >
              WhatsApp গ্রুপে যোগ দিন
            </Button>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
              alt="ইয়ুথ হোপ কমিউনিটি" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 gradient-text">কমিউনিটি বেনিফিটস</h2>
            <p className="text-youth-dark-gray max-w-2xl mx-auto">
              আমাদের কমিউনিটিতে যোগ দিয়ে আপনি যে সুবিধাগুলো পেতে পারেন।
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 card-hover transition-all">
                <div className="h-12 w-12 text-youth-purple mb-4 flex items-center justify-center bg-youth-purple/10 rounded-lg">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-youth-dark-gray">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* WhatsApp Groups Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 gradient-text">WhatsApp কমিউনিটি গ্রুপ</h2>
            <p className="text-youth-dark-gray max-w-2xl mx-auto">
              আমাদের WhatsApp গ্রুপে যোগ দিন এবং রিয়েল টাইমে আলোচনায় অংশ নিন
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatsappGroups.map((group, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:border-youth-purple transition-colors">
                <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
                <p className="text-youth-dark-gray mb-4">{group.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-youth-purple text-youth-purple hover:bg-youth-purple/10"
                  onClick={() => openWhatsAppGroup(group.link)}
                >
                  গ্রুপে যোগ দিন <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 gradient-text">আমাদের ফোরাম</h2>
            <p className="text-youth-dark-gray max-w-2xl mx-auto">
              আমাদের অনলাইন ফোরামে যোগ দিয়ে বিভিন্ন বিষয়ে আলোচনা করুন এবং প্রশ্নের উত্তর পান।
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold mb-4">আলোচনার বিষয়সমূহ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {forumCategories.map((category, index) => (
                  <div key={index} className="flex justify-between items-center p-3 border rounded-md hover:bg-youth-soft-green cursor-pointer transition-colors">
                    <span className="font-medium">{category.name}</span>
                    <span className="bg-youth-purple/10 text-youth-purple px-2 py-1 rounded-full text-sm">{category.count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 bg-youth-gray/20 text-center">
              <p className="mb-3">আমাদের ফোরামে আপনার প্রশ্ন জিজ্ঞাসা করুন বা আলোচনায় অংশ নিন</p>
              <Button className="bg-youth-purple hover:bg-youth-purple/90">
                ফোরামে প্রবেশ করুন
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 gradient-text">কমিউনিটি মেম্বারদের গল্প</h2>
            <p className="text-youth-dark-gray max-w-2xl mx-auto">
              আমাদের কমিউনিটি সদস্যদের অভিজ্ঞতা এবং সাফল্যের গল্প।
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={story.image} 
                      alt={story.name} 
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{story.name}</h3>
                      <p className="text-youth-purple text-sm">{story.role}</p>
                    </div>
                  </div>
                  <blockquote className="italic text-youth-dark-gray mb-4">"{story.story}"</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-youth-soft-green p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">আজই আমাদের কমিউনিটিতে যোগ দিন</h2>
            <p className="text-youth-dark-gray mb-6 max-w-2xl mx-auto">
              বাংলাদেশের ৫,০০০+ তরুণের সাথে যোগ দিন এবং আপনার ক্যারিয়ার এবং ব্যক্তিগত বিকাশে সহযোগিতা পান।
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-youth-purple hover:bg-youth-purple/90"
                onClick={() => openWhatsAppGroup("https://chat.whatsapp.com/[YOUR_MAIN_GROUP_LINK]")}
              >
                WhatsApp গ্রুপে যোগ দিন
              </Button>
              <Button variant="outline" className="border-youth-purple text-youth-purple">
                আরও জানুন
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </Layout>
  );
};

export default Community;
