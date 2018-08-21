import React from "react"
import {shallow} from "enzyme"
import expenseDashBoardPage from "../../components/ExpenseDashBoardPage"

test("should complie correctly", ()=>{
    const wrapper = shallow(<expenseDashBoardPage />);
    expect(wrapper).toMatchSnapshot();
})