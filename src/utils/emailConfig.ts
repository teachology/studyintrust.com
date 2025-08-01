// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and get your service ID, template ID, and public key
// 3. Replace the placeholder values below with your actual EmailJS credentials

export const emailConfig = {
  serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  templateId: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID for contact form
  consultationTemplateId: 'YOUR_CONSULTATION_TEMPLATE_ID', // Replace with your EmailJS template ID for consultations
  publicKey: 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
};

// Email template for contact form should include:
// - {{from_name}} - sender's name
// - {{from_email}} - sender's email
// - {{subject}} - message subject
// - {{message}} - message content
// - {{to_email}} - recipient email (info@studyintrust.com)

// Email template for consultation should include:
// - {{from_name}} - student's name
// - {{from_email}} - student's email
// - {{grade}} - student's grade level
// - {{preferred_time}} - preferred consultation time
// - {{to_email}} - recipient email (info@studyintrust.com)