import React from "react"
import Nav from "./Nav"
import { BrowserRouter as Router } from "react-router-dom"

describe("<Nav />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(
      <Router>
        <Nav />
      </Router>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
