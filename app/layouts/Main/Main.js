import React from "react"
import { Route, Switch } from "react-router-dom"

import { rootPath, aboutPath } from "app/routes"
import Nav from "app/components/Nav"
import Home from "app/pages/Home"
import About from "app/pages/About"
import "./styles.scss"

const renderAbout = () => <About message="Woohoo, you did it." />

export default function Main() {
  return (
    <div id="site">
      <header>
        <Nav />
      </header>
      <main id="main">
        <Switch>
          <Route path={aboutPath} render={renderAbout} />
          <Route path={rootPath} component={Home} />
        </Switch>
      </main>
    </div>
  )
}
