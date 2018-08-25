import React from "react"
import ExpenseList from "./ExpenseList"
import ExpenseListFilters from "./ExpenseListFilters"
import ExpenseHeader from "./ExpenseHeader"




const expenseDashBoardPage = () => (
    <div>
        <ExpenseHeader />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);


export default expenseDashBoardPage;