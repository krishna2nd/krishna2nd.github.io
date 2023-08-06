import { h, Component } from 'preact';
import classNames from 'classnames';
import css from '../styles/common';
import style from './style';

export default class Menu extends Component {
	constructor() {
		super();
		this.state = {
			open: false
		};
	}
	Toggle = () => {
		const open = this.state.open;
		this.setState({
			open: !open
		});
	};

	render() {
		const isOpen = this.state.open;
		return (
			<div>
				<span
					id="burger"
					className={classNames(style.burger, isOpen && style.open)}
				>
					{!isOpen ? (
						<i className={classNames('fas fa-bars', style.menu)} onClick={this.Toggle} />
					) : (
						<i
							className={classNames('fas', 'fa-times', isOpen && style.fixed)}
							onClick={this.Toggle}
						/>
					)}
					{isOpen && (
						<div className={classNames(style.links)}>{this.props.children}</div>
					)}
				</span>
			</div>
		);
	}
}
