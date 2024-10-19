import React from 'react';
import { SiRoblox } from "react-icons/si";

interface ExperienceCardProps {
  name: string;
  thumbnail: string; // Cambié thumbnailUrl a thumbnail
  plays: number;
  url: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ name, thumbnail, plays, url }) => (
  <div className="bg-gray-200 p-4 rounded shadow-md mb-4">
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold flex items-center">
      <SiRoblox className="mr-3 h-6 w-6" /> {/* Aumenté el margen a 3 */}
      <img src={thumbnail} alt={name} className="h-10 w-10 mr-3" />
      {"> "} {name}
    </a>
    <p className="text-sm text-gray-600">Visits: {plays}</p>
  </div>
);

export default ExperienceCard;
