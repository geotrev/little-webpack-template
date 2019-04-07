import React from "react"
import Home from "./Home"

jest.mock("helpers/ScrollUpOnMount", () => global.simpleMock("ScrollUpOnMount"))

describe("<Home />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<Home />)
    expect(wrapper).toMatchSnapshot()
  })
})
