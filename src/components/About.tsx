import { Button } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'

const About: React.FunctionComponent = () => {
	const [_, i18n] = useTranslation()

	return (
		<div>
			<p>This is about component</p>
			<Button onClick={() => i18n.changeLanguage('cs')}>Click for czech</Button>
			<Button onClick={() => i18n.changeLanguage('en')}>
				Click for english
			</Button>
		</div>
	)
}

export default About
