import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import './assets/favicon.ico';

import { Nav } from 'components';
import { Home, About } from 'pages';

export default class App extends Component {
  render() {
    return (
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
  }
}
