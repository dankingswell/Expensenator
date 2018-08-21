import React from "react"
import ReactDom from "react-dom"
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom"


import expenseDashBoardPage from "../components/ExpenseDashBoardPage"
import addExpensePage from "../components/AddExpensePage"
import editExpensePage from "../components/EditExpensePage"
import helpExpensePage from "../components/HelpExpensePage"
import notFoundErrorPage from "../components/NotFoundErrorPage"
import Header from "../components/Header"
    


const  AppRouter = () => (
    // routes must be nested as third party module expects this
    // react router needs exact prop to ensure only that url is matched else multi components

    // Switch ensures a single child for Browser router and cycles through all options and stops when route is founds
    <BrowserRouter>
        <div>
        <Header />

        <Switch>
            <Route path="/" component={expenseDashBoardPage} exact={true}/>
            <Route path="/create" component={addExpensePage} />
            <Route path="/edit/:id" component={editExpensePage} />
            <Route path="/help" component={helpExpensePage} />
            <Route component={notFoundErrorPage} />
        </Switch>
        </div>
    </BrowserRouter>
// : then variable allows us to access value  in match.params
// 
);

export default AppRouter
