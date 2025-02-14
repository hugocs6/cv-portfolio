'use client';

import { useState, useRef } from 'react';
import { Mail, Send, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactInfo = ({ icon: Icon, label, value, href, darkMode }) => (
  <a
    href={href}
    className={`
      flex items-center gap-3 p-4 rounded-lg
      ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'}
      transition-all duration-300 hover:transform hover:-translate-y-1
      border ${darkMode ? 'border-gray-700' : 'border-gray-200'}
    `}
  >
    <Icon className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
    <div>
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{label}</p>
      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{value}</p>
    </div>
  </a>
);

const Contact = ({ isVisible, darkMode }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.sendForm(
        'service_c6i6btc',
        'template_contact',
        form.current,
        'H2gEFKizZWANhbuWQ'
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({ from_name: '', from_email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isVisible) return null;

  return (
    <div className="space-y-8 py-4">
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ContactInfo
          icon={Mail}
          label="Email"
          value="hugo.cannier@efrei.net"
          href="mailto:hugo.cannier@efrei.net"
          darkMode={darkMode}
        />
        <ContactInfo
          icon={Phone}
          label="Téléphone"
          value="+33 7 78 66 43 51"
          href="tel:+33778664351"
          darkMode={darkMode}
        />
        <ContactInfo
          icon={MapPin}
          label="Localisation"
          value="Région parisienne"
          href="#"
          darkMode={darkMode}
        />
      </div>

      {/* Contact Form */}
      <div className={`
        rounded-xl p-6
        ${darkMode ? 'bg-gray-800' : 'bg-white'}
        border ${darkMode ? 'border-gray-700' : 'border-gray-200'}
      `}>
        <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Envoyez-moi un message
        </h3>
        
        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label 
                htmlFor="from_name" 
                className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              >
                Nom
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                className={`
                  w-full px-4 py-2 rounded-lg
                  ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'}
                  border ${darkMode ? 'border-gray-600' : 'border-gray-300'}
                  focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-colors duration-200
                `}
              />
            </div>
            <div>
              <label 
                htmlFor="from_email" 
                className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              >
                Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                className={`
                  w-full px-4 py-2 rounded-lg
                  ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'}
                  border ${darkMode ? 'border-gray-600' : 'border-gray-300'}
                  focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-colors duration-200
                `}
              />
            </div>
          </div>
          
          <div>
            <label 
              htmlFor="subject" 
              className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className={`
                w-full px-4 py-2 rounded-lg
                ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'}
                border ${darkMode ? 'border-gray-600' : 'border-gray-300'}
                focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-colors duration-200
              `}
            />
          </div>
          
          <div>
            <label 
              htmlFor="message" 
              className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className={`
                w-full px-4 py-2 rounded-lg
                ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'}
                border ${darkMode ? 'border-gray-600' : 'border-gray-300'}
                focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-colors duration-200
                resize-none
              `}
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              flex items-center justify-center gap-2
              w-full md:w-auto px-6 py-2 rounded-lg
              bg-blue-500 hover:bg-blue-600
              text-white font-medium
              transition-colors duration-200
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? 'Envoi...' : 'Envoyer'}
          </button>

          {submitStatus === 'success' && (
            <p className="text-green-500 text-sm mt-2">
              Message envoyé avec succès !
            </p>
          )}

          {submitStatus === 'error' && (
            <p className="text-red-500 text-sm mt-2">
              Une erreur est survenue. Veuillez réessayer.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;