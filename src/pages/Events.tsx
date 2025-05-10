
import { useState } from 'react';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const upcomingEvents = [
  {
    id: 1,
    title: "ক্যারিয়ার ডেভেলপমেন্ট ওয়ার্কশপ",
    date: "১২ জুন, ২০২৫",
    time: "সকাল ১০:০০ - দুপুর ১:০০",
    location: "ঢাকা, বাংলাদেশ",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    category: "ওয়ার্কশপ",
    attendees: 45
  },
  {
    id: 2,
    title: "মানসিক স্বাস্থ্য বিষয়ক সেমিনার",
    date: "২০ জুন, ২০২৫",
    time: "বিকাল ৩:০০ - সন্ধ্যা ৬:০০",
    location: "চট্টগ্রাম, বাংলাদেশ",
    image: "https://images.unsplash.com/photo-1475721027785-f74ec9c409d6?auto=format&fit=crop&q=80",
    category: "সেমিনার",
    attendees: 60
  },
  {
    id: 3,
    title: "ফ্রিল্যান্সিং বুটক্যাম্প",
    date: "৫ জুলাই, ২০২৫",
    time: "সকাল ৯:০০ - বিকাল ৫:০০",
    location: "অনলাইন",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80",
    category: "বুটক্যাম্প",
    attendees: 100
  }
];

const pastEvents = [
  {
    id: 4,
    title: "লিডারশিপ কনফারেন্স",
    date: "১০ মে, ২০২৫",
    time: "সকাল ১০:০০ - দুপুর ৩:০০",
    location: "ঢাকা, বাংলাদেশ",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
    category: "কনফারেন্স",
    attendees: 120
  },
  {
    id: 5,
    title: "স্টার্টআপ মিটআপ",
    date: "২২ এপ্রিল, ২০২৫",
    time: "সন্ধ্যা ৬:০০ - রাত ৮:০০",
    location: "ঢাকা, বাংলাদেশ",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
    category: "মিটআপ",
    attendees: 75
  },
  {
    id: 6,
    title: "ইন্টারনশিপ ফেয়ার",
    date: "১৫ মার্চ, ২০২৫",
    time: "সকাল ১০:০০ - বিকাল ৪:০০",
    location: "ঢাকা, বাংলাদেশ",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    category: "ফেয়ার",
    attendees: 200
  }
];

const categories = ["সকল", "ওয়ার্কশপ", "সেমিনার", "বুটক্যাম্প", "কনফারেন্স", "মিটআপ", "ফেয়ার"];
const locations = ["সকল", "ঢাকা", "চট্টগ্রাম", "অনলাইন"];

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("সকল");
  const [selectedLocation, setSelectedLocation] = useState("সকল");
  const [activeTab, setActiveTab] = useState("upcoming");

  const filteredUpcomingEvents = upcomingEvents.filter(event => {
    const categoryMatch = selectedCategory === "সকল" || event.category === selectedCategory;
    const locationMatch = selectedLocation === "সকল" || event.location.includes(selectedLocation);
    return categoryMatch && locationMatch;
  });

  const filteredPastEvents = pastEvents.filter(event => {
    const categoryMatch = selectedCategory === "সকল" || event.category === selectedCategory;
    const locationMatch = selectedLocation === "সকল" || event.location.includes(selectedLocation);
    return categoryMatch && locationMatch;
  });

  const displayEvents = activeTab === "upcoming" ? filteredUpcomingEvents : filteredPastEvents;

  return (
    <Layout>
      <div className="bg-youth-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold gradient-text">ইভেন্টস ও ওয়ার্কশপ</h1>
          <p className="mt-4 text-lg text-youth-dark-gray max-w-3xl mx-auto">
            আমাদের আয়োজিত বিভিন্ন ইভেন্টস এবং ওয়ার্কশপে যোগ দিয়ে আপনার দক্ষতা ও নেটওয়ার্ক বাড়ান
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">ইভেন্টস ফিল্টার করুন</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-youth-dark-gray mb-1">ক্যাটাগরি</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-youth-dark-gray mb-1">স্থান</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={selectedLocation}
                  onChange={e => setSelectedLocation(e.target.value)}
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-4">
          <Button
            variant={activeTab === "upcoming" ? "default" : "outline"}
            onClick={() => setActiveTab("upcoming")}
            className={activeTab === "upcoming" ? "bg-youth-purple hover:bg-youth-purple/90" : ""}
          >
            আসন্ন ইভেন্টস
          </Button>
          <Button
            variant={activeTab === "past" ? "default" : "outline"}
            onClick={() => setActiveTab("past")}
            className={activeTab === "past" ? "bg-youth-purple hover:bg-youth-purple/90" : ""}
          >
            অতীত ইভেন্টস
          </Button>
        </div>
        
        {displayEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-youth-dark-gray">কোন ইভেন্ট পাওয়া যায়নি। অনুগ্রহ করে ফিল্টার পরিবর্তন করুন।</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden card-hover">
                <div className="relative h-48">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-youth-purple text-white px-3 py-1 rounded-full text-sm">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-youth-dark-gray">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-youth-dark-gray">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-youth-dark-gray">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-youth-dark-gray">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.attendees} জন অংশগ্রহণ করছেন</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    {activeTab === "upcoming" ? (
                      <Button className="bg-youth-purple hover:bg-youth-purple/90">
                        রেজিস্ট্রেশন করুন
                      </Button>
                    ) : (
                      <Button variant="outline" className="border-youth-purple text-youth-purple hover:bg-youth-purple/10">
                        বিস্তারিত দেখুন
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 bg-youth-soft-green p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">আপনার ইভেন্ট আয়োজন করতে চান?</h3>
              <p className="text-youth-dark-gray">
                আপনার আয়োজিত ইভেন্টের জন্য আমাদের সাথে যোগাযোগ করুন। আমরা আপনাকে ইভেন্ট প্ল্যানিং থেকে শুরু করে বাস্তবায়ন পর্যন্ত সাহায্য করব।
              </p>
            </div>
            <Button className="bg-youth-purple hover:bg-youth-purple/90 text-white px-6 py-2 text-lg whitespace-nowrap">
              যোগাযোগ করুন
            </Button>
          </div>
        </div>
      </div>

      <CallToAction />
    </Layout>
  );
};

export default Events;
