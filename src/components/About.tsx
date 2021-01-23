import React from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import beds from '../images/beds.jpg'
import kitchen from '../images/kitchen.jpg'
import kitchen2 from '../images/kitchen2.jpg'
import room from '../images/room.jpg'
import room2 from '../images/room2.jpg'
import shower from '../images/shower.jpg'
import shower2 from '../images/shower2.jpg'
import shower3 from '../images/shower3.jpg'
import sink from '../images/sink.jpg'
import tables from '../images/tables.jpg'
import toilet from '../images/toilet.jpg'

const About: React.FunctionComponent = () => {
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
			original: shower,
		},
		{
			original: shower2,
		},
		{
			original: shower3,
		},
		{
			original: sink,
		},
		{
			original: tables,
		},
		{
			original: toilet,
		},
	]
	return <ImageGallery items={images} showThumbnails={false} />
}

export default About
