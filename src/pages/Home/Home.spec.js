import React from "react"
import Home from "./Home"

describe("<Home />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<Home />)
    expect(wrapper).toMatchSnapshot()
  })
})
