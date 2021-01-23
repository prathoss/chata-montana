import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import montanaImg from '../images/montana.jpg'

const useStyles = makeStyles({
	img: {
		margin: '0 auto',
		display: 'block',
		maxWidth: '90vw',
	},
})

const Home: React.FunctionComponent = () => {
	const classes = useStyles()
	const [t] = useTranslation()

	return (
		<>
			<img src={montanaImg} alt="Chata" className={classes.img} />
			<p>{t('homeDescription')}</p>
		</>
	)
}

export default Home
