import React from "react"
import {shallow} from "enzyme"
import expenseDashBoardPage from "../../components/ExpenseDashBoardPage"

test("should compile correctly", ()=>{
    const wrapper = shallow(<expenseDashBoardPage />);
    expect(wrapper).toMatchSnapshot();
})