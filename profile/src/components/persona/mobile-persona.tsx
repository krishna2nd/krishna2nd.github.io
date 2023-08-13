import * as React from 'react';
// @ts-ignore
import me from 'assets/me/me.square.jpeg';
import { Image } from '@fluentui/react-components';
import personaStyles from './mobile-persona.scss';

export const MobileShortPersona = (props: any) => {
  return (
    <div className={personaStyles.outerBox} >
    <Image style={{
      width: 120,
      height: 120,
      borderRadius: '50%',
    }} alt='Krishna Kumar' src={me} />
    </div>
  );
};
