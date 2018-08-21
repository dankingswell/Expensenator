// Expenses reducer
//takes default state and action

const expenseReducerDefaultState = []
const expensesReducer = (state = expenseReducerDefaultState,  action) =>{

    switch(action.type){
        case "ADD_EXPENSE":
        // ES6 SpreadOperator =  state.concat(action.expenses)
        // [...Arrayname, "new Prop"]  ... means take all vals from array mentioned      
        return [...state, action.expenses];
        
        case "REMOVE_EXPENSE":
            return state.filter((item)=>{
                return item.id != action.id   
            });
        
        case "EDIT_EXPENSE":
            return state.map((expense)=>{
                if (expense.id == action.id ){
                    return {
                        ...expense,
                        // as the functions passes an object it acts as a KVP
                        ...action.updates
                       }
                    }else{
                    return expense;
                }
            });

        default:
            return state;
    }

}

export default expensesReducer;