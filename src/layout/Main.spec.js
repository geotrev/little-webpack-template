import Main from "./Main"
import { BrowserRouter as Router } from "react-router-dom"

describe("<Main />", () => {
  function mountComponent() {
    return mount(
      <Router>
        <Main />
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

  it("has one header element", () => {
    expect(wrapper).to.have.descendants("header")
  })

  it("has one main element", () => {
    expect(wrapper).to.have.descendants("main")
  })
})
