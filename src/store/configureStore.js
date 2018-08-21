import {createStore, combineReducers} from "redux"
import  expensesReducer  from "../reducers/expenses"
import filtersReducer from "../reducers/filters"


// when importing function we can call function and store will be created
export default () => {

    const store = createStore(
        // combine reducers takes object with 
        // key value pairs with reducer and their name
         
        combineReducers({
             expenses:expensesReducer,
             filters:filtersReducer
         }),
         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     )

     return store;

}


