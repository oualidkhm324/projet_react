import React from 'react';

export const CVForm = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const nom = form.nom.value;
    const prenom = form.prenom.value;
    const age = form.age.value;
    // ... Accédez aux autres champs du formulaire de la même manière

    // Utilisez ces données pour mettre à jour votre CV ou les envoyer à un serveur (si applicable)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nom">Nom :</label>
      <input type="text" id="nom" name="nom" required />

      <label htmlFor="prenom">Prénom :</label>
      <input type="text" id="prenom" name="prenom" required />

      <label htmlFor="age">Âge :</label>
      <input type="number" id="age" name="age" required />

      {/* Ajoutez d'autres champs ici avec des balises <label> et <input> similaires */}
      
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default CVForm;
