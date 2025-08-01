import React from 'react';
import { Target, Eye, Users, BookOpen, Award, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Trust</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering Gulf students with world-class education through innovative online learning solutions
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the leading online education center in the Gulf region, providing world-class educational 
                experiences that prepare students for global academic success. We envision a future where every 
                student has access to premium international education from the comfort of their home.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To deliver exceptional online education through live interactive classes, comprehensive curriculum 
                support, and personalized learning experiences. We are committed to helping Gulf students excel 
                in American, AP, and IGCSE programs while preparing them for international standardized exams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Story</h2>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Trust was founded with a simple yet powerful vision: to bridge the gap between traditional 
                education and the evolving needs of international students in the Gulf region. Recognizing 
                the unique challenges faced by students in American international schools, we set out to 
                create a comprehensive online learning platform that combines the best of both worlds.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our journey began when we noticed the growing demand for specialized support in American 
                curriculum, Advanced Placement courses, and IGCSE programs. Students needed more than just 
                textbook learning – they needed expert guidance, interactive engagement, and comprehensive 
                exam preparation.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, Trust stands as a testament to educational innovation, serving students from Grade 4 
                to Grade 12 with live Zoom classes, integrated Moodle LMS, and personalized learning paths. 
                Our success is measured not just in academic achievements, but in the confidence and 
                preparedness we instill in our students for their future endeavors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Makes Trust Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Qualified Teacher Pool</h3>
              <p className="text-gray-600">
                Our educators are carefully selected professionals with extensive experience in American, 
                AP, and IGCSE curricula, bringing real-world knowledge to virtual classrooms.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Moodle LMS Integration</h3>
              <p className="text-gray-600">
                Seamless integration with our comprehensive Learning Management System provides 
                students with 24/7 access to resources, assignments, and progress tracking.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Exam Prep</h3>
              <p className="text-gray-600">
                Specialized preparation programs for SAT1, ACT1, ACT2, EST1, and EST2 ensure 
                students are fully prepared for their academic milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Experience the Trust Difference</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our community of successful learners and discover how we can help you achieve your academic goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://studyintrust.com/online"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Explore Our Platform</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;