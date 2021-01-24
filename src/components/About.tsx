import React from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import beds from '../images/beds.jpg'
import kitchen from '../images/kitchen.jpg'
import kitchen2 from '../images/kitchen2.jpg'
import room from '../images/room.jpg'
import room2 from '../images/room2.jpg'
import tables from '../images/tables.jpg'
import { makeStyles, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles({
	title: {
		marginBottom: '15px',
	},
	galleryWrapper: {
		maxHeight: '700px',
	},
})

const About: React.FunctionComponent = () => {
	const [t] = useTranslation()
	const classes = useStyles()

	const images = [
		{
			original: beds,
		},
		{
			original: kitchen,
		},
		{
			original: kitchen2,
		},
		{
			original: room,
		},
		{
			original: room2,
		},
		{
			original: tables,
		},
	]
	return (
		<>
			<Typography variant="h2" className={classes.title}>
				{t('gallery')}
			</Typography>
			<div className={classes.galleryWrapper}>
				<ImageGallery
					items={images}
					showThumbnails={false}
					showBullets
					slideDuration={300}
				/>
			</div>
		</>
	)
}

export default About
