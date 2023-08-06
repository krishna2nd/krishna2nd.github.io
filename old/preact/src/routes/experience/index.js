import { h, Component } from 'preact';
import style from './style';
import Profile from './../../data';
import Section from '../../components/experience/details/section';
import ExperienceDetails from '../../components/experience/details';

export default class Experience extends Component {
	render() {
		return <div class={style.experience} >
			<ExperienceDetails data={Profile.Experience} ></ExperienceDetails>
		</div>
	}
}
