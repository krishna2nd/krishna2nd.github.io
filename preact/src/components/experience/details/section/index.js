import { h } from 'preact';
import classNames from 'classnames';
import style from './style';
import css from '../../../styles/common';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Section = ({ title, children, footer }) => (
	<div>
		<Grid >
			<Row ><Col className={css.label}>
			{title}
			</Col>
			</Row>
			<Row>
				<Col xs md lg>
					{children}
				</Col>
			</Row>
			{footer && (
				<Row>
					<Col>{footer}</Col>
				</Row>
			)}
		</Grid>
	</div>
);

export default Section;
