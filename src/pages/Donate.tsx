import React, { useState } from 'react';
import { Wallet, CreditCard, AlertCircle, Copy, Check, Heart, Mail } from 'lucide-react';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { toast } from '@/hooks/use-toast';

const paymentMethods = [
  {
    id: 'bkash',
    name: 'bKash',
    number: '01886959350',
    logo: 'https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg',
  },
  {
    id: 'nagad',
    name: 'Nagad',
    number: '01886959350',
    logo: 'https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png',
  },
  {
    id: 'rocket',
    name: 'Rocket',
    number: '01886959350',
    logo: 'https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png',
  },
];

const impactFigures = [
  { figure: "৫০০ ৳", description: "একটি কিশোরের মানসিক স্বাস্থ্য কাউন্সেলিং সেশন" },
  { figure: "১,০০০ ৳", description: "একটি স্কিল ডেভেলপমেন্ট ওয়ার্কশপ" },
  { figure: "২,০০০ ৳", description: "একজন তরুণের ক্যারিয়ার কোর্স" },
  { figure: "৫,০০০ ৳", description: "পাঁচটি কমিউনিটি সেশন আয়োজন" },
  { figure: "১০,০০০ ৳", description: "দশজন তরুণের জন্য ট্রেনিং প্রোগ্রাম" }
];

const Donate = () => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyNumber = (number: string) => {
    navigator.clipboard.writeText(number.replace(/-/g, '')).then(() => {
      setCopiedNumber(number);
      toast({
        title: 'নম্বর কপি হয়েছে',
        description: 'নম্বরটি আপনার ক্লিপবোর্ডে কপি করা হয়েছে।',
      });
      setTimeout(() => setCopiedNumber(null), 2000);
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('youthhopebangladesh@gmail.com').then(() => {
      setCopiedEmail(true);
      toast({
        title: 'ইমেইল কপি হয়েছে',
        description: 'ইমেইলটি আপনার ক্লিপবোর্ডে কপি করা হয়েছে।',
      });
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  return (
    <Layout>
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold gradient-text flex items-center justify-center gap-2">
            <Heart className="h-10 w-10 text-red-500 fill-red-500" />
            সাপোর্ট করুন
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            আপনার অনুদান দিয়ে তরুণ প্রজন্মের উন্নয়নে সহায়তা করুন
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 gradient-text">কেন অনুদান দিবেন?</h2>
            <p className="text-gray-600 mb-6">
              ইয়ুথ হোপ বাংলাদেশ একটি অলাভজনক সংস্থা যা বাংলাদেশের তরুণদের জন্য কাজ করে। আমরা তরুণদের মানসিক স্বাস্থ্য, ক্যারিয়ার গাইডেন্স, স্কিল ডেভেলপমেন্ট এবং নেতৃত্ব বিকাশের জন্য বিভিন্ন কার্যক্রম পরিচালনা করি।
            </p>
            <p className="text-gray-600 mb-6">
              আপনার অনুদান আমাদের এই কার্যক্রম চালিয়ে যেতে সাহায্য করবে এবং আরও বেশি তরুণের কাছে পৌঁছাতে সহায়তা করবে। আপনার ছোট অনুদানও আমাদের জন্য অনেক বড় পার্থক্য তৈরি করতে পারে।
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4">আপনার অনুদান কতটা পার্থক্য তৈরি করতে পারে:</h3>
              <ul className="space-y-4">
                {impactFigures.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <span className="font-semibold">{item.figure}</span> - {item.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h3 className="text-xl font-bold mb-3">আমাদের ট্রান্সপারেন্সি কমিটমেন্ট</h3>
              <p className="mb-4 text-gray-600">
                আপনার অনুদান কীভাবে ব্যবহার করা হচ্ছে সে সম্পর্কে আমরা সম্পূর্ণ স্বচ্ছতা বজায় রাখি।
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>বার্ষিক আর্থিক প্রতিবেদন প্রকাশ</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>প্রতি তিন মাস অন্তর প্রোগ্রাম আপডেট</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>দাতাদের জন্য বিশেষ প্রতিবেদন</div>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Wallet className="h-6 w-6 text-purple-600" />
                <h2 className="text-2xl font-bold">অনুদান পদ্ধতি</h2>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200"
                    >
                      <img
                        src={method.logo}
                        alt={method.name}
                        className="h-12 mx-auto mb-4 object-contain"
                      />
                      <h3 className="font-semibold text-lg mb-2">
                        {method.name}
                      </h3>
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-gray-600">{method.number}</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleCopyNumber(method.number)}
                          className="h-6 w-6"
                        >
                          {copiedNumber === method.number ? (
                            <Check className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">
                        পেমেন্ট নির্দেশাবলী:
                      </h4>
                      <ol className="mt-2 text-sm text-blue-800 space-y-2">
                        <li>১. উপরের থেকে আপনার পছন্দের পেমেন্ট পদ্ধতি নির্বাচন করুন</li>
                        <li>২. প্রদত্ত নম্বরে আপনার অনুদানের পরিমাণ পাঠান</li>
                        <li>৩. পেমেন্ট কনফার্মেশন থেকে আপনার লেনদেন আইডি সংরক্ষণ করুন</li>
                        <li>৪. অনুদান ফর্মটি আপনার বিবরণ এবং লেনদেন আইডি সহ পূরণ করুন</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="h-6 w-6 text-purple-600" />
                <h2 className="text-2xl font-bold">অনুদান ফর্ম</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  অনুদান সম্পূর্ণ করতে দয়া করে Google ফর্মটি পূরণ করুন:
                </p>
                
                <Button 
                  onClick={() => window.open("https://forms.gle/Q1SFFKi6DPFeFcXj7", "_blank")}
                  className="w-full bg-purple-600 hover:bg-purple-700 py-3 text-lg"
                >
                  Google Form এ যান
                </Button>
                
                <div className="text-center text-gray-600 mt-6">
                  <p>অনুদান সম্পর্কিত কোন প্রশ্ন থাকলে, দয়া করে যোগাযোগ করুন:</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <p className="font-medium">ফোন: 01886959350</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleCopyNumber('01886959350')}
                      className="h-6 w-6"
                    >
                      {copiedNumber === '01886959350' ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <p className="font-medium">youthhopebangladesh@gmail.com</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleCopyEmail}
                      className="h-6 w-6"
                    >
                      {copiedEmail ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Donate;
