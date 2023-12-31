
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../FilterExpenses/ExpensesFilter";
import { useState } from 'react';
import ExpensesList from "./ExpnensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedVal, setValue] = useState("2020");
  const filterChangeHandler = (val) => {
    setValue(val);
  };

  const filteredExpeneses = props.items.filter(y => y.date.getFullYear().toString() === selectedVal);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedVal} onChangeYear={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpeneses} />
        <ExpensesList items={filteredExpeneses} />
      </Card>
    </div>
  );
};

export default Expenses;
