import getVisibileExpenses from "../../selectors/expenses"
import moment from "moment"

const expenses = [
    {
        "description":"rent for house",
        "note": "this is a note",
        "amount" : 400,
        "createdAt" : moment(0)
    },
    {
        "description":"old record",
        "note": "this is a note",
        "amount" : 500,
        "createdAt" : moment(0).subtract(4,"days")
    },
    {
        "description":"new shiny record",
        "note": "this is a note",
        "amount" : 600,
        "createdAt" : moment(0).add(5,"days")
    }
]

test("filter by text should return expected array", () => {

    const filters = {
        text:"record",
        sortBy:"date"
    }
    const selector = getVisibileExpenses(expenses, filters)

    expect(selector).toEqual([expenses[2], expenses[1]])
})

test("filter by date should correctly remove records before a start date", () =>{
    
    const filters = {
        startDate:moment(0),
        sortBy:"date"
    }
    const selector = getVisibileExpenses(expenses, filters)

    expect(selector).toEqual([expenses[2], expenses[0]])

});

test("filter by date should correctly remove records after a end date", () =>{
    
    const filters = {
        endDate:moment(0).subtract(4,"days"),
        sortBy:"date"
    }
    const selector = getVisibileExpenses(expenses, filters)

    expect(selector).toEqual([expenses[1]])

});

test("sort by amount should arrange items for there given amount", () =>{
    const filters = {
        sortBy:"amount"
    }
    const selector = getVisibileExpenses(expenses, filters)
    expect(selector).toEqual([expenses[2],expenses[1],expenses[0]])
})

test("sort by date should return items in date order", () => {

    const filters = {
        sortBy:"date"
    }
    const selector = getVisibileExpenses(expenses, filters)
    expect(selector).toEqual([expenses[2],expenses[0],expenses[1]])
})