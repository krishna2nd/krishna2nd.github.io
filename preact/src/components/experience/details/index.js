/* global window */
import { h, Component } from 'preact';
import classNames from 'classnames';
import { Grid, Row, Col } from 'react-flexbox-grid';
import style from './style';
import css from '../../styles/common';
import Section from './section';

class ExperienceDetails extends Component {
	isMobile = window.isMobil;
	isTab = window.isTab;
	isDesktop = window.isDesktop;

	constructor() {
		super();
		this.state = {
		};
	}
	render() {
		const { data } = this.props;
		const { isDesktop, isMobile, isTab } = this;
		const DurationY = (duration, mobile) =>
			`${duration.from.getFullYear()} - ${!mobile ? duration.to.getFullYear(): String(duration.to.getFullYear()).slice(-2) }`;
		const scrollToView = id => e => {
			const target = document.getElementById(id);
			try {
				scrollIt(target, 600, 'easeOutQuad');
			}
			catch (e) {
				target.scrollIntoView(true);
			}
			this.setState({
				active: id
			});
		};
		this.timeLineRefs = [];
		const active = this.state.active || data[0].company.title;
		return (
			<Grid fluid>
				<Row start="xs">
					<Col xs={12} md={3} lg={3} className={classNames(style.timeLine)}>
						{isDesktop ? (
							<DesktopNav
								data={data}
								DurationY={DurationY}
								scrollToView={scrollToView}
								active={active}
							/>
						) : (
							<MobileNav
								DurationY={DurationY}
								scrollToView={scrollToView}
								active={active}
								data={data}
							/>
						)}
					</Col>
					<Col xs={12} md={9} lg={9} className={style.experience}>
						<div className={style.expContainer}>
							{data.map(exp => (
								<Section
									id={exp.company.title}
									title={
										<img className={style.image} src={exp.company.image} />
									}
									className={style.expCard}
								>
									{exp.projects.map(project => {
										const Tech = project.technologies
											.map(tech => tech.title)
											.join(', ');
										return (
											<Section
												title={project.title}
												className={style.projectCard}
											>
												{project.description.map(desc => (
													<p>{desc}</p>
												))}
												<b>Technologies: </b>
												<i>{Tech}</i>
											</Section>
										);
									})}
								</Section>
							))}
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
}

const MobileNav = ({ data, DurationY, scrollToView, active: activeIn }) => (
	<Grid className={style.timeboxM} fluid>
		<Row>
			{data.map(exp => {
				const durStr = DurationY(exp.duration, true);
				const active = activeIn === exp.company.title;
				return (
					<Col className={classNames(style.yearlist, style.yearlistM, active && style.active)}>
						<a
							href={`#${exp.company.title}`}
							onClick={scrollToView(exp.company.title)}
						>
							{durStr}
						</a>
					</Col>
				);
			})}
		</Row>
	</Grid>
);

const DesktopNav = ({ data, DurationY, scrollToView, active: activeIn }) => (
	<Grid className={style.timebox} fluid>
		{data.map(exp => {
			const durStr = DurationY(exp.duration);
			const active = activeIn === exp.company.title;
			return (
				<Row>
					<Col className={classNames(style.yearlist, active && style.active)}>
						<a
							href={`#${exp.company.title}`}
							onClick={scrollToView(exp.company.title)}
						>
							{durStr}
						</a>
						{active && <i className="fas fa-circle" />}
					</Col>
				</Row>
			);
		})}
	</Grid>
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
