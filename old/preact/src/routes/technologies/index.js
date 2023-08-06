import { h, Component } from 'preact';
import style from './style';
import Profile from './../../data';
import { TechnologyType, Technologies } from './../../data/types/technologies';
import Section from '../../components/experience/details/section';
import TechnolgiesList from '../../components/technologies';

export default class TechnolgiesUsed extends Component {
	render() {
		return (
			<div class={style.technolgies}>
				<TechnolgiesList
					TechnologyType={TechnologyType}
					Technologies={Technologies}
				/>
			</div>
		);
	}
}
