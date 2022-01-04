import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const submitDataHandler = (enteredData) =>{
    const enterdAllData = {
      ...enteredData,
      id: Math.random().toString()
    }
    props.onAddExpense(enterdAllData);
  }
  return (
    <div className='new-expense'>
      <ExpenseForm  onSaveSubmitData = {submitDataHandler}/>
    </div>
  );
};

export default NewExpense;