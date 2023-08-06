import { ShortPersona, MediumPersona } from 'components/persona';
import React from 'react';
import { HeaderCard } from './header-card';
import { ContactCard } from './contact-card';

export const ShortDesignation = () => {
  return (
    <div>
      <ContactCard />
      <HeaderCard />
      <ShortPersona />
      <MediumPersona />
    </div>
  );
};
