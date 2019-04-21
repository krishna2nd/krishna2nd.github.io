import { h } from 'preact';
import classNames from 'classnames';
import style from './style';
import css from '../styles/common';

import { Grid, Row, Col } from 'react-flexbox-grid';

const Education = () => (
	<div>
		<Grid fluid>
			<Row start className={css.card}>
				<Col xs={12} md={3} lg={2} className={css.label}>
					EDUCATION
				</Col>
				<Col xs={12} md={9} lg={10} className={css.value}>
					<b>M.C.A</b> (Master of computer application)  •  
					<i> Kerala University, 2009-2012 (80.6%)</i>
					<br />
					<b>B.Sc.</b> Physics  • 
					<i> Kerala University, September 2005 (90.8%)</i>
				</Col>
			</Row>
		</Grid>
	</div>
);

export default Education;
