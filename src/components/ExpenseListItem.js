import React from "react";
import {removeExpense} from "../actions/expenses";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";


const ExpenseListItem = ({description, amount, createdAt,dispatch,id}) => (
    <div>
        <Link to={`/edit/${id}`} component={"./EditExpensePage.js"}>
            <h3>{description}</h3>
        </Link>

        <p>
        {`£${numeral(amount/100).format("0,0.00")}
           -  ${moment(createdAt).format("Do MMMM YY")}`}
        </p>
        
    </div>
    );

export default ExpenseListItem;