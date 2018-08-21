// filters
// set text, setsortbydate,
//set sort by amount, setStartDate,SetEndDate
export const setTextFilter = (text = "")=>({
    type:"SET_TEXT_FILTER",
    text
})

export const sortByAmount = (amount=0) => ({
    type: "SET_SORT_BY_AMOUNT",
    sortBy:"amount",
    amount
});

export const sortByDate = ()=>({
    type:"SET_SORT_BY_DATE",
    sortBy:"date"
})

export const setStartDate =(startDate=undefined) => ({
    type:"SET_START_DATE",
    startDate

})

export const setEndDate =(endDate=undefined) => ({
    type:"SET_END_DATE",
    endDate
})