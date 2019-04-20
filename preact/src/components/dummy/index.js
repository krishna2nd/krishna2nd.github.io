import { h } from 'preact';
import classNames from 'classnames';
import style from './style';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default Dummy = () => (
	<div class={classNames(style.social, style.greenLabel)}>
		<Grid fluid>
			<Row center>
				<Col xs md={6} lg={4} className={style.content}>
				</Col>
			</Row>
		</Grid>
	</div>
);
