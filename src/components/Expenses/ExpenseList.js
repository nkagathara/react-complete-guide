import React from 'react'
import './ExpenseList.css'
import ExpneseItem from './ExpenseItem'

const ExpenseList = (props) => {

    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
    }

    return (
        <div>
            <li className='expenses-list'>
            {props.items.map(expense => <ExpneseItem key={expense.id} title= {expense.title} amount={expense.amount} date={expense.date} />)}
            </li>
        </div>
    )
}

export default ExpenseList
