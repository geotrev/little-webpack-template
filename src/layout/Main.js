import React from 'react';
import './Main.scss';
import { Route, Switch } from 'react-router-dom';
import { Nav } from 'components';
import { Home, About } from 'pages';
/*
** ---------------------------------------------------
**
** --> PWA Icon Generator:
**     https://app-manifest.firebaseapp.com/
**
** --> Favicon Generator:
**     http://www.favicomatic.com/
**
** ---------------------------------------------------
*/
import 'assets/icons/favicon.ico';
import 'assets/icons/favicon-32x32.png';

const Main = () => (
  <div id="site">
    <header>
      <Nav />
    </header>
    <main>
      <Switch>
        <Route path='/about' component={ About } />
        <Route path='/' component={ Home } />
      </Switch>
    </main>
  </div>
)

export default Main
