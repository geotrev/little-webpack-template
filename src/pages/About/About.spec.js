import About from "./About"

describe("<About />", () => {
  it("renders #about", () => {
    const wrapper = shallow(<About />)
    expect(wrapper).to.have.id("about")
  })

  it("has an h1", () => {
    const wrapper = shallow(<About />)
    expect(wrapper).to.have.descendants("h1")
  })

  it("has one .emoji", () => {
    const wrapper = shallow(<About />)
    expect(wrapper).to.have.descendants(".emoji")
  })
})
