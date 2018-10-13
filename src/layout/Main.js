import React from "react"
import { Route, Switch } from "react-router-dom"
import { Nav } from "components"
import { Home, About } from "pages"
import { rootPath, aboutPath } from "routes"
import "./Main.scss"

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
