import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Prices from './components/Prices';

const useStyles = makeStyles({
  root: {
    height: '1vh',
  },
});

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Router>
        <Switch>
          <Route path="/prices">
            <Prices />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Nav />
      </Router>
    </Container>
  );
}

export default App;
