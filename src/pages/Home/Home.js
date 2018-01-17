import React from 'react';
import './Home.scss';

import Intro from './Intro/Intro';

const Home = () => {
  return (
    <div id="home">
      <div className="emoji">👋</div>
      <Intro greeting="This is a boilerplate built with webpack and React." />
    </div>
  );
}

export default Home;
