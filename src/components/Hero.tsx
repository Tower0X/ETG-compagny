import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="P3.png"
          alt="Chantier de construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-display leading-tight">
            Votre partenaire de confiance
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Pour tous vos projets de construction, énergie et innovation
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            ETG vous accompagne dans vos projets de génie civil, façade, électricité, piscines, import-export et consulting avec expertise et professionnalisme.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#contact"
              className="bg-primary-light text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-light/90 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-200 flex items-center justify-center gap-3"
            >
              <Play className="w-5 h-5" />
              Découvrir nos services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;