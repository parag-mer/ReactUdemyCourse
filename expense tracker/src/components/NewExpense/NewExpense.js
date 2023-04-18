import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
export default function NewExpense(props) {

  const saveExpenseDatahandler = (enteredExpenseData) => {
    const exepnseData = {
      ...enteredExpenseData,
      id : Math.random().toString()
    };
    props.onAddExpense(exepnseData);
  };
  return(
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {saveExpenseDatahandler} />   
    </div>
  );
  
}
 