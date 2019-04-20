import { h } from 'preact';
import classNames from 'classnames';
import css from '../styles/common';
import style from './style';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Title = () => (
	<div >
		<Grid className={css.card}>
			<Row end className={css.right}>
				<Grid fluid>
					<Row end className={css.right}>
						<Col class={css.h1}>
							I'm <b class={css.light}>Krishna Kumar</b>
						</Col>
					</Row>
					<Row>
						<Col class={css.h2}>Developer, Web & DevOps</Col>
					</Row>
					<Row className={css.right}>
						<Col >
							<span class={css.walmart}>WalmartLabs</span>
						</Col>
					</Row>
				</Grid>
			</Row>
			<Row start>
				<Col xs md lg>
					<hr />
				</Col>
			</Row>
		</Grid>
	</div>
);

export default Title;
