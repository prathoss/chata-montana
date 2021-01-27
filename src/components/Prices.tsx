import {
  makeStyles,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import React from 'react'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles({
  title: {
    fontSize: '1.2rem',
  },
})

const Prices: React.FunctionComponent = () => {
  const [t] = useTranslation()
  const classes = useStyles()

  const prices = [
    {
      week: '04.01 - 17.01',
      price: `21.000 CZK/${t('week')}`,
    },
    {
      week: '18.01 - 28/29.02',
      price: `28.000 CZK/${t('week')}`,
    },
    {
      week: '01.03 - 31.03',
      price: `21.000 CZK/${t('week')}`,
    },
    {
      week: '01.04 - 30.11',
      price: `14.000 CZK/${t('week')}`,
    },
    {
      week: '01.12 - 20.12',
      price: `17.000 CZK/${t('week')}`,
    },
    {
      week: '21.12 - 27.12',
      price: `23.000 CZK/${t('week')}`,
    },
    {
      week: '28.12 - 03.01',
      price: `35.000 CZK/${t('week')}`,
    },
  ]

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h3" className={classes.title}>
                  {t('date')}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h3" className={classes.title}>
                  {t('pricePerWeek')}
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prices.map((e) => (
              <TableRow key={e.week}>
                <TableCell>{e.week}</TableCell>
                <TableCell align="right">{e.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      🐶 {t('additionalForDog')}: 50 CZK/{t('night')}
    </>
  )
}

export default Prices
