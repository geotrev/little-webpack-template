import React, { Component } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import Main from "./layout/Main"

const dom = (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
)

const node = document.getElementById("__main__")

ReactDOM.render(dom, node)
