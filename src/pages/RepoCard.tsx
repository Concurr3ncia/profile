import React from 'react';
import { FaGithub } from "react-icons/fa";

interface RepoCardProps {
  name: string;
  html_url: string;
  created_at: string; // o Date, dependiendo de cómo quieras manejar la fecha
}

const RepoCard: React.FC<RepoCardProps> = ({ name, html_url, created_at }) => (
  <div className="bg-gray-200 p-4 rounded shadow-md mb-4">
    <a href={html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold flex items-center">
      <FaGithub className="mr-3 h-6 w-6" /> {/* Aumenté el margen a 3 */}
      {"> "} {name}
    </a>
    <p className="text-sm text-gray-600">{new Date(created_at).toLocaleDateString()}</p>
  </div>
);

export default RepoCard;
