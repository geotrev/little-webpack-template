import About from "./About"

describe("<About />", () => {
  function mountComponent() {
    return mount(<About />)
  }

  let wrapper

  beforeEach(() => {
    wrapper = mountComponent()
  })

  it("renders", () => {
    expect(wrapper).to.exist
    expect(wrapper).to.have.length(1)
  })

  it("has an h1", () => {
    expect(wrapper).to.have.descendants("h1")
  })

  it("has an emoji", () => {
    expect(wrapper).to.have.descendants(".emoji")
  })
})
