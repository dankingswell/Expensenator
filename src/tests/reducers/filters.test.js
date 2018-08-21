import filtersReducer from "../../reducers/filters"
import moment from "moment"


test("should initalise default filter values" , ()=>{
    // makes defaults
    const state = filtersReducer(undefined, {type:"@@INIT"});
    expect(state).toEqual({
        text:"",
        sortBy:"date",
        startDate:moment().startOf("month"),
        endDate:moment().endOf("month")
    })
})

test("should change sort by state to correct amount", () => {
    const state = filtersReducer(undefined, {type:"SET_SORT_BY_AMOUNT"})

    expect(state.sortBy).toBe("amount");
})

test("should change sort by state to correct date", () => {
    const state = filtersReducer({sortBy:"amount"}, {type:"SET_SORT_BY_DATE"})

    expect(state.sortBy).toBe("date");
})

test("should change set text filter property", () => {
    const state = filtersReducer(undefined, {type:"SET_TEXT_FILTER",text:"hhd"})

    expect(state.text).toBe("hhd");
})

test("should change set startDate filter property", () => {
    const state = filtersReducer(undefined, {type:"SET_START_DATE",startDate:moment(0).subtract(1,"days")})

    expect(state.startDate).toEqual(moment(0).subtract(1,"days"));
})

test("should change set endDate filter property", () => {
    const state = filtersReducer(undefined, {type:"SET_END_DATE",endDate:moment(0).subtract(1,"days")})

    expect(state.endDate).toEqual(moment(0).subtract(1,"days"));
})