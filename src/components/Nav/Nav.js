import React, { Component } from "react"
import "./Nav.scss"

import { NavLink } from "react-router-dom"

const Nav = () => (
  <nav className="nav-wrapper">
    <ul>
      <li>
        <NavLink activeClassName="selected" exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" exact to="/about">
          About
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default Nav
