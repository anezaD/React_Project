import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

const ExpenseItem = (props) => {
  const [title_, setTitle] = useState(props.title) 

  const clickHandler = () => {
    setTitle('Updated by Aneza!');
  }

  return (
    <Card className='expense-item'>
       <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
            <h2>{title_}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            <button onClick={clickHandler}>Test Button </button>
        </div>
    </Card>
  );
}

export default ExpenseItem;
