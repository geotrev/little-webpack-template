import React from "react"
import chai, { expect } from "chai"
import spies from "chai-spies"
import chaiEnzyme from "chai-enzyme"
import Enzyme, { mount, shallow, render } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())
chai.use(spies)

// Assign global objects and create a
// simple node document to run tests against.
global.React = React
global.expect = expect
global.mount = mount
global.render = render
global.shallow = shallow
global.chai = chai
global.spy = chai.spy()

// Create a simple node environment to run tests within.
const { JSDOM } = require("jsdom")
const dom = new JSDOM("<!doctype html><html><body></body></html>")
const { window } = dom

global.window = window
global.document = window.document
global.navigator = { userAgent: "node.js" }

// Prevent operations.
function noop() {
  return null
}

// Used by <ScrollUpOnMount />
global.window.scrollTo = chai.spy()

// Ignore anything that isn't js.
// Add more if needed.
require.extensions[".md"] = noop
require.extensions[".scss"] = noop
require.extensions[".css"] = noop
require.extensions[".svg"] = noop
require.extensions[".png"] = noop
require.extensions[".jpg"] = noop
require.extensions[".ico"] = noop
