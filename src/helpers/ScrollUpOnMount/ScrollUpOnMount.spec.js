import React from "react"
import ScrollUpOnMount from "./ScrollUpOnMount"

global.scrollTo = jest.fn()

describe("<ScrollUpOnMount />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<ScrollUpOnMount />)
    expect(wrapper).toMatchSnapshot()
  })

  it("calls scrollTo with correct values", () => {
    const wrapper = mount(<ScrollUpOnMount />)
    expect(window.scrollTo).toBeCalledWith(0, 0)
  })
})
