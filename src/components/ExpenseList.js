import React from "react"
import { connect } from "react-redux"
import ExpenseListItem from "./ExpenseListItem"
import selectExpenses from "../selectors/expenses"

// export as named to allow for testing
export const ExpenseList = (props) => (
    
    <div>
    
        <h1>ExpenseList</h1>
        {
            props.expenses.length > 0 ? 
             <div>   
                {props.expenses.map((expense)=>{
                    
                    return <ExpenseListItem 
                    key={expense.id}
                    // passes all props as KVP's
                    {...expense}
                    />
                })}
            </div> : <p>All cleared, no expenses</p>
        }
    </div>
);


// function is passed to connect to communicate
// which parts of state need to be given to component
// connect implicitly passes state
const mapStateToProps =(state) => {
    return {
        expenses:selectExpenses(state.expenses,state.filters)
    }
}


// connect returns a wrapper function
// this wrapper function has the ability to use the state passed in
// invoke new function with state on component
// component is given state props
export default connect(mapStateToProps)(ExpenseList);

// export connected component