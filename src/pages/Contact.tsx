import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [consultationData, setConsultationData] = useState({
    name: '',
    email: '',
    grade: '',
    preferredTime: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [consultationSuccess, setConsultationSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleConsultationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setConsultationData({
      ...consultationData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS (you'll need to set up your EmailJS account)
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'info@studyintrust.com'
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
    }
    
    setIsSubmitting(false);
  };

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_CONSULTATION_TEMPLATE_ID',
        {
          from_name: consultationData.name,
          from_email: consultationData.email,
          grade: consultationData.grade,
          preferred_time: consultationData.preferredTime,
          to_email: 'info@studyintrust.com'
        },
        'YOUR_PUBLIC_KEY'
      );
      
      setConsultationSuccess(true);
      setConsultationData({
        name: '',
        email: '',
        grade: '',
        preferredTime: ''
      });
      
      setTimeout(() => {
        setConsultationSuccess(false);
        setShowConsultationForm(false);
      }, 3000);
    } catch (error) {
      console.error('Error scheduling consultation:', error);
      alert('Sorry, there was an error scheduling your consultation. Please try again or contact us directly.');
    }
    
    setIsSubmitting(false);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello, I'm interested in joining Trust. My name is [Your Name]. I have a question about...");
    const whatsappUrl = `https://wa.me/971505778230?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  if (showConsultationForm) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Schedule Free Consultation</h2>
              <p className="text-gray-600">Let's discuss your learning goals and find the perfect program for you</p>
            </div>
            
            {consultationSuccess ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Consultation Scheduled!</h3>
                <p className="text-gray-600 mb-4">
                  Thanks! We've received your consultation request and will contact you soon to confirm the time.
                </p>
                <button
                  onClick={() => setShowConsultationForm(false)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Back to Contact
                </button>
              </div>
            ) : (
              <form onSubmit={handleConsultationSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="consultation-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="consultation-name"
                      name="name"
                      value={consultationData.name}
                      onChange={handleConsultationChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="consultation-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="consultation-email"
                      name="email"
                      value={consultationData.email}
                      onChange={handleConsultationChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="consultation-grade" className="block text-sm font-medium text-gray-700 mb-2">
                      Grade Level *
                    </label>
                    <select
                      id="consultation-grade"
                      name="grade"
                      value={consultationData.grade}
                      onChange={handleConsultationChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Grade</option>
                      <option value="grade-4">Grade 4</option>
                      <option value="grade-5">Grade 5</option>
                      <option value="grade-6">Grade 6</option>
                      <option value="grade-7">Grade 7</option>
                      <option value="grade-8">Grade 8</option>
                      <option value="grade-9">Grade 9</option>
                      <option value="grade-10">Grade 10</option>
                      <option value="grade-11">Grade 11</option>
                      <option value="grade-12">Grade 12</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="consultation-time" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="consultation-time"
                      name="preferredTime"
                      value={consultationData.preferredTime}
                      onChange={handleConsultationChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Time</option>
                      <option value="morning-9am-12pm">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon-12pm-4pm">Afternoon (12 PM - 4 PM)</option>
                      <option value="evening-4pm-8pm">Evening (4 PM - 8 PM)</option>
                      <option value="weekend-morning">Weekend Morning</option>
                      <option value="weekend-afternoon">Weekend Afternoon</option>
                    </select>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <Calendar className="h-5 w-5" />
                    <span>{isSubmitting ? 'Scheduling...' : 'Schedule Consultation'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowConsultationForm(false)}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-blue-600">Trust</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your learning journey? Get in touch with us today for a free consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Thanks! We've received your message and will reply soon.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your learning goals and how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">info@studyintrust.com</p>
                    <p className="text-gray-600">admissions@studyintrust.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Call or WhatsApp</h3>
                    <p className="text-gray-600">+971 50 577 8230</p>
                    <p className="text-sm text-gray-500">Available: Sunday - Thursday, 9 AM - 9 PM (UTC+4)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Serving students across the UAE and Gulf region</p>
                    <p className="text-sm text-gray-500">Online classes available worldwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Hours</h3>
                    <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 9:00 PM</p>
                    <p className="text-gray-600">Friday - Saturday: 10:00 AM - 6:00 PM</p>
                    <p className="text-sm text-gray-500">All times are UTC+4 (UAE Time)</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="https://studyintrust.com/online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors duration-200"
                  >
                    Access LMS Platform
                  </a>
                  <button 
                    onClick={() => setShowConsultationForm(true)}
                    className="block w-full bg-green-600 text-white px-4 py-2 rounded-lg text-center hover:bg-green-700 transition-colors duration-200"
                  >
                    Schedule Free Consultation
                  </button>
                  <button 
                    onClick={handleWhatsAppClick}
                    className="block w-full bg-green-500 text-white px-4 py-2 rounded-lg text-center hover:bg-green-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Send WhatsApp Message</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;