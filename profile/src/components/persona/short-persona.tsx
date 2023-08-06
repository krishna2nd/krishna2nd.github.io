import * as React from 'react';
import { Persona } from '@fluentui/react-components';
import type { PersonaProps } from '@fluentui/react-components';

import me from 'assets/me/me.64.circle.png';

export const ShortPersona = (props: Partial<PersonaProps>) => {
  return (
    <Persona
      name='Krishna Kumar'
      secondaryText='Available'
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
