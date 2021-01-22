import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from '@material-ui/core';
import React, { useState } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    // width: '100%',
    // position: 'fixed',
    // bottom: 0,
  },
});

const Nav: React.FunctionComponent = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      className={classes.root}
      showLabels
      value={value}
      onChange={(e, newValue) => {
        console.log(newValue);
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="O chatě" icon={<HomeIcon />} />
      <BottomNavigationAction label="Kontakt" icon={<InfoIcon />} />
      <BottomNavigationAction label="Ceník" icon={<MonetizationOnIcon />} />
    </BottomNavigation>
  );
};

export default Nav;
