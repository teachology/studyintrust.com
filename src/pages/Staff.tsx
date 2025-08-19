import React from 'react';
import { Link } from 'react-router-dom';
import { teachers } from '../data/teachers';
import { User, BookOpen, Award } from 'lucide-react';

const Staff = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-blue-600">Expert Staff</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from qualified educators with extensive experience in American, AP, and IGCSE curricula
            </p>
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="w-full h-96 object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{teacher.name}</h3>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {teacher.subjects.slice(0, 2).map((subject, index) => (
                        <span
                          key={index}
                          className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
                        >
                          {subject}
                        </span>
                      ))}
                      {teacher.subjects.length > 2 && (
                        <span className="inline-block bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">
                          +{teacher.subjects.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {teacher.experience}
                  </p>
                  <Link
                    to={`/teacher/${teacher.id}`}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <User className="h-4 w-4" />
                    <span>View Profile</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Teachers Are Different */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Teachers Excel</h2>
            <p className="text-xl text-gray-600">What sets our educators apart in online learning</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Qualifications</h3>
              <p className="text-gray-600">
                All our teachers hold advanced degrees from prestigious universities and have specialized 
                training in their subject areas with proven track records of student success.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Curriculum Experts</h3>
              <p className="text-gray-600">
                Deep understanding of American, AP, and IGCSE curricula with years of experience 
                preparing students for international standardized exams and college admissions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Approach</h3>
              <p className="text-gray-600">
                Each teacher adapts their teaching style to meet individual student needs, 
                ensuring every learner receives the support they need to excel academically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Learn from the Best?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a consultation to find the perfect teacher match for your learning goals
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Staff;