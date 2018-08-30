import React from "react";
import {connect} from "react-redux";
import getTotalOfCurrentExpenses from "../selectors/expenseHeader"
import selectExpenses from "../selectors/expenses"

export const ExpenseHeader = (props) => (
    <div>
        <p>
            {`Showing ${props.numberOfExpenses}
             ${props.numberOfExpenses > 1 ? "expenses" : "expense"}
             , Total amount: £${props.total}`} 
       </p>
    </div>
);

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses,state.filters)
    return{
        total:getTotalOfCurrentExpenses(visibleExpenses),
        numberOfExpenses:visibleExpenses.length
    }
}

export default connect(mapStateToProps)(ExpenseHeader);