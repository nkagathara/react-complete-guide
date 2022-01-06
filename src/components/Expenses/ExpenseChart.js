import React from 'react'
import Chart from '../Chart/Chart';

const ExpenseChart = (props) => {
    let allChartDataPoints = [
        {label:'Jan', value: 0},
        {label:'Feb', value: 0},
        {label:'Mar', value: 0},
        {label:'Apr', value: 0},
        {label:'May', value: 0},
        {label:'Jun', value: 0},
        {label:'Jul', value: 0},
        {label:'Aug', value: 0},
        {label:'Sep', value: 0},
        {label:'Oct', value: 0},
        {label:'Nov', value: 0},
        {label:'Dec', value: 0},
    ];

    for(const expense of props.expenses){
        const monthExpense = expense.date.getMonth();
        allChartDataPoints[monthExpense].value += expense.amount;
    }

    return (
        <div>
            <Chart dataPoints = {allChartDataPoints} />
        </div>
    )
}

export default ExpenseChart
