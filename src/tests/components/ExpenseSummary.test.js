import React from "react"
import ExpenseSummary from "../../../components/ExpenseSummaryHeader.js"
import {shallow} from "enzyme"

test("summary header should render correctly", () => {
	const wrapper = shallow(<ExpenseSummary />);
	expect(wrapper).toMatchSnapshot();
});