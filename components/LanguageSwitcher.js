"use client"
// components/LanguageSwitcher.js
import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <select value={language} onChange={handleChange}>
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="es">Spanish</option>
    </select>
  );
};

export default LanguageSwitcher;

