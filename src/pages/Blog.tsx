
import { useState } from 'react';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "তরুণদের মানসিক স্বাস্থ্য সমস্যা এবং তার সমাধান",
    excerpt: "আজকাল তরুণদের মধ্যে মানসিক স্বাস্থ্য সমস্যা ক্রমশ বেড়ে চলেছে। এই ব্লগে আমরা এর কারণ এবং সমাধান নিয়ে আলোচনা করব...",
    date: "১২ মে, ২০২৩",
    author: "ডা. সাবরিনা আহমেদ",
    category: "মানসিক স্বাস্থ্য",
    image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "ক্যারিয়ার পরিকল্পনা: কিভাবে শুরু করবেন?",
    excerpt: "ক্যারিয়ার পরিকল্পনা করা অনেক তরুণের জন্য একটি বড় চ্যালেঞ্জ। এই ব্লগে আমরা ক্যারিয়ার পরিকল্পনা শুরু করার পদ্ধতি নিয়ে আলোচনা করব...",
    date: "২৩ জুন, ২০২৩",
    author: "রাহুল হোসেন",
    category: "ক্যারিয়ার",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "ফ্রিল্যান্সিং: একটি নতুন ক্যারিয়ার সুযোগ",
    excerpt: "ফ্রিল্যান্সিং এখন বাংলাদেশের তরুণদের মধ্যে একটি জনপ্রিয় ক্যারিয়ার পথ। এই ব্লগে আমরা ফ্রিল্যান্সিংয়ের সুযোগ এবং চ্যালেঞ্জ নিয়ে আলোচনা করব...",
    date: "১০ জুলাই, ২০২৩",
    author: "কামাল হোসেন",
    category: "ফ্রিল্যান্সিং",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "কমিউনিকেশন স্কিল: ক্যারিয়ার সাফল্যের চাবিকাঠি",
    excerpt: "ভাল কমিউনিকেশন স্কিল একজন পেশাদারের জন্য অত্যন্ত গুরুত্বপূর্ণ। এই ব্লগে আমরা কমিউনিকেশন স্কিল উন্নত করার উপায় নিয়ে আলোচনা করব...",
    date: "৫ আগস্ট, ২০২৩",
    author: "সাদিয়া হক",
    category: "স্কিল ডেভেলপমেন্ট",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "লিডারশিপ স্কিল: কিভাবে একজন ভালো লিডার হবেন",
    excerpt: "লিডারশিপ স্কিল একজন সফল ব্যক্তির জন্য অপরিহার্য। এই ব্লগে আমরা লিডারশিপ স্কিল উন্নত করার উপায় এবং কৌশল নিয়ে আলোচনা করব...",
    date: "১২ সেপ্টেম্বর, ২০২৩",
    author: "আরিফ খান",
    category: "লিডারশিপ",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "সময় ব্যবস্থাপনা: কিভাবে আপনার সময়ের সর্বোত্তম ব্যবহার করবেন",
    excerpt: "সময় ব্যবস্থাপনা আমাদের জীবনের একটি গুরুত্বপূর্ণ দক্ষতা। এই ব্লগে আমরা সময় ব্যবস্থাপনার উপায় এবং কৌশল নিয়ে আলোচনা করব...",
    date: "২০ অক্টোবর, ২০২৩",
    author: "নাজমুল হক",
    category: "প্রোডাক্টিভিটি",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80"
  }
];

const categories = ["সকল", "ক্যারিয়ার", "মানসিক স্বাস্থ্য", "স্কিল ডেভেলপমেন্ট", "লিডারশিপ", "ফ্রিল্যান্সিং", "প্রোডাক্টিভিটি"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("সকল");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "সকল" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="bg-youth-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold gradient-text">ব্লগ</h1>
          <p className="mt-4 text-lg text-youth-dark-gray max-w-3xl mx-auto">
            যুব উন্নয়ন, ক্যারিয়ার গাইডেন্স এবং মানসিক স্বাস্থ্য বিষয়ক আর্টিকেল ও ব্লগ
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h2 className="text-xl font-bold mb-4">ক্যাটাগরি</h2>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left py-2 px-4 rounded-md transition-colors ${
                      selectedCategory === category 
                        ? 'bg-youth-purple text-white' 
                        : 'hover:bg-youth-gray'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">সার্চ</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="ব্লগ সার্চ করুন..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-youth-purple"
                  />
                  <svg className="w-5 h-5 absolute right-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm card-hover">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-youth-purple">{post.category}</span>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">লেখক: {post.author}</span>
                        <Button variant="link" className="text-youth-purple p-0">
                          আরো পড়ুন &rarr;
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <p className="text-lg text-gray-500">কোন ব্লগ পাওয়া যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।</p>
                </div>
              )}
            </div>
            
            {filteredPosts.length > 0 && (
              <div className="mt-10 flex justify-center">
                <Button className="bg-youth-purple hover:bg-youth-purple/90">
                  আরও পোস্ট দেখুন
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
