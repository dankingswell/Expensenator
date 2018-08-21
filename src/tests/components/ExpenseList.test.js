import React from "react"
import {ExpenseList} from "../../components/ExpenseList"
import {shallow} from "enzyme"
import expenses from "../fixture/expenses"

test("Expense list should create list with expenses", () =>  {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot()

})

test("should render ExpenseList with empty message", () => {
    const wrapper  = shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})
