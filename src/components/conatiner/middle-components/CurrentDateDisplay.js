import React from 'react';
import format from 'date-fns/format';
import './CurrentDateDisplay.scss'
import {Link} from 'react-router-dom';
import {sub,add} from 'date-fns';

function CurrentDateDisplay(props) {
 return (
    <div className='current-date-display-container'>
      <div style={{display: 'flex',alignItems:'center'}}>
          <button onClick={()=>props.setCurrentDate(sub(props.currentDate,{months: 1}))} className='arrow-icon-year backward' style={{marginRight: 30,display: 'flex',alignItems:'center'}}>{"<<"}</button>
          <div style={{fontWeight:'bold'}} >{format(props.currentDate,"dd MMM YYY")}</div>
          <button onClick={()=>props.setCurrentDate(sub(props.currentDate,{days: 1}))}  className='arrow-icon month-backward' style={{marginLeft: 5}}>{"<"}</button>
          <button  onClick={()=>props.setCurrentDate(add(props.currentDate,{days: 1}))} className='arrow-icon month-forward'  style={{marginRight: 50}}>{">"}</button>
        </div>
        <div style={{display: 'flex',alignItems:'center'}}>
       
       <div className='route-container'>
         <Link className='route-buttons' to="/" ><div>Day</div></Link>
         <Link className='route-buttons' to="/day" ><div>Month</div></Link>
       </div>
       <button onClick={()=>props.setCurrentDate(add(props.currentDate,{months: 1}))} className='arrow-icon-year forward' style={{marginLeft: 30,display: 'flex',alignItems:'center'}}>{">>"}</button>
       </div>
    </div>
  );
}

export default CurrentDateDisplay;
