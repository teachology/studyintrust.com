import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { teachers } from '../data/teachers';
import { ArrowLeft, Mail, MessageCircle, Award, BookOpen, Star, CheckCircle } from 'lucide-react';

const TeacherProfile = () => {
  const { id } = useParams<{ id: string }>();
  const teacher = teachers.find(t => t.id === id);

  if (!teacher) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Teacher Not Found</h1>
          <Link
            to="/staff"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Back to Staff
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/staff"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Staff</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <img
                src={teacher.photo}
                alt={teacher.name}
                className="w-full max-w-sm mx-auto lg:mx-0 rounded-xl shadow-lg"
              />
            </div>
            
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{teacher.name}</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {teacher.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {subject}
                  </span>
                ))}
              </div>
              <p className="text-lg text-gray-600 mb-6">{teacher.experience}</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Book a Session</span>
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Send Message</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Teaching Philosophy */}
              <div className="bg-blue-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Star className="h-6 w-6 text-blue-600" />
                  <span>Teaching Philosophy</span>
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {teacher.philosophy}
                </p>
              </div>

              {/* Qualifications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                  <Award className="h-6 w-6 text-blue-600" />
                  <span>Qualifications</span>
                </h2>
                <div className="space-y-3">
                  {teacher.qualifications.map((qualification, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{qualification}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specializations */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                  <span>Specializations</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {teacher.specializations.map((specialization, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <span className="text-gray-700 font-medium">{specialization}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Achievements */}
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h3>
                <ul className="space-y-3">
                  {teacher.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Star className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Started</h3>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="block w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Schedule Free Consultation
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full bg-white text-blue-600 border-2 border-blue-600 px-4 py-3 rounded-lg text-center font-medium hover:bg-blue-50 transition-colors duration-200"
                  >
                    Request More Information
                  </Link>
                </div>
              </div>

              {/* Subjects Taught */}
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Subjects Taught</h3>
                <div className="space-y-2">
                  {teacher.subjects.map((subject, index) => (
                    <div key={index} className="bg-white px-3 py-2 rounded-lg">
                      <span className="text-gray-700 font-medium">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeacherProfile;