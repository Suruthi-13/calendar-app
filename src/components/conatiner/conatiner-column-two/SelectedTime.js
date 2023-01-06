import React from 'react';
import format from 'date-fns/format';
import './SelectedTime.scss'
import {Link} from 'react-router-dom'

function SelectedTime(props) {
 return (
    <div className='time-display'>
      <div>
       <div className='day'>{format(props.currentDate,"dd,EEE")}</div>
       <div className='date'></div>
       </div>
       <div className='route'>
         <Link className='routeLink' to="/" ><div className='day-link'>Day</div></Link>
         <Link className='routeLink' to="/day" ><div className='month-link'>Month</div></Link>
       </div>
    </div>
  );
}

export default SelectedTime;
