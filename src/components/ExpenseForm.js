import React from "react";
import moment from "moment";
import {connect} from "react-redux"
import "react-dates/initialize"

moment().locale('en-gb');
import {SingleDatePicker} from "react-dates";

class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            description:props.expense ? props.expense.description: "",
            note: props.expense ? props.expense.note:"",
            amount:props.expense ? (props.expense.amount / 100).toString() :"",
            createdAt:props.expense ? moment(props.expense.createdAt) :moment(),
            Calendarfocused:false,
            error:false
        }
        
    }
    
    onDescriptionChange = (event) => {
        const description =  event.target.value;
        this.setState(()=>({description}))
    }
    onNoteChange = (event) => {
        const note = event.target.value;
        this.setState( ()=>({note} ))
    }
    onAmountChange = (event) =>{
        const amount = event.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
        this.setState(()=>({amount}));
        }else{
            event.target.value = Math.round(amount*100)/100;
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt){
        this.setState(()=>({createdAt}))
        }
    }

    onFocusChange = ({focused}) =>{
        this.setState(()=>({Calendarfocused:focused}))
    }

    onSubmit= (event) => {
        event.preventDefault()
        
        if(!this.state.description || !this.state.amount)
        {
            this.setState(()=>({error:true}))
        }else{
            this.setState(()=>({error:false}))
            this.props.onSubmit({
                description: this.state.description,
                amount:parseFloat(this.state.amount,10)*100,
                createdAt: this.state.createdAt.valueOf(),
                note:this.state.note
            })
        }
        
    }
    render(){
        
        return (
        <div>
            <form
            onSubmit={this.onSubmit}
            >
                <input
                type="text"
                placeholder="Description"
                autoFocus
                value ={this.state.description}
                onChange={this.onDescriptionChange}
                />

                <input
                type="text"
                value={this.state.amount}
                placeholder={"Amount"}
                onChange={this.onAmountChange}
                />

                <SingleDatePicker 
                date ={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.Calendarfocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={(day)=>(false)}
                />
                
                <textarea
                placeholder={"Please enter any notes here"}
                value={this.state.note}
                onChange={this.onNoteChange}
                ></textarea>

                <button>Add Expense</button>
                {this.state.error && <p>Please complete the description and amount fields</p>}
                
                
            </form>
        </div>
    )}

}

export default ExpenseForm;