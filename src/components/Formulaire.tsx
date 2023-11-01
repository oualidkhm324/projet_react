import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormInputs = {
  nom: string;
  prenom: string;
  dateNaissance: string;
  email: string;
  telephone: string;
  linkedin: string;
  professionalProject: string;
  address: string;
};

export const Formulaire = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

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
    // Your form submission logic here
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
