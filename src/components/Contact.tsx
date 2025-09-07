import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Téléphone',
      details: ['+237 697190774']
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['kenfacfabrice@gmail.com']
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Adresse',
      details: ['Douala, Cameroun']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horaires',
      details: ['Lun - Ven : 8h00 - 18h00', 'Sam : 9h00 - 12h00']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-display">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Prêt à concrétiser votre projet ? Notre équipe d'experts est à votre écoute 
            pour vous accompagner et vous conseiller.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="fade-in">
            <div className="bg-gray-light p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Demandez votre devis gratuit
              </h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Merci ! Votre message a été envoyé avec succès. Nous vous recontacterons rapidement.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-light focus:ring-2 focus:ring-primary/20 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-light focus:ring-2 focus:ring-primary/20 transition-colors"
                      placeholder="votre@email.fr"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-light focus:ring-2 focus:ring-primary/20 transition-colors"
                      placeholder="+237 697190774"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service souhaité *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-light focus:ring-2 focus:ring-primary/20 transition-colors"
                    >
                      <option value="">Sélectionner un service</option>
                      <option value="genie-civil">Génie Civil</option>
                      <option value="facade">Revêtement de Façade</option>
                      <option value="electricite">Électricité</option>
                      <option value="piscines">Piscines</option>
                      <option value="import-export">Import-Export</option>
                      <option value="consulting">Consulting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Description du projet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-light focus:ring-2 focus:ring-primary/20 transition-colors"
                    placeholder="Décrivez votre projet en détail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full contact-button py-4 px-6 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="fade-in">
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-primary-bg rounded-xl hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-light"
                >
                  <div className="text-primary-light bg-white p-3 rounded-lg shadow-sm">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-charcoal font-medium">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-primary-bg h-64 rounded-2xl flex items-center justify-center border-2 border-primary-light/20">
              <div className="text-center text-charcoal">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="text-lg font-medium">Carte Google Maps</p>
                <p className="text-sm">Douala, Cameroun</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;