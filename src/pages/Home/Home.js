import React from "react"
import ScrollUpOnMount from "helpers/ScrollUpOnMount"

export default function Home() {
  return (
    <div id="home">
      <ScrollUpOnMount />
      {/* eslint-disable */}
      <div className="waving emoji">👋</div>
      {/* eslint-enable */}
      <h1>{"Hello there!"}</h1>
      <p>{"This is a React starter kit built with Webpack."}</p>
    </div>
  )
}
