import { Body2, Card, Title1 } from '@fluentui/react-components';
import { tokens } from '@fluentui/react-theme';
import { Phone12Filled, Mail12Filled, Link12Filled } from '@fluentui/react-icons';
import { Linkedin, WebLink } from 'components/images';
import React from 'react';


export const ContactCard = () => {
  return (
    <Card>
      <Body2
        style={{
          marginTop: -15,
          color: tokens.colorNeutralForeground3,
          fontSize: '0.8rem'
        }}
      >
        <div>
          <Mail12Filled /> krishnakumar.s.s@hotmail.com
        </div>
        <div>
        <Phone12Filled /> +91 XXX XXX XXX3
        </div>
        <div>
          <Linkedin/> krishnakumar.s.s@hotmail.com
        </div>
        <div>
          <WebLink/> krishnakumar.s.s@hotmail.com
        </div>
      </Body2>
    </Card>
  );
};
