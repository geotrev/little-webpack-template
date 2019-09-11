import React from "react"
import ScrollUpOnMount from "../ScrollUpOnMount"

global.scrollTo = jest.fn()

describe("<ScrollUpOnMount />", () => {
  it("renders", () => {
    const wrapper = mount(<ScrollUpOnMount />)
    expect(wrapper).toMatchSnapshot()
  })

  it("calls scrollTo with correct values", () => {
    mount(<ScrollUpOnMount />)
    expect(window.scrollTo).toBeCalledWith(0, 0)
  })
})
