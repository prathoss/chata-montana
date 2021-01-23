import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import montanaImg from '../images/montana.jpg'

const useStyles = makeStyles({
	img: {
		margin: '0 auto',
		display: 'block',
		maxWidth: '90vw',
	},
	title: {
		fontSize: '1.5rem',
		marginTop: '25px',
	},
})

const Home: React.FunctionComponent = () => {
	const classes = useStyles()
	const [t] = useTranslation()

	return (
		<>
			<img src={montanaImg} alt="Chata" className={classes.img} />
			<Typography variant="h3" className={classes.title}>
				{t('homeTitle')}
			</Typography>
			<p>{t('homeDescription')}</p>
		</>
	)
}

export default Home
