import { h } from 'preact';
import classNames from 'classnames';
import style from './style';
import css from '../styles/common';

import { Grid, Row, Col } from 'react-flexbox-grid';

const Info = () => (
	<div class={classNames(style.social, style.greenLabel)}>
		<Grid fluid>
			<Row start className={css.card}>
				<Col xs={3} md={3} lg={2} className={css.label}>
					AGE
				</Col>
				<Col xs={9} md={9} lg={10} className={css.value}>
					34
				</Col>

				<Col xs={3} md={3} lg={2} className={css.label}>
					ADDRESS
				</Col>
				<Col xs={9} md={9} lg={10} className={css.value}>
					Marathahalli, Bangalore
				</Col>
			</Row>
		</Grid>
	</div>
);

export default Info;
