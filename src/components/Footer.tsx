import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-display">ETG SARL</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Votre partenaire de confiance pour tous vos projets de construction, 
              énergie et innovation depuis plus de 15 ans.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Génie Civil</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Revêtement de Façade</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Électricité</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Piscines</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Import-Export</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liens Utiles</h4>
            <ul className="space-y-3">
              <li><a href="#apropos" className="text-white/70 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#realisations" className="text-white/70 hover:text-white transition-colors">Réalisations</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Carrières</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Actualités</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Mentions légales</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/70" />
                <a href="tel:+237697190774" className="text-white/70 hover:text-primary-light transition-colors">
                  +237 697190774
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/70" />
                <a href="mailto:kenfacfabrice@gmail.com" className="text-white/70 hover:text-primary-light transition-colors">
                  kenfacfabrice@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white/70 mt-1" />
                <span className="text-white/70">
                  Douala, Cameroun
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © 2024 ETG SARL - Entreprise de Travaux Généraux. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
              CGV
            </a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
              Plan du site
            </a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;