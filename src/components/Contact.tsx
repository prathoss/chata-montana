import { Card, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import map from '../images/map.jpg'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  card: {
    padding: '14px',
    margin: '5px',
  },
  contactTitle: {
    fontSize: '1.5rem',
  },
  map: {
    maxWidth: '100%',
    marginTop: '15px',
  },
})

const Contact: React.FunctionComponent = () => {
  const [t] = useTranslation()
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Card variant="outlined" className={classes.card}>
        <Typography
          variant="h3"
          color="textSecondary"
          className={classes.contactTitle}
        >
          {t('reservationContact')} - Nakladatelství Alter
        </Typography>
        <Typography>
          📞 {t('telephone')}:{' '}
          <span itemProp="telephone">
            <a href="tel:+420 272 760 329">+420 272 760 329</a>
          </span>
          <br />
          📬 {t('email')}:{' '}
          <span itemProp="email">
            <a href="mailto:alter@alter.cz">alter@alter.cz</a>
          </span>
        </Typography>
      </Card>
      <Card variant="outlined" className={classes.card}>
        <Typography
          variant="h3"
          color="textSecondary"
          className={classes.contactTitle}
        >
          🏡 {t('address')}
        </Typography>
        <div
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <Typography>
            {t('street')}:{' '}
            <span itemProp="streetAddress">Horní Rokytnice 26</span>
            <br />
            {t('locality')}:{' '}
            <span itemProp="addressLocality">Rokytnice nad Jizerou</span>,{' '}
            <span itemProp="postalCode">512 44</span>
          </Typography>
        </div>
      </Card>
      <img src={map} alt="map" className={classes.map} />
    </div>
  )
}

export default Contact
