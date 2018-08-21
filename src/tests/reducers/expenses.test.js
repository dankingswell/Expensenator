import expensesReducer from  "../../reducers/expenses"
import moment from "moment"
import expenses from "../fixture/expenses"

test("test should remove object from expenses", () => {
    const state = expensesReducer(expenses, { type:"REMOVE_EXPENSE", id:"1"})
    expect(state).toEqual([expenses[1],expenses[2],expenses[3]])
})

test("test should  not remove object from expenses with invalid id", () => {
    const state = expensesReducer(expenses, { type:"REMOVE_EXPENSE", id:"500"})
    expect(state).toEqual(expenses)
})

test("object should be added to expenses when reducer completes", () => {
    const expense=  {
        description:"additional", id:5, amount: 500, createdAt:2000
    };
    const state = expensesReducer(expenses, { type:"ADD_EXPENSE", expenses:expense})
    expect(state).toEqual([...expenses, expense])
})

test("editing expense should adjust properties", () =>{
    const state = expensesReducer(expenses, { type:"EDIT_EXPENSE", id:"2", updates:{
        amount:40000
    }})
    expect(state[1].amount).toEqual(40000)
})

test("editing expense on non exisiting records should adjust properties", () =>{
    const state = expensesReducer(expenses, { type:"EDIT_EXPENSE", id:"500", updates:{
        amount:40000
    }})
    expect(state).toEqual(expenses)
})