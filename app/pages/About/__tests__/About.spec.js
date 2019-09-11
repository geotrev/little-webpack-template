import React from "react"
import About from "../About"

jest.mock("app/components/ScrollUpOnMount", () => global.simpleMock("ScrollUpOnMount"))

describe("<About />", () => {
  it("renders", () => {
    const wrapper = mount(<About />)
    expect(wrapper).toMatchSnapshot()
  })
})
