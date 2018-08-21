import moment from "moment";
import { setTextFilter, setEndDate, setStartDate, sortByDate,sortByAmount } from "../../actions/filters";

test("filter should return object with set text type and text", () =>{
    const action= setTextFilter("test");
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:"test"
    })
})

test('filter with no input shoudl return empty', ()=>{
    const action = setTextFilter();

    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:""
    })
})

test("should generate set start date action object",()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:"SET_START_DATE",
        startDate:moment(0)
    })
})

test("should generate set start date action object",()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:"SET_END_DATE",
        endDate:moment(0)
    })
})

test("should generate action object for sort by amount.", ()=>{
    const action = sortByAmount(100);
    expect(action).toEqual({
        type:"SET_SORT_BY_AMOUNT",
        amount:100,
        sortBy:"amount"
    })
})

test("should generate action object for sort by date.", ()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:"SET_SORT_BY_DATE",
        sortBy:"date",
    })
})