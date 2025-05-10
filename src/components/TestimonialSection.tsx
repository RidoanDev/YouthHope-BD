
import { Link } from 'react-router-dom';

const testimonials = [
  {
    content: "ইয়ুথ হোপ বাংলাদেশ আমার ক্যারিয়ার গড়তে অনেক সাহায্য করেছে। তাদের ওয়ার্কশপ এবং ট্রেনিং আমাকে একটি ভালো চাকরি পেতে সাহায্য করেছে।",
    author: "রাহিম আহমেদ",
    position: "সফটওয়্যার ডেভেলপার"
  },
  {
    content: "মানসিক স্বাস্থ্য বিষয়ে এত সাপোর্ট দেওয়ার জন্য ইয়ুথ হোপকে ধন্যবাদ। তাদের কাউন্সেলিং সেশন আমাকে ডিপ্রেশন থেকে বেরিয়ে আসতে সাহায্য করেছে।",
    author: "সাবরিনা খান",
    position: "ছাত্রী, ঢাকা বিশ্ববিদ্যালয়"
  },
  {
    content: "ইয়ুথ হোপের কমিউনিটি আমাকে অনেক নতুন বন্ধু এবং পেশাদার সংযোগ করে দিয়েছে। এটি আমার জীবনে একটি বড় পরিবর্তন নিয়ে এসেছে।",
    author: "কামাল হোসেন",
    position: "উদ্যোক্তা"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-youth-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">সাফল্যের গল্প</h2>
          <p className="max-w-2xl mx-auto">আমাদের সাহায্যে অনেক তরুণ তাদের লক্ষ্য অর্জনে সফল হয়েছে। তাদের কিছু অনুভূতি এখানে ভাগ করা হলো।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <svg className="text-youth-green h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <blockquote className="mb-4">{testimonial.content}</blockquote>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-youth-green text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/success-stories" className="inline-flex items-center text-white border-2 border-white hover:bg-white hover:text-youth-purple font-medium rounded-md px-5 py-2 transition-colors">
            আরও সাকসেস স্টোরি দেখুন
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
