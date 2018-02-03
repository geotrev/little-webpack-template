import Home from './Home';

describe("<Home />", () => {
  it("renders #home", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).to.have.id('home');
  })

  it("has an h1", () => {
    const wrapper = mount(<Home />);
    expect(wrapper).to.have.descendants('h1');
  })

  it("has an emoji", () => {
    const wrapper = mount(<Home />);
    expect(wrapper).to.have.descendants('.emoji');
  })
})
