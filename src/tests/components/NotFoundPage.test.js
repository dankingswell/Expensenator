import React from "react"
import {shallow} from "enzyme"
import NotFoundErrorPage from "../../components/NotFoundErrorPage"

test("should complie correctly", ()=>{
    const wrapper = shallow(<NotFoundErrorPage />);
    expect(wrapper).toMatchSnapshot();
})