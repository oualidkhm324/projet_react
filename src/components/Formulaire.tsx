import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type FormInputs = {
  nom: string;
  prenom: string;
  dateNaissance: string;
  email: string;
  telephone: string;
  linkedin: string;
  professionalProject: string;
  address: string;
  competences: string;
  langues: {
    langue: string;
    niveau: number;
  }[];
  education: {
    annee: string;
    diplome: string;
    etablissement: string;
  }[];
  interets: string[];
};

export const Formulaire = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInputs>();

  const [langues, setLangues] = useState<FormInputs["langues"]>([]);
  const [education, setEducation] = useState<FormInputs["education"]>([]);
  const [interets, setInterets] = useState<FormInputs["interets"]>([]);

  const validateNom = (value: string) => {
    if (value !== value.toUpperCase()) {
      return "Le nom doit être en majuscules.";
    }
    return true;
  };

  const validatePrenom = (value: string) => {
    if (!/^[A-Z][a-z]*$/.test(value)) {
      return "Le prénom doit commencer par une majuscule.";
    }
    return true;
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setLangues(data.langues);
    setEducation(data.education);
    setInterets(data.interets);
    console.log("Données soumises : ", data);
  };

  const ajouterLangue = () => {
    const langue = window.prompt("Nom de la langue :");
    const niveau = Number(window.prompt("Niveau de la langue (0-5) :"));

    if (langue && !isNaN(niveau) && niveau >= 0 && niveau <= 5) {
      setLangues([...langues, { langue, niveau }]);
    } else {
      alert("Le niveau doit être compris entre 0 et 5.");
    }
  };

  const ajouterEducation = () => {
    const annee = window.prompt("Année :");
    const diplome = window.prompt("Diplôme :");
    const etablissement = window.prompt("Établissement :");

    if (annee && diplome && etablissement) {
      setEducation([...education, { annee, diplome, etablissement }]);
    } else {
      alert("Veuillez remplir tous les champs de l'éducation.");
    }
  };

  const ajouterInteret = () => {
    const interet = window.prompt("Intérêt :");

    if (interet) {
      setInterets([...interets, interet]);
    } else {
      alert("Veuillez entrer un intérêt.");
    }
  };

  return (
    <main className="max-w-2xl mx-auto mt-10 bg-yellow-200 p-6 rounded-lg">
      <h2 className="font-extrabold text-4xl mb-6">
        Veuillez remplir ce formulaire avec vos informations personnelles
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="nom" className="block text-sm font-bold mb-2">
            Nom
          </label>
          <input
            {...register("nom", { validate: validateNom })}
            className="border-2 p-2 w-full"
            type="text"
            id="nom"
            placeholder="Entrez votre nom"
          />
          {errors.nom && <p className="text-red-500">{errors.nom.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="prenom" className="block text-sm font-bold mb-2">
            Prénom
          </label>
          <input
            {...register("prenom", { validate: validatePrenom })}
            className="border-2 p-2 w-full"
            type="text"
            id="prenom"
            placeholder="Entrez votre prénom"
          />
          {errors.prenom && <p className="text-red-500">{errors.prenom.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="dateNaissance" className="block text-sm font-bold mb-2">
            Date de naissance
          </label>
          <input
            {...register("dateNaissance")}
            className="border-2 p-2 w-full"
            type="date"
            id="dateNaissance"
            placeholder="Entrez votre date de naissance"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email
          </label>
          <input
            {...register("email")}
            className="border-2 p-2 w-full"
            type="email"
            id="email"
            placeholder="Entrez votre email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="telephone" className="block text-sm font-bold mb-2">
            Numéro de téléphone
          </label>
          <input
            {...register("telephone")}
            className="border-2 p-2 w-full"
            type="tel"
            id="telephone"
            placeholder="Entrez votre numéro de téléphone"
            pattern="[0-9]{10}"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="linkedin" className="block text-sm font-bold mb-2">
            Lien LinkedIn
          </label>
          <input
            {...register("linkedin")}
            className="border-2 p-2 w-full"
            type="text"
            id="linkedin"
            placeholder="Entrez votre lien LinkedIn (ex: https://www.linkedin.com/in/votre-nom)"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="professionalProject" className="block text-sm font-bold mb-2">
            Projet Professionnel
          </label>
          <textarea
            rows={10}
            {...register("professionalProject")}
            className="border-2 resize-none p-2 w-full"
            id="professionalProject"
            name="professionalProject"
            placeholder="Décrivez votre projet professionnel ici..."
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-bold mb-2">
            Adresse
          </label>
          <textarea
            {...register("address")}
            className="border-2 resize-none p-2 w-full"
            id="address"
            name="address"
            placeholder="Entrez votre adresse ici..."
          />
        </div>

        <div className="mb-4">
          <label htmlFor="competences" className="block text-sm font-bold mb-2">
            Compétences
          </label>
          <input
            {...register("competences")}
            className="border-2 p-2 w-full"
            type="text"
            id="competences"
            placeholder="Entrez vos compétences séparées par des virgules"
          />
        </div>

        <button className="mb-4 font-extrabold text-white py-2 px-4 hover:bg-[PaleGreen]" type="button" onClick={ajouterLangue}>
          Ajouter une langue
        </button>

        <div className="mb-4 langues-section">
          <h2 style={{ textAlign: 'center', position: 'relative', fontWeight: 'bold' }}>
            Langues
            <hr
              style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '50px',
                borderBottom: '2px solid #FFD700',
              }}
            />
            
          </h2>
          {langues.map((langue, index) => (
            <div key={index} className="langue-item">
              <p className="langue-title">
                {langue.langue}
              </p>
              <hr className="langue-line-top-right" style={{ width: `${langue.niveau * 4}%` }} />
            </div>
          ))}
        </div>

        <button className="mb-4 font-extrabold text-white py-2 px-4 hover:bg-[PaleGreen]" type="button" onClick={ajouterEducation}>
          Ajouter une expérience éducative
        </button>

        <div className="mb-4 langues-section">
          <h2 style={{ textAlign: 'center', position: 'relative', fontWeight: 'bold' }}>
            Éducation
            <hr
              style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '50px',
                borderBottom: '2px solid #FFD700',
              }}
            />
          </h2>
          {education.map((item, index) => (
            <div key={index}>
              <p className="mb-1">
                <strong>Année:</strong> {item.annee}
              </p>
              <p className="mb-1">
                <strong>Diplôme:</strong> {item.diplome}
              </p>
              <p className="mb-3">
                <strong>Établissement:</strong> {item.etablissement}
              </p>
            </div>
          ))}
        </div>

        <button className="mb-4 font-extrabold text-white py-2 px-4 hover:bg-[PaleGreen]  " type="button" onClick={ajouterInteret}>
          Ajouter un intérêt
        </button>

        <div className="mb-4 langues-section interets-section">
          <h2 style={{ textAlign: 'center', position: 'relative', fontWeight: 'bold' }}>
            Intérêts
            <hr
              style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '50px',
                borderBottom: '2px solid #FFD700',
              }}
            />
          </h2>
          {interets.map((item, index) => (
            <div key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div>
          <input
            type="submit"
            className="mb-4 font-extrabold text-white py-2 px-4 hover:bg-[SeaGreen] bg-[salmon]"
          />
        </div>
      </form>
    </main>
  );
};

const getLangueLineStyle = (niveau: number) => {
  if (niveau === 0) {
    return "langue-line-none";
  } else if (niveau === 1) {
    return "langue-line-short";
  } else if (niveau === 2) {
    return "langue-line-medium";
  } else if (niveau === 3) {
    return "langue-line-long";
  } else if (niveau === 4) {
    return "langue-line-very-long";
  } else if (niveau === 5) {
    return "langue-line-super-long";
  } else {
    return "langue-line-short";
  }
};
