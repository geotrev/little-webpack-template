import React from 'react';
import './About.scss';

import Bio from './Bio/Bio';

const About = () => {
  return (
    <div id="about">
      <div className="emoji">👍</div>
      <Bio text="Woohoo, you did it." />
    </div>
  );
}

export default About;
