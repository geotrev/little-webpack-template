import React from "react"
import { Route, Switch } from "react-router-dom"

import { rootPath, aboutPath } from "routes"
import Nav from "components/Nav"
import Home from "pages/Home"
import About from "pages/About"
import "./styles.scss"

export default function Main() {
  return (
    <div id="site">
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route path={aboutPath} render={() => <About message="Woohoo, you did it." />} />
          <Route path={rootPath} component={Home} />
        </Switch>
      </main>
    </div>
  )
}
