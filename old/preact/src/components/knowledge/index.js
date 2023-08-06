import { h } from 'preact';
import classNames from 'classnames';
import style from './style';
import css from '../styles/common';

import { Grid, Row, Col } from 'react-flexbox-grid';

const Knowledge = () => (
	<div>
		<Grid fluid>
			<Row start className={css.card}>
				<Col xs={12} md={3} lg={2} className={css.label}>
					KNOWLEDGE IN
				</Col>
				<Col xs={12} md={9} lg={10} className={css.value}>
					Ext.js, Mocha, Chef, Thrift, Java <br />
					Selenium, Sauce Labs <br />
					Jenkin, Kubernetes AWS, Azure, GCD <br />
					Postfix, Dovecot, Varnish cache, Redis <br />
					Nginx, Apache2, AWS(EC2, Lambda, S3) <br />
				</Col>
			</Row>
		</Grid>
	</div>
);

export default Knowledge;
