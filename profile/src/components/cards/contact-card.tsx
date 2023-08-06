import { Body2, Card, Title1 } from '@fluentui/react-components';
import { tokens } from '@fluentui/react-theme';
import React from 'react';

export const ContactCard = () => {
  return (
    <Card>
      <Body2
        style={{
          marginTop: -15,
          color: tokens.colorNeutralForeground3,
        }}
      >
        <span>
          <strong>e-mail:</strong> krishnakumar.s.s@hotmail.com
        </span>
        <span>
          <strong>phone:</strong> krishnakumar.s.s@hotmail.com
        </span>
        <span>
          <strong>linkedin:</strong> krishnakumar.s.s@hotmail.com
        </span>
        <span>
          <strong>web:</strong> krishnakumar.s.s@hotmail.com
        </span>
      </Body2>
    </Card>
  );
};
