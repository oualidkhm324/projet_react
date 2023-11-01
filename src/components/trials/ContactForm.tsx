import React, { useState } from 'react';

interface ContactFormData {
  email: string;
  phone: string;
  linkedin: string;
  address: string;
}

interface ContactForm {
  onFormSubmit: (formData: ContactFormData) => void;
}

export const ContactForm: React.FC<ContactForm> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    email: '',
    phone: '',
    linkedin: '',
    address: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit(formData); // Envoyer les données au composant parent
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... Vos champs de saisie de données */}
      <button type="submit">Save</button>
    </form>
  );
};
