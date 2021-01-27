import {
  Accordion,
  AccordionSummary,
  makeStyles,
  Typography,
} from '@material-ui/core'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Paper from '@material-ui/core/Paper'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
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
  emoticon: {
    fontSize: '1.5rem',
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
        <Typography>{t('homeDescription')}</Typography>
        <Typography>
          <span className={classes.emoticon}>🚭</span> {t('noSmoking')}
        </Typography>
        <Typography>
          <span className={classes.emoticon}>🐶</span> {t('dogFriendly')}
        </Typography>
      </Paper>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h3" className={classes.title}>
            🎿 {t('winterSeason')}
          </Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h3" className={classes.title}>
            🚵‍♂️ {t('summerSeason')}
          </Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </>
  )
}

export default Home
