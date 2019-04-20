import { h } from 'preact';
import classNames from 'classnames';
import style from './style';
import css from '../styles/common';
import Status from '../status';

import { Grid, Row, Col } from 'react-flexbox-grid';

const Contact = () => (
	<div class={classNames(style.social, style.greenLabel)}>
		<Grid fluid>
			<Row start className={css.card}>
				<Col xs={3} md={3} lg={2} className={css.label}>
					EMAIL
				</Col>
				<Col xs={9} md={9} lg={10} className={css.value}>
					<a
						href="mailto:Krishnakumar.s.s@outlook.com?Subject=Hello%20Krishna"
						target="_top"
					>
						Krishnakumar.s.s@outlook.com
					</a>
				</Col>

				<Col xs={3} md={3} lg={2} className={css.label}>
					GITHUB
				</Col>
				<Col xs={9} md={9} lg={10} className={css.value}>
					<a href="https://github.com/krishna2nd" target="_blank">
						https://github.com/krishna2nd
					</a>
				</Col>
				<Col xs={3} md={3} lg={2} className={css.label}>
					STATUS
				</Col>
				<Col xs={9} md={9} lg={10} className={css.value}>
					<Status text="Actively looking for change" />
				</Col>
			</Row>
		</Grid>
	</div>
);

export default Contact;
