import Header from "../../components/Header"
import React from "react"
import {shallow} from "enzyme"



test("should compare snapshot and flag if changed incorrectly", () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
    
    
    //expect(wrapper.find("h1").text()).toBe(" Expensify ")
    /*const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot()*/
})
