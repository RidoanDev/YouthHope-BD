import Layout from '../components/Layout';
import CallToAction from '../components/CallToAction';

const About = () => {
  return (
    <Layout>
      <div className="bg-youth-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold gradient-text">আমাদের সম্পর্কে</h1>
          <p className="mt-4 text-lg text-youth-dark-gray max-w-3xl mx-auto">
            Youth Hope Bangladesh হচ্ছে বাংলাদেশের তরুণদের উন্নয়নের জন্য একটি
            বেসরকারী সংস্থা
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              আমাদের লক্ষ্য
            </h2>
            <p className="text-youth-dark-gray mb-4">
              আমাদের লক্ষ্য হলো বাংলাদেশের তরুণদের জন্য এমন একটি প্লাটফর্ম তৈরি
              করা যেখানে তারা তাদের পূর্ণ সম্ভাবনা অনুযায়ী বিকশিত হতে পারে।
              আমরা বিশ্বাস করি প্রতিটি তরুণের মধ্যে একটি অনন্য প্রতিভা রয়েছে,
              যা সঠিক দিকনির্দেশনা এবং সহায়তার মাধ্যমে উন্মোচিত করা যেতে পারে।
            </p>
            <p className="text-youth-dark-gray">
              Youth Hope Bangladesh একটি অলাভজনক সংগঠন যা ২০১৮ সালে প্রতিষ্ঠিত
              হয়েছে। আমরা তরুণদের শিক্ষা, ক্যারিয়ার, মানসিক স্বাস্থ্য এবং
              সামাজিক দায়বদ্ধতা বিষয়ে সহায়তা করে থাকি।
            </p>
          </div>
         <div className="rounded-lg shadow-md overflow-hidden">
  <iframe 
              src="https://www.youtube.com/embed/cKwXmNDWJHM?autoplay=0&rel=0" 
              frameBorder="0" 
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
              title="YouTube video player"
            ></iframe>
</div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
            আমাদের মূল্যবোধ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
              <div className="h-12 w-12 rounded-full bg-youth-purple/10 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-youth-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">উদ্ভাবন</h3>
              <p className="text-youth-dark-gray">
                আমরা সমস্যা সমাধানে নতুন ও উদ্ভাবনী পদ্ধতি অনুসরণ করি এবং
                তরুণদের উদ্ভাবনী চিন্তাভাবনা করতে উৎসাহিত করি।
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
              <div className="h-12 w-12 rounded-full bg-youth-purple/10 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-youth-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">সম্প্রদায়</h3>
              <p className="text-youth-dark-gray">
                আমরা বিশ্বাস করি একটি শক্তিশালী সম্প্রদায় তৈরি করা যেতে পারে
                যেখানে সবাই একে অপরকে সাহায্য করে এবং সমর্থন করে।
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
              <div className="h-12 w-12 rounded-full bg-youth-purple/10 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-youth-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">সততা</h3>
              <p className="text-youth-dark-gray">
                আমরা সততা, স্বচ্ছতা এবং জবাবদিহিতার মূল্যবোধ অনুসরণ করি এবং এটি
                আমাদের সকল কার্যক্রমে প্রতিফলিত হয়।
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
              <div className="h-12 w-12 rounded-full bg-youth-purple/10 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-youth-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">ক্ষমতায়ন</h3>
              <p className="text-youth-dark-gray">
                আমরা তরুণদের সিদ্ধান্ত গ্রহণে সক্ষম করতে চাই এবং তাদের
                স্বাধীনভাবে চিন্তা করতে এবং কাজ করতে উৎসাহিত করি।
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
            আমাদের টিম
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src=""
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">মো: মোমিন মোরশেদ</h3>
                <p className="text-youth-purple">প্রতিষ্ঠাতা এবং সিইও</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src=""
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">সাবরিনা আহমেদ</h3>
                <p className="text-youth-purple">
                  পরিচালক, মেন্টাল হেলথ প্রোগ্রাম
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src=""
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">রাহুল হোসেন</h3>
                <p className="text-youth-purple">
                  পরিচালক, ক্যারিয়ার গাইডেন্স
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src=""
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">নাজনীন খান</h3>
                <p className="text-youth-purple">
                  পরিচালক, কমিউনিটি অ্যাক্টিভিটিজ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </Layout>
  );
};

export default About;
