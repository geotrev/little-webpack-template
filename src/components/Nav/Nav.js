import React from "react"
import { NavLink } from "react-router-dom"
import "./styles.scss"

import { rootPath, aboutPath } from "routes"

export default function Nav() {
  return (
    <nav className="nav-wrapper">
      <ul>
        <li>
          <NavLink activeClassName="selected" exact to={rootPath}>
            {"Home"}
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to={aboutPath}>
            {"About"}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
