import { Informations_Personnelles } from "../components/Informations_Personnelles"
import { Contact } from "../components/Contact"
import { Intérêts } from "../components/interest"
import { PProjetprofessionel} from "../components/PProjetprofessionel"
import {Education} from "../components/Education"
import {Competences} from "../components/Competences"
import { Langues } from "../components/Langues"

export const CV = () => {
    // Supposons que vous avez un tableau de compétences
    const competences = ["HTML, CSS, JavaScript", "MySQL", "React, Node.js"];
  
    return (
      <div className="container">
        <div className="left-column">
          <Informations_Personnelles />
          <hr className="line" />
          <Contact />
          <hr className="line" />
          <Intérêts />
          <hr className="line" />
          <Langues />
        </div>
        <div className="right-column">
          <Education />
          <hr className="line" />
          <PProjetprofessionel />
          <hr className="line" />
          <Competences competences={competences} /> {/* Passez les compétences ici */}
        </div>
      </div>
    );
  };
  