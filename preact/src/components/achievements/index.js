import { h } from 'preact';
import classNames from 'classnames';
import style from './style';
import css from '../styles/common';

import { Grid, Row, Col } from 'react-flexbox-grid';

const Achievements = () => (
	<div>
		<Grid fluid>
			<Row start className={css.card}>
				<Col xs={12} md={3} lg={2} className={css.label}>
					ACHIEVEMENTS
				</Col>
				<Col xs={12} md={9} lg={10} className={classNames(css.value)}>
					Received an honourable performance award from Infosys & One.com.<br />
					Rated as CRR1 performance employee by Infosys in all the three years.<br />
					Achieved 3d Rank in M.C.A in Kerala University, Best Project & Outgoing student.<br />
					Received Award for Scoring highest mark in SSLC (Secondary school )<br />
				</Col>
			</Row>
		</Grid>
	</div>
);

export default Achievements;
