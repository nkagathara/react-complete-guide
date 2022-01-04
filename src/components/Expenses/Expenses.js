import ExpneseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props){
    return(
        <div className='expenses'>
            <ExpneseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date}></ExpneseItem>
            <ExpneseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date}></ExpneseItem>
            <ExpneseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date}></ExpneseItem>
        </div>
    )
}

export default Expenses;