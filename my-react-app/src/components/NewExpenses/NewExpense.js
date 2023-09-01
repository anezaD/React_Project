import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        };
       
        props.onNewExpenseData(expenseData);
        console.log("added Data-->",expenseData); 
    }

    return (
        <div className='new-expense'>
            <ExpenseForm  onSaveExpense = {saveExpenseDataHandler} />  
        </div>
    );
} 

export default NewExpense; 