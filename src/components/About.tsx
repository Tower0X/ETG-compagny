import React from 'react';
import { Award, Clock, Lightbulb, Shield } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Qualité',
      description: 'Nous privilégions toujours l\'excellence dans chaque projet'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Fiabilité',
      description: 'Votre confiance est notre priorité absolue'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Solutions modernes et technologies de pointe'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Respect des délais',
      description: 'Engagement ferme sur nos plannings de livraison'
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-display">
            À propos d'ETG
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Forte de plusieurs années d'expérience, ETG s'impose comme un acteur incontournable 
            du BTP et du consulting, alliant savoir-faire traditionnel et innovation technologique.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="fade-in">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-display">
              Notre expertise au service de vos ambitions
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Depuis notre création, nous avons développé une expertise unique dans des domaines 
              variés et complémentaires. Notre approche multidisciplinaire nous permet d'offrir 
              des solutions complètes et sur mesure.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Que ce soit pour vos projets de construction, vos besoins en énergie, ou vos 
              stratégies d'import-export, nous mettons notre expérience et notre réseau au 
              service de votre réussite.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary-bg px-4 py-2 rounded-full">
                <span className="text-primary font-semibold">15+ années d'expérience</span>
              </div>
              <div className="bg-primary-bg px-4 py-2 rounded-full">
                <span className="text-primary font-semibold">500+ projets réalisés</span>
              </div>
              <div className="bg-primary-bg px-4 py-2 rounded-full">
                <span className="text-primary font-semibold">98% clients satisfaits</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="fade-in">
            <img
              src="https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Équipe ETG au travail"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2 fade-in border-l-4 border-primary-light"
            >
              <div className="text-primary-light mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-black mb-3">{value.title}</h4>
              <p className="text-charcoal leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;