import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const amountArray = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...amountArray)

  return (
    <div className='chart'>
     {
        props.dataPoints.map(dataPoint => 
            <ChartBar
            key={dataPoint.label}
            value = {dataPoint.value}
            maxValue = {totalMax}
            label = {dataPoint.label}
            />
            )
     }
    </div>
  );
};

export default Chart;
