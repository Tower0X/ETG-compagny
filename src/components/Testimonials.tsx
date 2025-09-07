import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Marie Dubois',
      position: 'Directrice Générale, Groupe Immobilier Dubois',
      content: 'ETG a réalisé la rénovation complète de notre siège social. Leur professionnalisme et le respect des délais ont été remarquables. Je recommande vivement leurs services.',
      rating: 5,
      image: '/P3.png'
    },
    {
      name: 'Jean-Pierre Martin',
      position: 'PDG, Construction Martin & Fils',
      content: 'Partenaire de confiance depuis 5 ans, ETG nous accompagne sur tous nos projets d\'envergure. Leur expertise technique et leur réactivité sont exceptionnelles.',
      rating: 5,
      image: '/P3.png'
    },
    {
      name: 'Sophie Leroy',
      position: 'Maire de Villeneuve',
      content: 'La construction de notre complexe aquatique municipal s\'est déroulée parfaitement. ETG a su s\'adapter à nos contraintes budgétaires tout en maintenant la qualité.',
      rating: 5,
      image: '/P3.png'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-display">
            Témoignages Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La satisfaction de nos clients est notre plus belle récompense. 
            Découvrez leurs retours d'expérience.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-light p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 fade-in relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-primary text-sm font-medium">{testimonial.position}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary-light fill-current" />
                ))}
              </div>

              <p className="text-charcoal leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 fade-in">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-light mb-2">98%</div>
            <div className="text-charcoal">Clients Satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-light mb-2">500+</div>
            <div className="text-charcoal">Projets Réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-light mb-2">15+</div>
            <div className="text-charcoal">Années d'Expérience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-light mb-2">50+</div>
            <div className="text-charcoal">Collaborateurs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;