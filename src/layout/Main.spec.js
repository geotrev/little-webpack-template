import Main from "./Main"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

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

  let routingEls = { Switch, Route }

  Object.keys(routingEls).forEach(routingEl => {
    if (routingEl === "Route") {
      it(`renders 2 Routes`, () => {
        expect(wrapper)
          .to.have.exactly(2)
          .descendants(routingEls[routingEl])
      })
    } else {
      it(`renders a ${routingEl}`, () => {
        expect(wrapper).to.have.descendants(routingEls[routingEl])
      })
    }
  })

  let elements = ["header", "main"]

  elements.forEach(element => {
    it(`renders a ${element}`, () => {
      expect(wrapper).to.have.descendants(element)
    })
  })
})
