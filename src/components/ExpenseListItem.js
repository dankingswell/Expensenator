import React from "react"
import {removeExpense} from "../actions/expenses"
import { Link } from "react-router-dom"


const ExpenseListItem = ({description, amount, createdAt,dispatch,id}) => (
    <div>
        <Link to={`/edit/${id}`} component={"./EditExpensePage.js"}>
            <h3>{description}</h3>
        </Link>

        <p>{amount/100} - {createdAt}</p>
        
    </div>
    );

export default ExpenseListItem