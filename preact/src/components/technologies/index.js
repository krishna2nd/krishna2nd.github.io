import { h } from 'preact';
import classNames from 'classnames';
import style from './style';
import css from '../styles/common';

import { Grid, Row, Col } from 'react-flexbox-grid';
import { Technologies } from '../../data/types/technologies';

const TechnologiesList = ({ Technologies, TechnologyType }) => {
	const objTechnologies = Object.keys(Technologies);
	return (
		<div>
			<Grid>
				<Row center="xs">
					<Col
						xsOffset={2}
						xs={10}
						md={10}
						lg={10}
						className={classNames(css.label, style.dark)}
					>
						<br />
						TECHNOLOGY USED
					</Col>
					{objTechnologies.map(tech => {
						const technology = Technologies[tech];
						return (
							<Col
								xs={3}
								md={3}
								lg={2}
								className={style.techBox}
								style={{
									backgroundImage: `url(${technology.icon || ''})`
								}}
							>
								<span>{technology.title}</span>
							</Col>
						);
					})}
				</Row>
			</Grid>
		</div>
	);
};

export default TechnologiesList;
