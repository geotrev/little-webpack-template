import React from "react"
import Home from "../Home"

jest.mock("app/components/ScrollUpOnMount", () => global.simpleMock("ScrollUpOnMount"))

describe("<Home />", () => {
  it("renders", () => {
    const wrapper = mount(<Home />)
    expect(wrapper).toMatchSnapshot()
  })
})
