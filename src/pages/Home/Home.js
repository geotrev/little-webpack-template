import React from 'react';
import './Home.scss';
import { ScrollUpOnMount } from 'helpers';

const Home = () => {
  return (
    <div id="home">
      <ScrollUpOnMount />
      <div className="waving emoji">👋</div>
      <h1>Hello there!</h1>
      <p>This is a boilerplate built with webpack and React.</p>
    </div>
  );
}

export default Home;
