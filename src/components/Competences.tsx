import React from "react";
import { IoIosDoneAll } from "react-icons/io";

interface CompetencesProps {
  competences: string[];
}

export const Competences: React.FC<CompetencesProps> = ({ competences }) => {
  return (
    <div>
      <h2 className="mt-10 text-xl font-extrabold">Compétences</h2>
      <ul>
        {competences.map((competence, index) => (
          <li key={index} className="flex items-center">
            <IoIosDoneAll className="mr-2" />
            {competence}
          </li>
        ))}
      </ul>
    </div>
  );
};
