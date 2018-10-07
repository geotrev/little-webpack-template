import React from "react"
import { Route, Switch } from "react-router-dom"
import { Nav } from "components"
import { Home, About } from "pages"
import Routes from "routes"

import "./Main.scss"
import "./assets"

export default function Main() {
  return (
    <div id="site">
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route path={Routes.about} component={About} />
          <Route path={Routes.root} component={Home} />
        </Switch>
      </main>
    </div>
  )
}
