import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {

    const [title_,setTitle] = useState('');
    const titleChangeHandler = (event) =>{
        setTitle(event.target.value);
    }
    const [amount_,setAmount] = useState('');
    const amountChangeHandler = (event) =>{
        setAmount(event.target.value);
    }
    const [date_,setDate] = useState('');
    const dateChangeHandler = (event) =>{
        setDate(event.target.value);
    }
    
    //////////// Same Handler ////////////////////
    // const sameHandler = (identifier, value) => {
    //     if (identifier === "title") {
    //         setTitle(value);
    //         console.log(value);
    //     } else if (identifier === "amount") {
    //         setAmount(value);
    //     } else {
    //         setDate(value)
    //     }
    // }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title_,
            amount: amount_,
            date: new Date(date_)
        }
        console.log( "New expense =>",expenseData);
        props.onSaveExpense(expenseData);
        setAmount('');
        setTitle('');
        setDate('');
    }

    return ( 
        
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} value={title_} />
                {/* <input type='text' onChange={(event) => sameHandler('title',event.target.value)} /> */}
                </div>
                <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={amount_}/>
                </div>
                <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} value={date_}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )

}

export default ExpenseForm;