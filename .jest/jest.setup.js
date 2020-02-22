import Enzyme, { shallow, render, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount

// Creates a basic component instance
// jest.mock("./path/to/MyComponent", () => global.simpleMock("MyComponent"))
global.simpleMock = mockName => {
  /* eslint no-eval: "off" */
  return eval(`const ${mockName} = props => props.children || null; ${mockName}`)
}
