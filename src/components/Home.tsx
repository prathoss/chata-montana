import { makeStyles, Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
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
	},
	paper: {
		marginTop: '25px',
		padding: '14px',
	},
})

const Home: React.FunctionComponent = () => {
	const classes = useStyles()
	const [t] = useTranslation()

	return (
		<>
			<img
				itemProp="image"
				src={montanaImg}
				alt="Chata"
				className={classes.img}
			/>
			<Paper elevation={2} className={classes.paper}>
				<Typography variant="h3" className={classes.title}>
					{t('homeTitle')}
				</Typography>
				<Typography>
					<p>{t('homeDescription')}</p>
				</Typography>
			</Paper>
		</>
	)
}

export default Home
