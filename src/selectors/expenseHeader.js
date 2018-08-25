
export default  (expenses = [{amount:0}] ) => {
    const total = expenses.reduce((acc,expense)=>{
        return acc + expense.amount
    },0);
    return total/100 ;
} 