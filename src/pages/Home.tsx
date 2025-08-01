import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Clock, ExternalLink, Calendar, Star, MessageCircle } from 'lucide-react';

const Home = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello, I'm interested in joining Trust. My name is [Your Name]. I have a question about...");
    const whatsappUrl = `https://wa.me/971505778230?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Live Zoom Classes",
      description: "Interactive online sessions with experienced teachers"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Moodle LMS Integration",
      description: "Comprehensive learning management system for all your study needs"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Expert Teachers",
      description: "Qualified educators specializing in American, AP, and IGCSE curricula"
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Full Exam Preparation",
      description: "Complete preparation for SAT1, ACT1, ACT2, EST1, EST2"
    }
  ];

  const upcomingBatches = [
    { course: "AP Physics", date: "Starting Feb 15, 2025", time: "4:00 PM - 6:00 PM UTC+4" },
    { course: "SAT Math Prep", date: "Starting Feb 20, 2025", time: "6:00 PM - 8:00 PM UTC+4" },
    { course: "IGCSE Chemistry", date: "Starting Feb 25, 2025", time: "3:00 PM - 5:00 PM UTC+4" },
    { course: "ACT English", date: "Starting Mar 1, 2025", time: "5:00 PM - 7:00 PM UTC+4" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Learn Smarter, Achieve Higher – 
              <span className="text-blue-600"> Join Trust Today</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Premier online education center for Gulf students studying American, AP, and IGCSE curricula. 
              From Grade 4 to Grade 12, we prepare you for academic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Join a Free Trial Class</span>
                <Star className="h-5 w-5" />
              </Link>
              <a
                href="https://studyintrust.com/online"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Access LMS Platform</span>
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
            
            {/* Additional Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Link
                to="/contact"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule Free Consultation</span>
              </Link>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Educational Systems We Support</h2>
            <p className="text-xl text-gray-600">Comprehensive programs designed for international students</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">American Curriculum</h3>
              <p className="text-gray-700 mb-4">Complete Grade 4-12 program following American educational standards with emphasis on critical thinking and practical application.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Math, Science, English, Social Studies</li>
                <li>• Grade-appropriate skill development</li>
                <li>• College preparation focus</li>
              </ul>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Advanced Placement (AP)</h3>
              <p className="text-gray-700 mb-4">College-level courses that give students the opportunity to earn college credit while still in high school.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• AP Physics, Chemistry, Biology</li>
                <li>• AP Calculus, Statistics</li>
                <li>• AP English Literature</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">IGCSE Program</h3>
              <p className="text-gray-700 mb-4">International General Certificate of Secondary Education preparing students for A-levels and university admission.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Math, Physics, Chemistry, Biology</li>
                <li>• ICT and Computer Science</li>
                <li>• English Language & Literature</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Trust?</h2>
            <p className="text-xl text-gray-600">Experience the difference with our comprehensive learning approach</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Batches */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Online Batches</h2>
            <p className="text-xl text-gray-600">Join our next cohort of successful students</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingBatches.map((batch, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors duration-200">
                <div className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{batch.course}</h3>
                    <p className="text-blue-600 font-medium mb-1">{batch.date}</p>
                    <p className="text-gray-600">{batch.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Register for Classes
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful students who have achieved their academic goals with Trust
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </Link>
            <a
              href="https://studyintrust.com/online"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Explore Our LMS</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;