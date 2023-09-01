import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import { useState } from "react";

const App = () => {

  const expenses_Dummy = [
    {
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      id: "e1",
    },
    { 
      title: "New TV", 
      amount: 799.49, 
      date: new Date(2021, 2, 12) ,
      id: "e2",
    },
    {
     
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      id: "e3",
    },
    {
     
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      id: "e4",
    }
  ];

  const [expenses,setExpenses] = useState(expenses_Dummy);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [ expense, ...prevExpenses];
    });
    console.log(expenses);

  };

  return (
    <div>
      <NewExpense onNewExpenseData={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;