import React from "react"
import {ExpenseHeader} from "../../components/ExpenseSummary"
import {shallow} from "enzyme"
import expenses from "../fixture/expenses"

test("summary header should render correctly", () => {
	const wrapper = shallow(<ExpenseHeader expenses={[]}/>);
	expect(wrapper).toMatchSnapshot();
});