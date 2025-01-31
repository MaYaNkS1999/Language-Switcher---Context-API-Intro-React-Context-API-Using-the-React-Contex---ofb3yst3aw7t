"use client"
// pages/index.js
import React from 'react';
import LanguageSwitcher from '../components/LanguageSwitcher';
import {useLanguage} from '../contexts/LanguageContext';

const Home = () => {
  const {language} = useLanguage();
  const content = {
    en: {
      welcome: 'Welcome to Next.js!'
    },
    fr: {
      welcome: 'Bienvenue à Next.js!'
    },
    es: {
      welcome: '¡Bienvenido a Next.js!'
    }
    // Add other languages and translations as needed
  };

  return (
      <div>
        <h1>{content[language].welcome}</h1>
        <LanguageSwitcher />
      </div>
  );
};

export default Home;
