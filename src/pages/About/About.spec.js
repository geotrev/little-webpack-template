import React from "react"
import About from "./About"

jest.mock("helpers/ScrollUpOnMount", () => global.simpleMock("ScrollUpOnMount"))

describe("<About />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<About />)
    expect(wrapper).toMatchSnapshot()
  })
})
