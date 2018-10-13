import React, { Component } from "react"
import ReactDOM from "react-dom"
import Main from "./layout/Main"

import { BrowserRouter } from "react-router-dom"

const dom = (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
)

const node = document.getElementById("__main__")

ReactDOM.render(dom, node)
