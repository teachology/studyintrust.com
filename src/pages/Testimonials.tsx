import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  grade: string;
  subject: string;
  rating: number;
  content: string;
  achievement: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Fatima Al-Zahra",
      role: "Student",
      grade: "Grade 12",
      subject: "AP Physics & Chemistry",
      rating: 5,
      content: "Trust transformed my understanding of physics and chemistry. Dr. Sarah's teaching style made complex concepts so clear. I went from struggling with C grades to scoring 5s on both AP exams! The live Zoom classes felt just like being in a real classroom.",
      achievement: "AP Physics: 5, AP Chemistry: 5"
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      role: "Student",
      grade: "Grade 11",
      subject: "AP Calculus & SAT Math",
      rating: 5,
      content: "Professor Chen is absolutely amazing! His method of explaining calculus concepts helped me not just pass, but truly understand mathematics. My SAT Math score improved by 180 points after just 3 months of classes with Trust.",
      achievement: "SAT Math: 780/800"
    },
    {
      id: 3,
      name: "Mariam Abdullah",
      role: "Parent",
      grade: "Grade 10",
      subject: "IGCSE Biology & Chemistry",
      rating: 5,
      content: "As a parent, I'm incredibly impressed with Trust's approach. My daughter's confidence in science subjects has grown tremendously. Dr. Ahmed's virtual lab sessions are engaging and educational. The Moodle platform keeps me updated on her progress.",
      achievement: "IGCSE Biology: A*, Chemistry: A*"
    },
    {
      id: 4,
      name: "Omar Al-Rashid",
      role: "Student",
      grade: "Grade 12",
      subject: "AP English Literature",
      rating: 5,
      content: "Ms. Emma helped me develop my writing and analytical skills beyond what I thought possible. Her feedback was always constructive and encouraging. I not only scored a 5 on AP English Literature but also got accepted to my dream university!",
      achievement: "AP English Literature: 5, Accepted to NYU"
    },
    {
      id: 5,
      name: "Layla Mohammed",
      role: "Student",
      grade: "Grade 9",
      subject: "Computer Science & ICT",
      rating: 5,
      content: "Professor Kim made programming fun and accessible. I started with zero coding experience and now I'm building my own websites and apps. The practical approach and real-world projects helped me discover my passion for technology.",
      achievement: "Built 3 web applications, Won school coding competition"
    },
    {
      id: 6,
      name: "Khalid Al-Mansoori",
      role: "Parent",
      grade: "Grade 8",
      subject: "Mathematics & Science",
      rating: 5,
      content: "Trust has been a game-changer for our family. The quality of teaching is exceptional, and the flexibility of online classes fits perfectly with our schedule. My son's grades have improved significantly, and more importantly, he now enjoys learning.",
      achievement: "Overall grade improvement: C+ to A-"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * testimonialsPerPage,
    (currentIndex + 1) * testimonialsPerPage
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Student <span className="text-blue-600">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our students and parents about their transformative learning experiences with Trust
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={prevTestimonials}
                className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors duration-200"
                disabled={totalPages <= 1}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      i === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonials}
                className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors duration-200"
                disabled={totalPages <= 1}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 relative">
                  <Quote className="h-8 w-8 text-blue-200 absolute top-4 right-4" />
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Achievement Badge */}
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    {testimonial.achievement}
                  </div>
                  
                  {/* Author Info */}
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.role} • {testimonial.grade}</p>
                    <p className="text-gray-600 text-sm">{testimonial.subject}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Track Record</h2>
            <p className="text-xl text-blue-100">Numbers that speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">AP Students Score 4+</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-blue-100">Average SAT Score Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Successful Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-100">Parent Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your journey to academic excellence with Trust's expert teachers and proven methods
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Schedule Free Trial Class
            </button>
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              Learn More About Our Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;