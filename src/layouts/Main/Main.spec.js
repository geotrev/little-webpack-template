import React from "react"
import Main from "./Main"
import { BrowserRouter as Router } from "react-router-dom"

jest.mock("components/Nav", () => global.simpleMock("Nav"))
jest.mock("pages/Home", () => global.simpleMock("Home"))
jest.mock("pages/About", () => global.simpleMock("About"))

describe("<Main />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(
      <Router>
        <Main />
      </Router>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
