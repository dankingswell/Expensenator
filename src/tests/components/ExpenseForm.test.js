import React from "react"
import {shallow} from "enzyme"
import ExpenseForm from "../../components/ExpenseForm"
import expenses from "../fixture/expenses"

// Manually mocking third part moment library in mocks / moment.js
test("should render expense form correctly", () => {
    const wrapper = shallow(<ExpenseForm />); 
    expect(wrapper).toMatchSnapshot();
})

test("should render expense form with expense data", () => {
    const wrapper =  shallow(<ExpenseForm expense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();
})

// mocking user interaction
test("should render error for invalid form submission", () => {
    const wrapper =  shallow(<ExpenseForm />)
    wrapper.find("form")
    //simulating an event simulate(event, params)
    .simulate("submit" ,{
        preventDefault : () => { }
    });
    expect(wrapper.state("error")).toBe(true);
    expect(wrapper).toMatchSnapshot();
})

test("shoud set decription on input change", () => {
    const value = "this is a new description"
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(0).simulate("change", {
        target:{
            value
        }
    })
    expect(wrapper.state("description")).toBe(value);
})
test("should set note on note chnage", () => {
    const value = "this is a new note"; 
    const wrapper =  shallow(<ExpenseForm />);
    wrapper.find("textarea").at(0).simulate("change",{
        target: {
            value 
        }
    })
    expect(wrapper.state("note")).toBe(value);
    expect(wrapper).toMatchSnapshot()
});

test("should update amount on valid input", () => {
    const value = "12"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("input").at(1).simulate("change",{
        target: {
            value
        }
    })
    expect(wrapper.state("amount")).toBe(value);
}),
test("should update amount on valid input", () => {
    const value = "12.222"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("input").at(1).simulate("change",{
        target: {
            value
        }
    })
    expect(wrapper.state("amount")).toBe("");
})