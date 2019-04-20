import { h } from 'preact';
import classNames from 'classnames';
import style from './style';
import css from '../styles/common';

import { Grid, Row, Col } from 'react-flexbox-grid';

const Skills = () => (
	<div class={classNames(style.social, style.greenLabel)}>
		<Grid fluid>
			<Row start className={css.card}>
				<Col xs={12} md={3} lg={2} className={css.label}>
					SKILLS
				</Col>
				<Col xs={12} md={9} lg={10} className={css.value}>
					<Row>
						<Col xs md={4} lg={2}>
							<span class={css.label}>SERVER</span>
						</Col>
						<Col xs md={9} lg={10} className={css.small}>
							C, Golang, NodeJS, Java
						</Col>
					</Row>
					<Row>
						<Col xs md={4} lg={2}>
							<span class={css.label}>CLIENT</span>
						</Col>
						<Col xs md={9} lg={10} className={css.small}>
							React, Javascript(ES5-9), TypeScript, PWA, Webpack, Workbox, Babel
						</Col>
					</Row>

					<Row>
						<Col xs md={4} lg={2}>
							<span class={css.label}>DEPLOYMENT</span>
						</Col>
						<Col xs md={9} lg={10} className={css.small}>
							LXC, Docker, Kubernates
						</Col>
					</Row>

					<Row>
						<Col xs md={4} lg={2}>
							<span class={css.label}>LOAD BALANCER</span>
						</Col>
						<Col xs md={9} lg={10} className={css.small}>
							HAProxy, KeepAliveD
						</Col>
					</Row>

					<Row>
						<Col xs md={4} lg={2}>
							<span class={css.label}>PROTOCOLS</span>
						</Col>
						<Col xs md={9} lg={10} className={css.small}>
							XMPP, HTTP, XMPP, SSH, IMAP, CALDAV
						</Col>
					</Row>

					<Row>
						<Col xs md={4} lg={2}>
							<span class={css.label}>DATABASE</span>
						</Col>
						<Col xs md={9} lg={10} className={css.small}>
							CouchDB, MongoDB, Neo4j, DynamoDB, Sqlite, IndexDB, PostgreSQL,
							MySQL
						</Col>
					</Row>

					<Row>
						<Col xs md={4} lg={2}>
							<span class={css.label}>OS</span>
						</Col>
						<Col xs md={9} lg={10} className={css.small}>
							Debian Linux
						</Col>
					</Row>
				</Col>
			</Row>
		</Grid>
	</div>
);

export default Skills;
