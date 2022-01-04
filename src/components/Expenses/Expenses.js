import React, {useState} from 'react';
import ExpneseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props){
    const [selectFilter, setFilter] = useState('2020');

    const selectFilterHandler = (selectYear) =>{
        setFilter(selectYear);
        console.log("selectFilter::",selectFilter);
    }

    return(
        <div className='expenses'>
            <ExpensesFilter selected={selectFilter} onSelectFilter={selectFilterHandler}/>
            <ExpneseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date}></ExpneseItem>
            <ExpneseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date}></ExpneseItem>
            <ExpneseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date}></ExpneseItem>
        </div>
    )
}

export default Expenses;