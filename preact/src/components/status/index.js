import { h } from 'preact';
import classNames from 'classnames';
import style from './style';
import css from '../styles/common';

import { Grid, Row, Col } from 'react-flexbox-grid';

const Status = ({text, className}) => (
	<div class={classNames(style.hello, css.green, css.status, className)}>{text}</div>
);

export default Status;
