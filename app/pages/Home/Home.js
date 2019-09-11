import React from "react"
import ScrollUpOnMount from "app/components/ScrollUpOnMount"

export default function Home() {
  return (
    <div id="home">
      <ScrollUpOnMount />
      <span role="img" aria-label="waving emoji" className="waving emoji">
        👋
      </span>
      <h1>{"Hello there!"}</h1>
      <p>{"This is a React starter kit built with Webpack."}</p>
    </div>
  )
}
