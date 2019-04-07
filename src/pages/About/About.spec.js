import React from "react"
import About from "./About"

describe("<About />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<About />)
    expect(wrapper).toMatchSnapshot()
  })
})
