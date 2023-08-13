import * as React from 'react';
import { Image } from '@fluentui/react-components';
// @ts-ignore
import microsoft from 'assets/company/logo/microsoft.22.png';
// @ts-ignore
import walmart from 'assets/company/logo/walmart.22.png';
// @ts-ignore
import saltSide from 'assets/company/logo/saltside.22.png';
// @ts-ignore
import OneCom from 'assets/company/logo/one.com.22.png';
// @ts-ignore
import Infosys from 'assets/company/logo/infosys.22.png';

export const MicrosoftLogo = () => <Image alt='Microsoft' src={microsoft} />;
export const WalmartLabsLogo = () => <Image alt='Walmart Labs' src={walmart} />;
export const SaltSideLogo = () => (
  <Image alt='SaltSide Technologies' src={saltSide} />
);
export const OneComLogo = () => <Image alt='One.com' src={OneCom} />;
export const InfosysLogo = () => <Image alt='Infosys' src={Infosys} />;
