import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import css from '../../components/styles/common';
import Menu from '../menu';

export default class Header extends Component {
	onClick = () => {
		this.menu.Toggle();
	};
	render() {
		return (
			<header class={style.header}>
				<Menu ref={menu => (this.menu = menu)}>
					<nav>
						<Link
							activeClassName={style.active}
							href="/"
							className={css.label}
							onClick={this.onClick}
						>
							HOME
						</Link>
						<Link
							activeClassName={style.active}
							href="/experience"
							className={css.label}
							onClick={this.onClick}
						>
							EXPERIENCE
						</Link>
						<Link
							activeClassName={style.active}
							href="/portfolio"
							className={css.label}
							onClick={this.onClick}
						>
							PORTFOLIO
						</Link>
					</nav>
				</Menu>
			</header>
		);
	}
}
