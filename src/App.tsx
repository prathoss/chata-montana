import { Container, ThemeProvider } from '@material-ui/core'
import React, { Suspense } from 'react'
import Nav from './components/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Prices from './components/Prices'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CustomTheme from './theming/theme'
import './i18n'
import Contact from './components/Contact'

function App() {
	const matches = useMediaQuery(CustomTheme.breakpoints.down('xs'))

	let navStyle = {}
	const containerStyle = {
		paddingBottom: '0px',
		paddingTop: '80px',
	}

	if (matches) {
		navStyle = {
			top: 'auto',
			bottom: 0,
		}
		containerStyle.paddingBottom = '64px'
		containerStyle.paddingTop = '10px'
	}

	return (
		<Suspense fallback="loading">
			<ThemeProvider theme={CustomTheme}>
				<Router>
					<Nav styles={navStyle} />
					<Container style={containerStyle}>
						<Switch>
							<Route path="/prices">
								<Prices />
							</Route>
							<Route path="/about">
								<About />
							</Route>
							<Route path="/contact">
								<Contact />
							</Route>
							<Route path="/">
								<Home />
							</Route>
						</Switch>
					</Container>
				</Router>
			</ThemeProvider>
		</Suspense>
	)
}

export default App
