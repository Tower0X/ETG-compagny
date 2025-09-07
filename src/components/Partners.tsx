import React from 'react';
import { Award, Shield, CheckCircle } from 'lucide-react';

const Partners: React.FC = () => {
  const certifications = [
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Qualibat RGE',
      description: 'Certification qualité pour les travaux de rénovation énergétique'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'ISO 9001',
      description: 'Management de la qualité certifié selon les standards internationaux'
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: 'Qualifelec',
      description: 'Qualification professionnelle pour les installations électriques'
    }
  ];

  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-display">
            Partenaires & Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Notre réseau de partenaires de confiance et nos certifications 
            garantissent la qualité et la conformité de nos prestations.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 fade-in border-t-4 border-primary-light"
            >
              <div className="text-primary-light mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {cert.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{cert.title}</h3>
              <p className="text-charcoal leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Partners Logos */}
        <div className="bg-white rounded-2xl p-8 shadow-lg fade-in">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Nos Partenaires de Confiance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-primary font-bold text-xl hover:text-primary-light transition-colors">LAFARGE</div>
            <div className="text-primary font-bold text-xl hover:text-primary-light transition-colors">SCHNEIDER</div>
            <div className="text-primary font-bold text-xl hover:text-primary-light transition-colors">LEGRAND</div>
            <div className="text-primary font-bold text-xl hover:text-primary-light transition-colors">VINCI</div>
            <div className="text-primary font-bold text-xl hover:text-primary-light transition-colors">BOUYGUES</div>
            <div className="text-primary font-bold text-xl hover:text-primary-light transition-colors">EIFFAGE</div>
            <div className="text-primary font-bold text-xl hover:text-primary-light transition-colors">COLAS</div>
            <div className="text-primary font-bold text-xl hover:text-primary-light transition-colors">SPIE</div>
          </div>
        </div>

        {/* Guarantees */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 fade-in">
          <div className="bg-primary-bg p-8 rounded-2xl border-l-4 border-primary-light">
            <h4 className="text-2xl font-bold text-primary mb-4">Garanties & Assurances</h4>
            <ul className="space-y-3 text-charcoal">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary-light mr-3" />
                Garantie décennale tous corps d'état
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary-light mr-3" />
                Assurance responsabilité civile professionnelle
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary-light mr-3" />
                Service après-vente réactif
              </li>
            </ul>
          </div>
          
          <div className="bg-primary-bg p-8 rounded-2xl border-l-4 border-primary-light">
            <h4 className="text-2xl font-bold text-primary mb-4">Engagements Environnementaux</h4>
            <ul className="space-y-3 text-charcoal">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary-light mr-3" />
                Utilisation de matériaux éco-responsables
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary-light mr-3" />
                Gestion et tri des déchets de chantier
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary-light mr-3" />
                Solutions énergétiques durables
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;