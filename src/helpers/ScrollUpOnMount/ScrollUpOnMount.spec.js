import ScrollUpOnMount from "./ScrollUpOnMount"

global.window.scrollTo = chai.spy()

describe("<ScrollUpOnMount />", () => {
  it("mounts without blowing up", () => {
    const wrapper = mount(<ScrollUpOnMount />)
    expect(wrapper).to.exist
    expect(wrapper).to.have.length(1)
  })

  it("calls window.scrollTo when mounted", () => {
    const wrapper = mount(<ScrollUpOnMount />)
    expect(window.scrollTo).to.have.been.called
  })
})
