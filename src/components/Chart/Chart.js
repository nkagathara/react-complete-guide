import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    let dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValue);
    
    return (
        <div className='chart'>
            {props.dataPoints.map(eachData => <ChartBar key={eachData.label} maxValue={totalMaximum} label={eachData.label} value={eachData.value} />)}
        </div>
    )
}

export default Chart
