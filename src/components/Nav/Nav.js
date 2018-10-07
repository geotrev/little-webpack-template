import React from "react"
import { NavLink } from "react-router-dom"
import "./Nav.scss"

import Routes from "routes"

export default function Nav() {
  return (
    <nav className="nav-wrapper">
      <ul>
        <li>
          <NavLink activeClassName="selected" exact to={Routes.root}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to={Routes.about}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
