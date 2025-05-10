
import { useState } from 'react';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { Image, Play } from 'lucide-react';
import CallToAction from '../components/CallToAction';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  title: string;
  category: string;
  date: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80',
    title: 'তরুণ নেতৃত্ব সম্মেলন ২০২৩',
    category: 'ইভেন্ট',
    date: 'মে ১৫, ২০২৩'
  },
  {
    id: 2,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    title: 'ক্যারিয়ার ফেয়ার',
    category: 'ইভেন্ট',
    date: 'জুন ২০, ২০২৩'
  },
  {
    id: 3,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1475721027785-f74ec9c409d6?auto=format&fit=crop&q=80',
    title: 'মানসিক স্বাস্থ্য বিষয়ক ওয়ার্কশপ',
    category: 'ওয়ার্কশপ',
    date: 'জুলাই ০৫, ২০২৩'
  },
  {
    id: 4,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80',
    title: 'সামার বুটক্যাম্প',
    category: 'ট্রেনিং',
    date: 'জুলাই ১৫, ২০২৩'
  },
  {
    id: 5,
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80',
    title: 'সফল তরুণদের সাক্ষাৎকার',
    category: 'ভিডিও',
    date: 'আগস্ট ১০, ২০২৩'
  },
  {
    id: 6,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80',
    title: 'কমিউনিটি মিটআপ',
    category: 'মিটআপ',
    date: 'আগস্ট ২৫, ২০২৩'
  },
  {
    id: 7,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80',
    title: 'ইনোভেশন হ্যাকাথন',
    category: 'ইভেন্ট',
    date: 'সেপ্টেম্বর ১২, ২০২৩'
  },
  {
    id: 8,
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80',
    title: 'ক্যারিয়ার গাইডলাইন সেশন',
    category: 'ভিডিও',
    date: 'অক্টোবর ০৫, ২০২৩'
  },
  {
    id: 9,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&q=80',
    title: 'স্বেচ্ছাসেবকদের সম্মাননা অনুষ্ঠান',
    category: 'ইভেন্ট',
    date: 'অক্টোবর ২০, ২০২৩'
  }
];

const categories = ['সকল', 'ইভেন্ট', 'ওয়ার্কশপ', 'ট্রেনিং', 'মিটআপ', 'ভিডিও'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('সকল');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'সকল' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <Layout>
      <div className="bg-youth-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold gradient-text">গ্যালারি</h1>
          <p className="mt-4 text-lg text-youth-dark-gray max-w-3xl mx-auto">
            আমাদের ইভেন্টস, ওয়ার্কশপ এবং কার্যক্রমের ছবি ও ভিডিও
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-youth-purple hover:bg-youth-purple/90" : ""}
              >
                {category === 'ভিডিও' ? (
                  <span className="flex items-center gap-1">
                    <Play className="h-4 w-4" /> {category}
                  </span>
                ) : category === 'সকল' ? (
                  category
                ) : (
                  <span className="flex items-center gap-1">
                    <Image className="h-4 w-4" /> {category}
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer card-hover"
              onClick={() => openModal(item)}
            >
              <div className="relative aspect-video">
                {item.type === 'image' ? (
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="h-16 w-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                        <Play className="h-8 w-8 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-youth-purple text-white px-2 py-1 rounded-md text-xs">
                  {item.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-youth-dark-gray">এই ক্যাটাগরিতে কোন আইটেম পাওয়া যায়নি।</p>
          </div>
        )}

        {filteredItems.length > 0 && (
          <div className="text-center mt-10">
            <Button className="bg-youth-purple hover:bg-youth-purple/90">
              আরও দেখুন
            </Button>
          </div>
        )}

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={closeModal}>
            <div 
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={e => e.stopPropagation()}
            >
              {selectedItem.type === 'image' ? (
                <img 
                  src={selectedItem.src} 
                  alt={selectedItem.title} 
                  className="w-full max-h-[70vh] object-contain"
                />
              ) : (
                <div className="aspect-video">
                  <iframe
                    src={selectedItem.src}
                    title={selectedItem.title}
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-youth-purple mb-2">{selectedItem.category}</p>
                <p className="text-gray-500">{selectedItem.date}</p>
              </div>
              <div className="p-4 border-t flex justify-end">
                <Button variant="outline" onClick={closeModal}>
                  বন্ধ করুন
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <CallToAction />
    </Layout>
  );
};

export default Gallery;
