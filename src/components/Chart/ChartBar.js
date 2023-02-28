
import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
    let heightFill = '0%';
    if(props.value > 0){
        heightFill = Math.round((props.value/props.maxValue)*100)+'%'
    }
 
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
            style={{height: heightFill}}
          className='chart-bar__fill'
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;
