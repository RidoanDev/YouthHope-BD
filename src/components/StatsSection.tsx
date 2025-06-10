
const stats = [
  { id: 1, name: 'সহায়তা প্রাপ্ত তরুণ', value: '১০,০০০+' },
  { id: 2, name: 'সফল ইভেন্টস', value: '৫০+' },
  { id: 3, name: 'কমিউনিটি সদস্য', value: '৫,০০০+' },
  { id: 4, name: 'সাকসেস স্টোরি', value: '১০০+' },
];

const StatsSection = () => {
  return (
    <section className="py-12 bg-youth-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white p-6 rounded-lg shadow-sm card-hover">
              <p className="text-4xl font-bold text-youth-purple">{stat.value}</p>
              <p className="mt-2 text-youth-dark-gray font-medium">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
