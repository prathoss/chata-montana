import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
	grow: {
		flexGrow: 1,
	},
	link: {
		textDecoration: 'none',
		color: 'inherit',
		padding: '0 6px',
	},
})

const Nav = ({ styles, ...otherProps }: { styles: React.CSSProperties }) => {
	const classes = useStyles()
	const [t] = useTranslation()

	return (
		<AppBar position="fixed" style={styles} {...otherProps}>
			<Toolbar>
				<Link to="/" className={classes.link}>
					<Typography variant="h1">Montana</Typography>
				</Link>
				<div className={classes.grow} />
				<Link to="/about" className={classes.link}>
					<Typography variant="h6">{t('about')}</Typography>
				</Link>
				<Link to="/about" className={classes.link}>
					<Typography variant="h6">{t('contact')}</Typography>
				</Link>
				<Link to="/prices" className={classes.link}>
					<Typography variant="h6">{t('prices')}</Typography>
				</Link>
			</Toolbar>
		</AppBar>
	)
}

export default Nav
