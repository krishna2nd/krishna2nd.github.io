import { ShortPersona, MediumPersona } from 'components/persona';
import React from 'react';
import { HeaderCard } from './header-card';
import { ContactCard } from './contact-card';
import { MobileShortPersona } from 'components/persona/mobile-persona';

export const ShortDesignation = () => {
  return (
    <div>
      <ContactCard />
      <HeaderCard />
      <ShortPersona />
      <MobileShortPersona />
      <MediumPersona />
    </div>
  );
};
