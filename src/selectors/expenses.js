import moment from "moment"

const getVisibileExpenses = (expenses,{text, sortBy ,startDate,endDate}) =>{
    // filter expense and if all fields match then return value
    return expenses.filter( (expense) => {
       
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day"):true;
        const endDateMatch = endDate  ?  endDate.isSameOrAfter(createdAtMoment, "day") : true;
        const textMatch = typeof(text) != "string" ||  expense.description.toLowerCase().includes(text.toLowerCase()) ;
        return startDateMatch && endDateMatch && textMatch;
    } )
    // sorting return data
    .sort( (a, b) => {
        if(sortBy == "date"){
            return a.createdAt < b.createdAt ? 1 : -1
        }
        if(sortBy == "amount"){
            return a.amount > b.amount ? -1 : 1;
        }
    });
}

export default getVisibileExpenses; 