import React from 'react';
import { Building, Palette, Zap, Waves, Globe, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Building className="w-12 h-12" />,
      title: 'Génie Civil',
      description: 'Construction, terrassement, gros œuvre et infrastructure. Expertise complète pour tous vos projets de construction.',
      features: ['Fondations', 'Terrassement', 'Gros œuvre', 'Infrastructure']
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Revêtement de Façade',
      description: 'Isolation, bardage, enduits et rénovation de façades. Redonnez vie à vos bâtiments.',
      features: ['Isolation thermique', 'Bardage', 'Enduits', 'Rénovation']
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Électricité',
      description: 'Installation électrique, domotique et solutions énergétiques modernes et sécurisées.',
      features: ['Installation', 'Domotique', 'Énergies renouvelables', 'Maintenance']
    },
    {
      icon: <Waves className="w-12 h-12" />,
      title: 'Piscines',
      description: 'Conception et construction de piscines sur mesure. Transformez votre espace en oasis de détente.',
      features: ['Piscines enterrées', 'Piscines hors-sol', 'Spa et jacuzzi', 'Entretien']
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Import-Export',
      description: 'Solutions logistiques et commerciales internationales. Développez votre business à l\'international.',
      features: ['Sourcing', 'Logistique', 'Douanes', 'Distribution']
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Consulting',
      description: 'Conseil stratégique et expertise technique pour optimiser vos projets et votre performance.',
      features: ['Audit technique', 'Stratégie', 'Formation', 'Accompagnement']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-display">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une gamme complète de services pour répondre à tous vos besoins, 
            de la conception à la réalisation de vos projets les plus ambitieux.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-light p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 fade-in"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-primary-light transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-charcoal mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-charcoal">
                    <div className="w-2 h-2 bg-primary-light rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-primary font-semibold hover:text-primary-light transition-colors duration-200 flex items-center">
                En savoir plus
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-in">
          <a
            href="#contact"
            className="inline-block contact-button text-lg"
          >
            Discutons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;