
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 bg-youth-soft-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-3 text-youth-purple">আমাদের সাথে যুক্ত হন</h2>
        <p className="text-youth-dark-gray mb-8 max-w-2xl mx-auto">বাংলাদেশের তরুণদের সাহায্য করতে আমাদের সাথে যোগ দিন। আপনি স্বেচ্ছাসেবক হিসেবে, ডোনেট করে বা আমাদের কমিউনিটিতে যোগ দিয়ে সাহায্য করতে পারেন।</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/volunteer" className="button-primary">
            স্বেচ্ছাসেবক হন
          </Link>
          <Link to="/donate" className="button-secondary">
            ডোনেট করুন
          </Link>
          <Link to="/community" className="bg-white border border-youth-purple text-youth-purple px-4 py-2 rounded-md hover:bg-youth-purple hover:text-white transition-colors inline-flex items-center justify-center">
            কমিউনিটিতে যোগ দিন
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
