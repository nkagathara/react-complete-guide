import React, {useState} from 'react';
import ExpenseList from './ExpenseList';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props){
    const [selectFilter, setFilter] = useState('2020');

    const selectFilterHandler = (selectYear) =>{
        setFilter(selectYear);
    }

    const filteredExpenses = props.item.filter((expense)=>{
        return expense.date.getFullYear().toString() === selectFilter
    })

    return(
        <div className='expenses'>
            <ExpensesFilter selected={selectFilter} onSelectFilter={selectFilterHandler}/>
            <ExpenseList items ={filteredExpenses}/>
        </div>
    )
}

export default Expenses;