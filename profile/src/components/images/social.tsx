import * as React from 'react';
import { Image } from '@fluentui/react-components';
// @ts-ignore
import linkedin from 'assets/social/linkedin.svg';
// @ts-ignore
import web from 'assets/social/globe-solid.svg';
const iconStyle = {
    12: {
        height: 12,
        width: 12,
    }
}
export const Linkedin = () => <Image style={iconStyle[12]} alt='Linkedin' src={linkedin} />;
export const WebLink = () => <Image style={iconStyle[12]} alt='Web hyperlink' src={web} />;
