import { Body2, Card, Title1 } from '@fluentui/react-components';
import { tokens } from '@fluentui/react-theme';
import React from 'react';

export const HeaderCard = () => {
  return (
    <Card>
      <Title1>Krishna Kumar</Title1>
      <Body2
        style={{
          marginTop: -15,
          color: tokens.colorNeutralForeground3,
        }}
      >
        <i>Cloud Application Architect (Microsoft)</i>
      </Body2>
    </Card>
  );
};
