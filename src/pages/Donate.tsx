import { useState } from 'react';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const donationOptions = [
  { amount: "৫০০", label: "৫০০ ৳" },
  { amount: "১০০০", label: "১,০০০ ৳" },
  { amount: "২০০০", label: "২,০০০ ৳" },
  { amount: "৫০০০", label: "৫,০০০ ৳" },
  { amount: "১০০০০", label: "১০,০০০ ৳" },
  { amount: "custom", label: "অন্য" }
];

const impactFigures = [
  { figure: "৫০০ ৳", description: "একটি কিশোরের মানসিক স্বাস্থ্য কাউন্সেলিং সেশন" },
  { figure: "১,০০০ ৳", description: "একটি স্কিল ডেভেলপমেন্ট ওয়ার্কশপ" },
  { figure: "২,০০০ ৳", description: "একজন তরুণের ক্যারিয়ার কোর্স" },
  { figure: "৫,০০০ ৳", description: "পাঁচটি কমিউনিটি সেশন আয়োজন" },
  { figure: "১০,০০০ ৳", description: "দশজন তরুণের জন্য ট্রেনিং প্রোগ্রাম" }
];

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState("১০০০");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("bkash");
  const [isRecurring, setIsRecurring] = useState(false);

  const handleDonationSelect = (amount: string) => {
    setSelectedAmount(amount);
    if (amount !== "custom") {
      setCustomAmount("");
    }
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
  };

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  const handleRecurringChange = () => {
    setIsRecurring(!isRecurring);
  };

  const handleGoogleFormClick = () => {
    window.open("https://forms.gle/Q1SFFKi6DPFeFcXj7", "_blank");
  };

  return (
    <Layout>
      <div className="bg-youth-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold gradient-text">সাপোর্ট করুন</h1>
          <p className="mt-4 text-lg text-youth-dark-gray max-w-3xl mx-auto">
            আপনার অনুদান দিয়ে তরুণ প্রজন্মের উন্নয়নে সহায়তা করুন
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 gradient-text">কেন অনুদান দিবেন?</h2>
            <p className="text-youth-dark-gray mb-6">
              ইয়ুথ হোপ বাংলাদেশ একটি অলাভজনক সংস্থা যা বাংলাদেশের তরুণদের জন্য কাজ করে। আমরা তরুণদের মানসিক স্বাস্থ্য, ক্যারিয়ার গাইডেন্স, স্কিল ডেভেলপমেন্ট এবং নেতৃত্ব বিকাশের জন্য বিভিন্ন কার্যক্রম পরিচালনা করি।
            </p>
            <p className="text-youth-dark-gray mb-6">
              আপনার অনুদান আমাদের এই কার্যক্রম চালিয়ে যেতে সাহায্য করবে এবং আরও বেশি তরুণের কাছে পৌঁছাতে সহায়তা করবে। আপনার ছোট অনুদানও আমাদের জন্য অনেক বড় পার্থক্য তৈরি করতে পারে।
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4">আপনার অনুদান কতটা পার্থক্য তৈরি করতে পারে:</h3>
              <ul className="space-y-4">
                {impactFigures.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-youth-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-youth-purple" />
                    </div>
                    <div>
                      <span className="font-semibold">{item.figure}</span> - {item.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-youth-soft-green p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">আমাদের ট্রান্সপারেন্সি কমিটমেন্ট</h3>
              <p className="mb-4 text-youth-dark-gray">
                আপনার অনুদান কীভাবে ব্যবহার করা হচ্ছে সে সম্পর্কে আমরা সম্পূর্ণ স্বচ্ছতা বজায় রাখি।
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-youth-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-youth-purple" />
                  </div>
                  <div>বার্ষিক আর্থিক প্রতিবেদন প্রকাশ</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-youth-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-youth-purple" />
                  </div>
                  <div>প্রতি তিন মাস অন্তর প্রোগ্রাম আপডেট</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-youth-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-youth-purple" />
                  </div>
                  <div>দাতাদের জন্য বিশেষ প্রতিবেদন</div>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-center">অনুদান ফর্ম</h2>
              
              {/* Google Form Button */}
              <div className="text-center mb-8">
                <p className="text-youth-dark-gray mb-4">
                  অনুদান ফর্ম পূরণ করতে নিচের বাটনে ক্লিক করুন
                </p>
                <Button 
                  onClick={handleGoogleFormClick}
                  className="w-full bg-youth-purple hover:bg-youth-purple/90 py-3 text-lg"
                >
                  Google Form এ যান
                </Button>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-youth-dark-gray mb-2">আপনার অনুদান কতটা পার্থক্য তৈরি করতে পারে</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  {donationOptions.map((option) => (
                    <button
                      key={option.amount}
                      type="button"
                      className={`p-2 text-center rounded-md border ${
                        selectedAmount === option.amount 
                          ? 'bg-youth-purple text-white border-youth-purple' 
                          : 'border-gray-300 hover:border-youth-purple hover:bg-youth-purple/10'
                      }`}
                      onClick={() => handleDonationSelect(option.amount)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">অন্যান্য উপায়ে সাহায্য করুন</h3>
              <p className="text-youth-dark-gray mb-4">
                অনুদান ছাড়াও আপনি আমাদের অন্যভাবে সাহায্য করতে পারেন:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-youth-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-youth-purple" />
                  </div>
                  <div><a href="/volunteer" className="text-youth-purple hover:underline">স্বেচ্ছাসেবক হিসেবে যোগ দিন</a></div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-youth-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-youth-purple" />
                  </div>
                  <div>আমাদের প্রোগ্রাম সম্পর্কে বন্ধুদের জানান</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-youth-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-youth-purple" />
                  </div>
                  <div>সংস্থাগত পার্টনারশিপের জন্য <a href="/contact" className="text-youth-purple hover:underline">যোগাযোগ করুন</a></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </Layout>
  );
};

export default Donate;
