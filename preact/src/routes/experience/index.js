import { h, Component } from 'preact';
import style from './style';
import Profile from './../../data';
import Section from '../../components/experience/details/section';
//import ExperienceDetails from '../../components/experience/details';
//<ExperienceDetails data={Profile.Experience} ></ExperienceDetails>
export default class Experience extends Component {
	render() {
		return (
			<div class={style.experience}>
				<TimeLine data={Profile.Experience} />
			</div>
		);
	}
}

const TimeLine = ({ data }) => (
	<div class="exp-container">
		<div class="timeline">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					{data.map(exp => (
						<div
							class="swiper-slide"
							style="background-image: url(https://unsplash.it/1920/500?image=1);"
							data-year={`${exp.duration.from.getFullYear()}-${exp.duration.to.getFullYear()}`}
						>
							<div class="swiper-slide-content">
								<span class="timeline-year">{exp.duration.from}</span>
								<h4 class="timeline-title">{exp.company.title}</h4>
								<p class="timeline-text">
									{exp.projects.map(project => (
										<Section title={project.title}>
											{project.description.join('<br/>')}
										</Section>
									))}
								</p>
							</div>
						</div>
					))}
				</div>
				<div class="swiper-button-prev" />
				<div class="swiper-button-next" />
				<div class="swiper-pagination" />
			</div>
		</div>
	</div>
);
