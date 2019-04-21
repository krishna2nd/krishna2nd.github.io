import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Experience from '../routes/experience';
import PortFolio from '../routes/portfolio';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Experience path="/experience" />
					<PortFolio path="/portfolio" />
				</Router>
				<Footer />
			</div>
		);
	}
}

function CalcDevice() {
	if (typeof window === "undefined") return;
	const media = window.matchMedia;
	if (!media) {
		window.isMobile = true;
		return;
	}

	let mql = media('(max-width: 768px)');
	mql.removeListener(CalcDevice);
	mql.addListener(CalcDevice);
	window.isMobile = mql.matches;

	mql = media('(min-width: 768px) and (max-width: 1024px)');
	mql.removeListener(CalcDevice);
	mql.addListener(CalcDevice);
	window.isTab = mql.matches;

	mql = media('(min-width: 1200px)');
	mql.removeListener(CalcDevice);
	mql.addListener(CalcDevice);
	window.isDesktop = mql.matches;

	if (!media || !(window.isMobile || window.isTab || window.isDesktop)) {
		window.isMobile = true;
	}
}
CalcDevice();
if (typeof window !== "undefined") window.onresize = CalcDevice;
