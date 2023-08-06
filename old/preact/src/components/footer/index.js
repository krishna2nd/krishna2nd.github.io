import { h } from 'preact';
import classNames from 'classnames';
import style from './style';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Footer = () => (
	<div class={classNames(style.social, style.greenLabel)}>
		<Grid fluid>
			<Row center>
				<Col xs md={6} lg={4} className={style.content}>
					<a href="https://facebook.com/krishna2nd" target="_blank">
						<i className={classNames('fab fa-facebook-f', style.icons)} />
					</a>
					<a href="https://github.com/krishna2nd" target="_blank">
						<i className={classNames('fab fa-github', style.icons)} />
					</a>
					<a href="https://twitter.com/Krishna2nd" target="_blank">
						<i className={classNames('fab fa-twitter', style.icons)} />
					</a>
					<a
						href="https://api.whatsapp.com/send?phone=918447883963"
						target="_blank"
					>
						<i className={classNames('fab fa-whatsapp', style.icons)} />
					</a>
					<a href="skype:krishnakumar.s.s?call" target="_blank">
						<i className={classNames('fab fa-skype', style.icons)} />
					</a>
					<a href="https://www.linkedin.com/in/krishna2nd" target="_blank">
						<i className={classNames('fab fa-linkedin-in', style.icons)} />
					</a>
				</Col>
			</Row>
		</Grid>
	</div>
);

export default Footer;
