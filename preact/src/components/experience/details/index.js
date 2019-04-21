import { h } from 'preact';
import classNames from 'classnames';
import { Grid, Row, Col } from 'react-flexbox-grid';
import style from './style';
import css from '../../styles/common';
import Section from './section';

const ExperienceDetails = ({ data }) => (
	<div>
		{data.map(exp => (
			<Section
				title={exp.company.title}
				footer={`${exp.duration.from} - ${exp.duration.to}`}
			>
				{exp.projects.map(project => (
					<Section title={project.title} >{
                        project.description.join('<br/>')
                    }</Section>
				))}
			</Section>
		))}
	</div>
);

export default ExperienceDetails;

{

	/* <div>
		<Grid fluid>
			<Row>{title}</Row>
			<Row>
				<Col xs md lg>
					{desctiption}
				</Col>
			</Row>
			{footer && (
				<Row>
					<Col>{footer}</Col>
				</Row>
			)}
		</Grid>
	</div> */
}
