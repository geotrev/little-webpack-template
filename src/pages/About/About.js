import React from 'react';
import './About.scss';
import { ScrollUpOnMount } from 'helpers';
import Bio from './Bio/Bio';

const About = () => {
  return (
    <div id="about">
      <ScrollUpOnMount />
      <div className="hopping emoji">👍</div>
      <Bio text="Woohoo, you did it." />
    </div>
  );
}

export default About;
