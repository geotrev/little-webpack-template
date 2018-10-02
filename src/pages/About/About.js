import React from "react"
import { ScrollUpOnMount } from "helpers"

const About = () => (
  <div id="about">
    <ScrollUpOnMount />
    <div className="hopping emoji">👍</div>
    <h1>You found an About page!</h1>
    <p>Woohoo, you did it.</p>
  </div>
)

export default About
