import React from "react"
import { ScrollUpOnMount } from "helpers"

export default function About() {
  return (
    <div id="about">
      <ScrollUpOnMount />
      <div className="hopping emoji">👍</div>
      <h1>You found another page!</h1>
      <p>Woohoo, you did it.</p>
    </div>
  )
}
