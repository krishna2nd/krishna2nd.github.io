import React from 'react';

import { ShortDesignation } from 'components/cards/short-designation';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

import 'styles/generic.css';
import { ExperienceTable } from 'components/table/experience/experience-table';

export const ProfileView = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <ShortDesignation />
      <ExperienceTable />
    </FluentProvider>
  );
};
