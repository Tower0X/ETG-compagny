import React, { useState, useRef, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Centre Commercial Moderne',
    category: 'Génie Civil',
    image: '/P1.jpg',
    description: 'Construction complète d\'un centre commercial de 15000m² avec parkings souterrains et espaces verts.',
    details: 'Projet réalisé en 18 mois incluant gros œuvre, second œuvre, et aménagements extérieurs. Respect total des délais et du budget.',
    year: '2023'
  },
  {
    id: 2,
    title: 'Résidence de Luxe',
    category: 'Façade & Électricité',
    image: '/P2.jpg',
    description: 'Rénovation complète de façade et mise aux normes électriques d\'une résidence de 50 appartements.',
    details: 'Isolation thermique par l\'extérieur, installation domotique complète et système photovoltaïque.',
    year: '2023'
  },
  {
    id: 3,
    title: 'Complexe Aquatique',
    category: 'Piscines',
    image: 'P4.jpg',
    description: 'Création d\'un complexe aquatique avec piscine olympique, bassin ludique et spa.',
    details: 'Installation de systèmes de filtration écologiques et d\'éclairage LED subaquatique.',
    year: '2022'
  },
  {
    id: 4,
    title: 'Entrepôt Logistique',
    category: 'Import-Export',
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Conception et construction d\'un entrepôt automatisé de 8000m² pour l\'import-export.',
    details: 'Intégration de solutions robotiques pour la manutention et systèmes de gestion automatisée.',
    year: '2022'
  },
  {
    id: 5,
    title: 'Immeuble de Bureaux',
    category: 'Consulting',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Audit et optimisation énergétique d\'un immeuble tertiaire de 12 étages.',
    details: 'Réduction de 40% de la consommation énergétique grâce à nos recommandations techniques.',
    year: '2023'
  },
  {
    id: 6,
    title: 'Villa Contemporaine',
    category: 'Construction complète',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Construction clé en main d\'une villa de 400m² avec piscine et domotique intégrée.',
    details: 'Maison passive avec récupération d\'eau de pluie, panneaux solaires et système de géothermie.',
    year: '2023'
  }
];

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    if (selected !== null) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selected]);

  useEffect(() => {
    if (selected !== null && modalRef.current) {
      modalRef.current.focus();
    }
  }, [selected]);

  return (
    <section id="realisations" className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-display">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de nos projets les plus emblématiques, témoins de notre expertise et de notre engagement qualité.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <button
              key={p.id}
              className="group relative rounded-2xl shadow-lg overflow-hidden focus:outline-none transition-all duration-300 bg-green-600"
              onClick={() => navigate(`/project/${p.id}`)}
              aria-label={`Voir le projet ${p.title}`}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-64 object-cover group-hover:opacity-40 transition-opacity duration-300"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-white bg-green-700/80 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {p.category}
                </span>
                <h3 className="text-white text-xl font-bold">{p.title}</h3>
                <p className="text-white text-sm">{p.year}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Modal conservé si besoin */}
        {selected !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
            tabIndex={-1}
            ref={modalRef}
            aria-modal="true"
            role="dialog"
          >
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
              <img
                src={projects[selected].image}
                alt={projects[selected].title}
                className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-primary bg-primary-bg px-3 py-1 rounded-full text-sm font-medium">
                    {projects[selected].category}
                  </span>
                  <span className="text-charcoal">{projects[selected].year}</span>
                </div>
                <h3 className="text-3xl font-bold text-green-900 mb-4 font-display">
                  {projects[selected].title}
                </h3>
                <p className="text-green-800 text-lg mb-6 leading-relaxed">
                  {projects[selected].description}
                </p>
                <p className="text-green-900 leading-relaxed">
                  {projects[selected].details}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;