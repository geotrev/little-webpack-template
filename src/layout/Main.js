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
import 'assets/icons/icon-72x72.png';
import 'assets/icons/icon-96x96.png';
import 'assets/icons/icon-128x128.png';
import 'assets/icons/icon-144x144.png';
import 'assets/icons/icon-152x152.png';
import 'assets/icons/icon-192x192.png';
import 'assets/icons/icon-384x384.png';
import 'assets/icons/icon-512x512.png';

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
