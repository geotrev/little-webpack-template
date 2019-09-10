import React from "react"
import Nav from "../Nav"
import { BrowserRouter as Router } from "react-router-dom"

describe("<Nav />", () => {
  it("renders", () => {
    const wrapper = mount(
      <Router>
        <Nav />
      </Router>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
