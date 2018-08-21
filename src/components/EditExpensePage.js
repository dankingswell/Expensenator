import React from "react"
import {connect} from "react-redux";
import ExpenseForm from "./ExpenseForm"
import {editExpense, removeExpense} from "../actions/expenses"

// routes are passed props implicitly but can be accessed via props
const editExpensePage = (props) => (
    
    <div>
        <h1>Edit Expense</h1>
        <ExpenseForm 
        expense={props.expense}
        onSubmit={(expenseReturn)=>{
            props.dispatch(editExpense(props.expense.id, expenseReturn ))
            props.history.push("/")
        }}
  />
        <button 
        onClick={ () =>{
            props.dispatch(removeExpense({id:props.expense.id}));
            props.history.push("/");
            }
        }>Remove Expense
        </button>

    </div>

);

// history allows us to 
// redirect, go back, go foward, match 
// location: current URL values e.g. ? query="whattt" will be inside location 
const mapStateToProps = (state,props) =>{
    return {
        expense:state.expenses.find(
            (Expense)=>{
                return Expense.id == props.match.params.id
            }
        )
    }
}
export default connect(mapStateToProps)(editExpensePage);