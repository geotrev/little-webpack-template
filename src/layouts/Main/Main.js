import React from "react"
import { Route, Switch } from "react-router-dom"

import { rootPath, aboutPath } from "routes"
import Nav from "components/Nav"
import Home from "pages/Home"
import About from "pages/About"
import "./styles.scss"

const renderAbout = () => <About message="Woohoo, you did it." />

export default function Main() {
  return (
    <div id="site">
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route path={aboutPath} render={renderAbout} />
          <Route path={rootPath} component={Home} />
        </Switch>
      </main>
    </div>
  )
}
