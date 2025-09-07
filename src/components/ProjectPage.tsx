import React, { useState } from 'react';
import { CheckCircle, Calendar, MapPin } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

// Exemple de données (à remplacer par un fetch ou un context)
const projects = [
  {
    id: 1,
    title: 'Centre Commercial Moderne',
    mainImage: '/P1.jpg',
    images: ['/P1.jpg', '/P1a.jpg', '/P1b.jpg', '/P1c.jpg'],
    accomplishments: [
      { icon: <CheckCircle className="w-6 h-6 text-green-600" />, text: 'Livré dans les délais' },
      { icon: <CheckCircle className="w-6 h-6 text-green-600" />, text: 'Respect du budget' },
      { icon: <CheckCircle className="w-6 h-6 text-green-600" />, text: 'Certification HQE' },
    ],
    startDate: '2022-01-15',
    endDate: '2023-06-30',
    description: 'Construction d’un centre commercial de 15 000 m², achevé en 18 mois, intégrant parkings souterrains et espaces verts. Ce projet clé en main comprend le gros œuvre, le second œuvre et des aménagements extérieurs soignés, alliant fonctionnalité et esthétique.',
    location: 'Douala Cameroun'
  },
  
  {
    id: 2,
    title: 'Résidence de Luxe',
    mainImage: '/P2.jpg',
    images: ['/P2.jpg', '/P2a.jpg', '/P2b.jpg', '/P2c.jpg'],
    accomplishments: [
      { icon: <CheckCircle className="w-6 h-6 text-green-600" />, text: 'Livré dans les délais' },
      { icon: <CheckCircle className="w-6 h-6 text-green-600" />, text: 'Respect du budget' },
      { icon: <CheckCircle className="w-6 h-6 text-green-600" />, text: 'Certification HQE' },
    ],
    startDate: '2022-01-15',
    endDate: '2023-06-30',
    description: 'Rénovation intégrale de la façade d’une résidence de 50 appartements, incluant une isolation thermique par l’extérieur, une mise aux normes électriques avec installation domotique complète et l’intégration d’un système photovoltaïque pour une performance énergétique optimale.',
    location: 'Douala Cameroun'
  },

   {
    id: 3,
    title: 'Complexe Aquatique',
    mainImage: '/P4.jpg',
    images: ['/P4a.jpg', '/P4b.jpg', '/P4.jpg', '/P4.jpg'],
    accomplishments: [
      { icon: <CheckCircle className="w-6 h-6 text-green-600" />, text: 'Livré dans les délais' },
      { icon: <CheckCircle className="w-6 h-6 text-green-600" />, text: 'Respect du budget' },
      { icon: <CheckCircle className="w-6 h-6 text-green-600" />, text: 'Certification HQE' },
    ],
    startDate: '2022-01-15',
    endDate: '2023-06-30',
    description: 'Installation de systèmes de filtration écologiques et d’un éclairage LED subaquatique, alliant performance environnementale et esthétique moderne pour une gestion durable de l’eau et une ambiance lumineuse innovante.',
    location: 'Yaounde Cameroun'
  },

    {
    id: 4,
    title: 'Entrepôt Logistique',
    mainImage: '/P1.jpg',
    images: ['/P5.jpg', '/P5.jpg', '/P5.jpg'],
    accomplishments: [
      { icon: <CheckCircle className="w-6 h-6 text-green-600" />, text: 'Livré dans les délais' },
      { icon: <CheckCircle className="w-6 h-6 text-green-600" />, text: 'Respect du budget' },
      { icon: <CheckCircle className="w-6 h-6 text-green-600" />, text: 'Certification HQE' },
    ],
    startDate: '2022-01-15',
    endDate: '2023-06-30',
    description: 'Conception et construction d’un entrepôt automatisé de 8 000 m² dédié à l’import-export, intégrant des solutions robotiques avancées pour la manutention et des systèmes de gestion automatisée, optimisant efficacité et productivité',
    location: 'Douala Cameroun'
  },
  
  {
    id: 5,
    title: 'Immeuble de Bureaux',
    mainImage: '/P5.jpg',
    images: ['/P5.jpg', '/P5b.jpg', '/P5c.jpg'],
    accomplishments: [
      { icon: <CheckCircle className="w-6 h-6 text-green-600" />, text: 'Livré dans les délais' },
      { icon: <CheckCircle className="w-6 h-6 text-green-600" />, text: 'Réduction de 40% de la consommation énergétique' },
      { icon: <CheckCircle className="w-6 h-6 text-green-600" />, text: 'Certification HQE' },
    ],
    startDate: '2022-01-15',
    endDate: '2023-06-30',
    description: 'Audit et optimisation énergétique d’un immeuble tertiaire de 12 étages, réduisant la consommation énergétique de 40 % grâce à des recommandations techniques ciblées, favorisant durabilité et performance.',
    location: 'Douala Cameroun'
  },

   {
    id: 6,
    title: 'Villa Contemporaine',
    mainImage: '/P4.jpg',
    images: ['/P4.jpg', '/P4.jpg', '/P4.jpg'],
    accomplishments: [
      { icon: <CheckCircle className="w-6 h-6 text-green-600" />, text: 'Livré dans les délais' },
      { icon: <CheckCircle className="w-6 h-6 text-green-600" />, text: 'Respect du budget' },
      { icon: <CheckCircle className="w-6 h-6 text-green-600" />, text: 'Certification HQE' },
    ],
    startDate: '2022-01-15',
    endDate: '2023-06-30',
    description: 'Construction clé en main d’une villa passive de 400 m², dotée d’une piscine et d’un système domotique intégré. Équipée de panneaux solaires, d’un système de récupération d’eau de pluie et de géothermie, alliant confort moderne et efficacité énergétique.',
    location: 'Yaounde Cameroun'
  },
];

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
};

const ProjectPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === Number(id));
  const [mainImg, setMainImg] = useState(project?.mainImage);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl text-red-600 mb-4">Projet introuvable.</p>
        <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={() => navigate('/')}>Retour</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {/* Image principale */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
        <img src={mainImg} alt={project.title} className="w-full h-80 object-cover" />
      </div>

      {/* Carrousel */}
      <div className="flex gap-4 mb-8">
        {project.images.map((img, idx) => (
          <button
            key={idx}
            className={`border-2 rounded-lg overflow-hidden ${mainImg === img ? 'border-green-600' : 'border-transparent'}`}
            onClick={() => setMainImg(img)}
          >
            <img src={img} alt={`Aperçu ${idx + 1}`} className="w-24 h-16 object-cover" />
          </button>
        ))}
      </div>

      {/* Accomplissements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {project.accomplishments.map((acc, idx) => (
          <div key={idx} className="flex items-center gap-3 bg-green-50 p-4 rounded-lg shadow">
            {acc.icon}
            <span className="text-green-900 font-semibold">{acc.text}</span>
          </div>
        ))}
      </div>

      {/* Dates et localisation */}
      <div className="flex flex-wrap gap-6 mb-8">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-green-600" />
          <span className="text-gray-700">Début : <b>{formatDate(project.startDate)}</b></span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-green-600" />
          <span className="text-gray-700">Fin : <b>{formatDate(project.endDate)}</b></span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-green-600" />
          <span className="text-gray-700">{project.location}</span>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-2xl font-bold text-green-900 mb-4">{project.title}</h2>
        <p className="text-gray-800 text-lg">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectPage;