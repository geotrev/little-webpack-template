import React from "react"
import Main from "../Main"
import { BrowserRouter as Router } from "react-router-dom"

jest.mock("app/components/Nav", () => global.simpleMock("Nav"))
jest.mock("app/pages/Home", () => global.simpleMock("Home"))
jest.mock("app/pages/About", () => global.simpleMock("About"))

describe("<Main />", () => {
  it("renders", () => {
    const wrapper = mount(
      <Router>
        <Main />
      </Router>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
