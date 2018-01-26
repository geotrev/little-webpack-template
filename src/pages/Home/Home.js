import React from 'react';
import './Home.scss';
import { ScrollUpOnMount } from 'helpers';

import Intro from './Intro/Intro';

const Home = () => {
  return (
    <div id="home">
      <ScrollUpOnMount />
      <div className="emoji">👋</div>
      <Intro greeting="This is a boilerplate built with webpack and React." />
    </div>
  );
}

export default Home;
