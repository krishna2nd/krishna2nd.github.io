import { h, Component } from 'preact';
import classNames from 'classnames';
import { Grid, Row, Col } from 'react-flexbox-grid';
import style from './style';
import css from '../../styles/common';
import Section from './section';

window.scrollIt = function(
	destination,
	duration = 200,
	easing = 'linear',
	callback
) {
	const easings = {
		linear(t) {
			return t;
		},
		easeInQuad(t) {
			return t * t;
		},
		easeOutQuad(t) {
			return t * (2 - t);
		},
		easeInOutQuad(t) {
			return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
		},
		easeInCubic(t) {
			return t * t * t;
		},
		easeOutCubic(t) {
			return --t * t * t + 1;
		},
		easeInOutCubic(t) {
			return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
		},
		easeInQuart(t) {
			return t * t * t * t;
		},
		easeOutQuart(t) {
			return 1 - --t * t * t * t;
		},
		easeInOutQuart(t) {
			return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
		},
		easeInQuint(t) {
			return t * t * t * t * t;
		},
		easeOutQuint(t) {
			return 1 + --t * t * t * t * t;
		},
		easeInOutQuint(t) {
			return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
		}
	};

	// Store initial position of a window and time
	// If performance is not available in your browser
	// It will fallback to new Date().getTime() - thanks IE < 10
	const start = window.pageYOffset;
	const startTime =
		'now' in window.performance ? performance.now() : new Date().getTime();
	// const startTime = typeof(window.performance['now']) == 'function' ? performance.now() : new Date().getTime();

	// Take height of window and document to sesolve max scrollable value
	// Prevent requestAnimationFrame() from scrolling below maximum scollable value
	// Resolve destination type (node or number)
	const documentHeight = Math.max(
		document.body.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.clientHeight,
		document.documentElement.scrollHeight,
		document.documentElement.offsetHeight
	);
	const windowHeight =
		window.innerHeight ||
		document.documentElement.clientHeight ||
		document.getElementsByTagName('body')[0].clientHeight;
	const destinationOffset =
		typeof destination === 'number' ? destination : destination.offsetTop;
	const destinationOffsetToScroll = Math.round(
		documentHeight - destinationOffset < windowHeight
			? documentHeight - windowHeight
			: destinationOffset
	);

	// If requestAnimationFrame is not supported
	// Move window to destination position and trigger callback function
	if ('requestAnimationFrame' in window === false) {
		window.scroll(0, destinationOffsetToScroll);
		if (callback) {
			callback();
		}
		return;
	}

	// function resolves position of a window and moves to exact amount of pixels
	// Resolved by calculating delta and timing function choosen by user
	function scroll() {
		const now =
			'now' in window.performance ? performance.now() : new Date().getTime();
		const time = Math.min(1, (now - startTime) / duration);
		const timeFunction = easings[easing](time);
		window.scroll(
			0,
			Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start)
		);

		// Stop requesting animation when window reached its destination
		// And run a callback function
		if (window.pageYOffset === destinationOffsetToScroll) {
			if (callback) {
				callback();
			}
			return;
		}

		// If window still needs to scroll to reach destination
		// Request another scroll invokation
		requestAnimationFrame(scroll);
	}

	// Invoke scroll and sequential requestAnimationFrame
	scroll();
};
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
