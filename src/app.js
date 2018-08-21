import React from "react"
import ReactDom from "react-dom"
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom"
import "normalize.css/normalize.css"
import "./styles/styles.scss"
import AppRouter from "./routers/AppRouter"
import "react-dates/lib/css/_datepicker.css"


//redux
import configureStore from "./store/configureStore"
import { addExpense } from "./actions/expenses"
import { setTextFilter } from "./actions/filters"
import getVisibileExpenses from "./selectors/expenses"

// provider allows components to accesss store
import {Provider} from "react-redux"

const store = configureStore(); 

store.dispatch(addExpense({description: "gas bill", amount:500}))
store.dispatch(addExpense({description:"water bill", amount: 100}))
store.dispatch(addExpense({description:"fan", amount:30}))
store.dispatch(addExpense({description:"rent", amount:1999}))


//console.log(getVisibileExpenses(store.getState().expenses, store.getState().filters ))


// wrapping in Provider tag and passing store
const Jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDom.render(Jsx, document.getElementById("app"))