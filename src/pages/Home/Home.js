import React from "react"
import { ScrollUpOnMount } from "helpers"

const Home = () => (
  <div id="home">
    <ScrollUpOnMount />
    <div className="waving emoji">👋</div>
    <h1>Hello there!</h1>
    <p>This is a React starter kit built with Webpack.</p>
  </div>
)

export default Home
