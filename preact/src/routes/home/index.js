import { h } from 'preact';
import classNames from 'classnames';
import style from './style';
import css from './../../components/styles/common'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Title from './../../components/title';
import Status from './../../components/status';
import Info from './../../components/info';
import Experience from './../../components/experience';
import Skills from '../../components/skills';
import Contact from '../../components/contact';

const Home = () => (
	<div class={classNames(style.home)}>
		<Grid fluid>
			<Row>
				<Col md={4} lg={3}>
					<div class={style.profilePic} />
				</Col>
				<Col md={9} lg={8}>
					<Title />
					<Experience />
					<Skills />
          <Info />
					<Contact />
				</Col>
			</Row>
		</Grid>
	</div>
);

export default Home;
