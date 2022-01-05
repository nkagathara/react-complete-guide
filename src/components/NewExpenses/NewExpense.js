import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const submitDataHandler = (enteredData) =>{
    const enterdAllData = {
      ...enteredData,
      id: Math.random().toString()
    }
    props.onAddExpense(enterdAllData);
  }

  
  const addNewExpenseHandler = () =>{
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  };


  return (
    <div className='new-expense'>
      {isEditing ? <ExpenseForm onCancel={stopEditingHandler}  onSaveSubmitData = {submitDataHandler}/> : <button onClick={addNewExpenseHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;