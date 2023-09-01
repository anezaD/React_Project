import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../FilterExpenses/ExpensesFilter";
import { useState } from 'react';

const Expenses = (props) => {

  const [selectedVal, setValue] = useState("2020");
  const filterChangeHandler = (val) => {
    setValue(val);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedVal} onChangeYear={filterChangeHandler} />
        {props.items.filter( y => y.date.getFullYear().toString() === selectedVal).map( x => (<ExpenseItem key={x.id} title={x.title} date={x.date} amount={x.amount} />))}
      </Card>
    </div>
  );
};

export default Expenses;
