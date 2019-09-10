import React from "react"
import Home from "../Home"

jest.mock("app/helpers/ScrollUpOnMount", () => global.simpleMock("ScrollUpOnMount"))

describe("<Home />", () => {
  it("renders", () => {
    const wrapper = mount(<Home />)
    expect(wrapper).toMatchSnapshot()
  })
})
