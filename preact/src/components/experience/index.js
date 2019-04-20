import { h } from 'preact';
import classNames from 'classnames';
import style from './style';
import css from '../styles/common';

import { Grid, Row, Col } from 'react-flexbox-grid';

const Experience = () => (
	<div class={classNames(style.social, style.greenLabel)}>
		<Grid fluid>
			<Row start className={css.card}>
				<Col xs={12} md={3} lg={2} className={css.label}>
					EXPERIENCE
				</Col>
				<Col xs={12} md={9} lg={10} className={css.value}>
					12.5 years (2006-2019)
					<br />
					<i>
						Infosys - 2006-09 (3.3), <br />
						Freelance - 2009 - 2012 (2.5 yrs)
						<br />
						One.com - 2012-2016 (3.8) <br />
						Saltside Technologies - 2016-2017 (1.8) <br />
						@WalmartLabs - 2017 ~ (1.5) <br />
					</i>
				</Col>
			</Row>
		</Grid>
	</div>
);

export default Experience;
