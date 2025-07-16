import React from 'react';

interface FacultyCardProps {
  name: string;
  title: string;
  expertise: string;
  imageUrl: string;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ name, title, expertise, imageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-dwimulya-gold"
      />
      <h3 className="text-xl font-semibold mb-1 text-dwimulya-dark-blue">{name}</h3>
      <p className="text-gray-700 text-sm mb-2">{title}</p>
      <p className="text-gray-600 text-sm">Bidang Keahlian: {expertise}</p>
    </div>
  );
};

export default FacultyCard;