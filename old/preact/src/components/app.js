import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Experience from '../routes/experience';
import PortFolio from '../routes/portfolio';
import TechnolgiesUsed from '../routes/technologies';

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
					<TechnolgiesUsed path="/technologies" />
				</Router>
				<Footer />
			</div>
		);
	}
}

function CalcDevice() {
	if (typeof window === 'undefined') return;
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

if (typeof window !== 'undefined') {
	window.onresize = CalcDevice;
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
				return t < 0.5
					? 4 * t * t * t
					: (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
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
}
