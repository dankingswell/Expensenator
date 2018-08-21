import uuid from "uuid"
//Actions
// Add, remove,expense

//Uses defualt object for params

export const addExpense = ({description ="",
                            note = "" ,
                            amount=0,
                            createdAt=0  
                                } ={}) => 
    ({
    type:"ADD_EXPENSE",
    expenses: {
        id:uuid(),
        description,
        note,
        createdAt,
        amount
    }
})

export const editExpense = ( id, updates) => (
    {
        type:"EDIT_EXPENSE",
        id,
        updates
    }
)

export const removeExpense = ( {id=0} = {}

) =>({
    type:"REMOVE_EXPENSE",
    id
})
