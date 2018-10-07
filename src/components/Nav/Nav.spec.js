import Nav from "./Nav"
import { BrowserRouter as Router, NavLink } from "react-router-dom"

describe("<Nav />", () => {
  function mountComponent() {
    return mount(
      <Router>
        <Nav />
      </Router>,
    )
  }

  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it("renders", () => {
    expect(wrapper).to.exist
    expect(wrapper).to.have.length(1)
  })

  it("renders a <nav>", () => {
    expect(wrapper).to.have.tagName("nav")
  })

  it("renders <NavLink/>s", () => {
    expect(wrapper).to.have.descendants(NavLink)
  })
})
