import * as React from 'react';
import { Persona } from '@fluentui/react-components';
import type { PersonaProps } from '@fluentui/react-components';
// @ts-ignore
import me from 'assets/me/me.64.circle.png';

export const MediumPersona = (props: Partial<PersonaProps>) => {
  return (
    <Persona
      size='huge'
      presence={{ status: 'available' }}
      name='Krishna Kumar'
      secondaryText='Available'
      tertiaryText='Sr. Software Engineer (Microsoft)'
      avatar={{
        image: {
          src: me,
        },
        color: 'colorful',
      }}
      {...props}
    />
  );
};
