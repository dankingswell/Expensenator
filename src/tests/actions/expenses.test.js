import { addExpense, editExpense, removeExpense } from "../../actions/expenses";


test("should return a remove expense object", ()=>{
    const action =  removeExpense({id:"100aaa"});

    expect(action).toEqual({
        id:"100aaa",
        type:"REMOVE_EXPENSE"
    })
});

test("should return object with expected info", () => {
    const action =  editExpense("1010101", {lemon:true});

    expect(action).toEqual({
        type:"EDIT_EXPENSE",
        id:"1010101",
        updates:{
            lemon:true
        }
    })
})

test("Values passed should be applied", ()=>{
    const expenseData = {
        description:"rent",
        amount:10000,
        createdAt:1000,
        note:"this is a note"
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expenses:
            {...expenseData,
            id:expect.any(String)
            
            }

    })
})

test("should setup action with defaults", ()=>{
    const action = addExpense();
    expect(action).toEqual(
        {
        type:"ADD_EXPENSE",
        expenses:{
            id:expect.any(String),
            description:"",
            amount:0,
            note:"",
            createdAt:0
        }
    })
})