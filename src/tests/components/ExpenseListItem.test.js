import React from "react"
import {shallow} from "enzyme"
import ExpenseListItem from "../../components/ExpenseListItem"
import expenses from "../fixture/expenses"

test("item should render correctly wit all data", () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
})