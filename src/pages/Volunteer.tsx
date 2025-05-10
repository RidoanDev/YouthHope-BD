
import { useState } from 'react';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const volunteerTeams = [
  {
    name: "ইভেন্ট টিম",
    description: "ইভেন্ট প্ল্যানিং এবং এক্সিকিউশনে সাহায্য করা",
    requirements: ["যোগাযোগ দক্ষতা", "টিমে কাজ করার ক্ষমতা", "ইভেন্ট ম্যানেজমেন্টে আগ্রহ"]
  },
  {
    name: "কনটেন্ট ক্রিয়েশন টিম",
    description: "আর্টিকেল, ব্লগ এবং সোশ্যাল মিডিয়া কনটেন্ট তৈরি",
    requirements: ["লেখার দক্ষতা", "সৃজনশীলতা", "বাংলা এবং ইংরেজি ভাষার দক্ষতা"]
  },
  {
    name: "মেন্টরশিপ টিম",
    description: "তরুণদের ক্যারিয়ার এবং স্কিল ডেভেলপমেন্টে মেন্টরিং",
    requirements: ["পেশাগত অভিজ্ঞতা", "মেন্টরিং স্কিল", "তরুণদের সাহায্য করার আগ্রহ"]
  },
  {
    name: "মাল্টিমিডিয়া টিম",
    description: "ভিডিও এডিটিং, গ্রাফিক্স ডিজাইন এবং ফটোগ্রাফি",
    requirements: ["গ্রাফিক ডিজাইন দক্ষতা", "ভিডিও এডিটিং দক্ষতা", "ফটোগ্রাফি দক্ষতা"]
  },
  {
    name: "অ্যাডমিনিস্ট্রেশন টিম",
    description: "সংস্থার দৈনন্দিন কার্যক্রম পরিচালনা",
    requirements: ["সংগঠন দক্ষতা", "সময় ব্যবস্থাপনা দক্ষতা", "লজিস্টিকস ম্যানেজমেন্ট"]
  },
  {
    name: "ডিজিটাল মার্কেটিং টিম",
    description: "সোশ্যাল মিডিয়া ম্যানেজমেন্ট এবং মার্কেটিং",
    requirements: ["সোশ্যাল মিডিয়া দক্ষতা", "মার্কেটিং ধারণা", "সৃজনশীল চিন্তাভাবনা"]
  }
];

const volunteerStories = [
  {
    name: "রাফি আহমেদ",
    role: "ইভেন্ট টিম",
    story: "ইয়ুথ হোপে স্বেচ্ছাসেবক হিসেবে কাজ করে আমি নেটওয়ার্কিং এবং ইভেন্ট ম্যানেজমেন্টে অভিজ্ঞতা অর্জন করেছি। এটি আমার ক্যারিয়ারে একটি বড় প্লাস পয়েন্ট হয়েছে।",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    name: "নাজনীন আক্তার",
    role: "কনটেন্ট ক্রিয়েশন টিম",
    story: "স্বেচ্ছাসেবক হিসেবে লেখালেখি করার মাধ্যমে আমি আমার লেখার দক্ষতা উন্নত করেছি এবং একটি পোর্টফোলিও তৈরি করেছি যা আমাকে চাকরি পেতে সাহায্য করেছে।",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "তানভীর হোসেন",
    role: "মাল্টিমিডিয়া টিম",
    story: "স্বেচ্ছাসেবক হিসেবে ভিডিও এডিটিং এবং গ্রাফিক ডিজাইনের কাজ করে আমি নিজের স্কিল উন্নত করার পাশাপাশি সমাজের উন্নতিতে অবদান রাখতে পেরেছি।",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  }
];

const Volunteer = () => {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    experience: "",
    reason: "",
    team: ""
  });

  const handleTeamSelect = (teamName: string) => {
    setSelectedTeam(teamName);
    setFormData({...formData, team: teamName});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleNextStep = () => {
    setFormStep(formStep + 1);
  };

  const handlePrevStep = () => {
    setFormStep(formStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Show success message or redirect
    setFormStep(3);
  };

  return (
    <Layout>
      <div className="bg-youth-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold gradient-text">স্বেচ্ছাসেবক প্রোগ্রাম</h1>
          <p className="mt-4 text-lg text-youth-dark-gray max-w-3xl mx-auto">
            ইয়ুথ হোপ বাংলাদেশের স্বেচ্ছাসেবক হিসেবে যোগ দিন এবং তরুণদের উন্নয়নে সাহায্য করুন
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-4 gradient-text">কেন স্বেচ্ছাসেবক হবেন?</h2>
            <p className="text-youth-dark-gray mb-4">
              ইয়ুথ হোপ বাংলাদেশের স্বেচ্ছাসেবক হিসেবে যোগ দিয়ে আপনি শুধু সমাজের উন্নয়নেই অবদান রাখবেন না, বরং নিজেকেও বিকশিত করবেন। আমাদের স্বেচ্ছাসেবক প্রোগ্রামে অংশগ্রহণ করে আপনি:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-youth-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-youth-purple" />
                </div>
                <span>নতুন দক্ষতা অর্জন করতে পারবেন</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-youth-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-youth-purple" />
                </div>
                <span>পেশাদার নেটওয়ার্ক তৈরি করতে পারবেন</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-youth-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-youth-purple" />
                </div>
                <span>আপনার রিজ্যুমে অ্যাড করার মতো অভিজ্ঞতা অর্জন করতে পারবেন</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-youth-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-youth-purple" />
                </div>
                <span>একটি মূল্যবান কারণের জন্য অবদান রাখতে পারবেন</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-youth-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-youth-purple" />
                </div>
                <span>নতুন বন্ধু এবং সমান চিন্তাধারার মানুষদের সাথে পরিচিত হতে পারবেন</span>
              </li>
            </ul>
            <p className="text-youth-dark-gray">
              আমরা বিশ্বাস করি যে প্রতিটি ব্যক্তির কিছু না কিছু দেওয়ার আছে। আপনার যে কোন দক্ষতা বা আগ্রহই হোক না কেন, আমরা আপনাকে আমাদের টিমে স্বাগত জানাই!
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&q=80" 
              alt="স্বেচ্ছাসেবক টিম" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 gradient-text">স্বেচ্ছাসেবক টিমসমূহ</h2>
            <p className="text-youth-dark-gray max-w-2xl mx-auto">
              আমাদের বিভিন্ন টিমে আপনি আপনার দক্ষতা এবং আগ্রহ অনুযায়ী যোগদান করতে পারেন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerTeams.map((team, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-sm p-6 border-2 transition-all card-hover cursor-pointer ${
                  selectedTeam === team.name 
                    ? 'border-youth-purple' 
                    : 'border-transparent hover:border-youth-purple/30'
                }`}
                onClick={() => handleTeamSelect(team.name)}
              >
                <h3 className="text-xl font-semibold mb-2">{team.name}</h3>
                <p className="text-youth-dark-gray mb-4">{team.description}</p>
                <div>
                  <p className="font-medium mb-2">প্রয়োজনীয় দক্ষতা:</p>
                  <ul className="space-y-1">
                    {team.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-youth-purple/10 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-youth-purple" />
                        </div>
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold mb-2">স্বেচ্ছাসেবক আবেদন ফর্ম</h2>
              <p className="text-youth-dark-gray">ইয়ুথ হোপ বাংলাদেশের স্বেচ্ছাসেবক হওয়ার জন্য নিচের ফর্মটি পূরণ করুন</p>
            </div>

            <div className="p-6">
              {formStep === 1 && (
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">স্টেপ ১: ব্যক্তিগত তথ্য</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-youth-dark-gray mb-1">নাম</label>
                        <input 
                          type="text" 
                          name="name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-youth-purple" 
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-youth-dark-gray mb-1">ইমেইল</label>
                        <input 
                          type="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-youth-purple" 
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-youth-dark-gray mb-1">ফোন নম্বর</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-youth-purple" 
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-youth-dark-gray mb-1">ঠিকানা</label>
                        <input 
                          type="text" 
                          name="address" 
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-youth-purple" 
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button 
                      onClick={handleNextStep} 
                      className="bg-youth-purple hover:bg-youth-purple/90"
                      disabled={!formData.name || !formData.email || !formData.phone || !formData.address}
                    >
                      পরবর্তী
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {formStep === 2 && (
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">স্টেপ ২: আপনার অভিজ্ঞতা এবং আগ্রহ</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-youth-dark-gray mb-1">শিক্ষাগত যোগ্যতা</label>
                        <input 
                          type="text" 
                          name="education" 
                          value={formData.education}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-youth-purple" 
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-youth-dark-gray mb-1">পূর্বের অভিজ্ঞতা (যদি থাকে)</label>
                        <textarea 
                          name="experience" 
                          value={formData.experience}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-youth-purple"
                        ></textarea>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-youth-dark-gray mb-1">কেন আপনি স্বেচ্ছাসেবক হতে চান?</label>
                        <textarea 
                          name="reason" 
                          value={formData.reason}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-youth-purple"
                          required
                        ></textarea>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-youth-dark-gray mb-1">টিম পছন্দ</label>
                        <p className="text-youth-purple mb-2">
                          {formData.team ? formData.team : "কোন টিম নির্বাচন করা হয়নি"}
                        </p>
                        <p className="text-sm text-gray-500">
                          উপরে 'স্বেচ্ছাসেবক টিমসমূহ' সেকশন থেকে আপনার পছন্দের টিম নির্বাচন করুন।
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button 
                      variant="outline" 
                      onClick={handlePrevStep}
                    >
                      পূর্ববর্তী
                    </Button>
                    <Button 
                      onClick={handleSubmit} 
                      className="bg-youth-purple hover:bg-youth-purple/90"
                      disabled={!formData.education || !formData.reason || !formData.team}
                    >
                      জমা দিন
                    </Button>
                  </div>
                </div>
              )}

              {formStep === 3 && (
                <div className="text-center py-8">
                  <div className="h-16 w-16 bg-youth-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-youth-purple" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">আবেদন সফলভাবে জমা হয়েছে!</h3>
                  <p className="text-youth-dark-gray mb-6 max-w-md mx-auto">
                    আপনার আবেদন পর্যালোচনা করা হবে এবং আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব। আপনার আগ্রহের জন্য ধন্যবাদ।
                  </p>
                  <Button className="bg-youth-purple hover:bg-youth-purple/90">
                    হোমপেজে ফিরে যান
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 gradient-text">স্বেচ্ছাসেবকদের গল্প</h2>
            <p className="text-youth-dark-gray max-w-2xl mx-auto">
              আমাদের স্বেচ্ছাসেবকরা কীভাবে ইয়ুথ হোপ বাংলাদেশে অবদান রাখছেন
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {volunteerStories.map((story, index) => (
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
                  <blockquote className="italic text-youth-dark-gray">"{story.story}"</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-youth-soft-green p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">আজই যোগ দিন</h2>
          <p className="text-youth-dark-gray mb-6 max-w-xl mx-auto">
            আপনি যদি সমাজের উন্নয়নে অবদান রাখতে চান এবং নিজেকে বিকশিত করতে চান, তাহলে আজই ইয়ুথ হোপ বাংলাদেশের স্বেচ্ছাসেবক টিমে যোগদান করুন।
          </p>
          <Button 
            className="bg-youth-purple hover:bg-youth-purple/90"
            onClick={() => window.scrollTo({top: 700, behavior: 'smooth'})}
          >
            আবেদন করুন
          </Button>
        </div>
      </div>

      <CallToAction />
    </Layout>
  );
};

export default Volunteer;
