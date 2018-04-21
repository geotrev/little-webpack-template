import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './layout/Main';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('__main__')
)
