import { format } from 'date-fns';
import React from 'react';
import { Time } from '../../Time';
import './TimeLineGrid.scss'
import { events } from '../../../events';

function TimeLineGrid(props) {
  var newevents=props.events;
  console.log(props.event);
  return (
    <div className='time-line-grid'>
      {/* <div className='current-day'>{format(props.currentDate,"dd/LLLL/yyyy")}</div> */}
        {Time.map((items,key)=>
      {return (
     <div className='time-line'>
      <div className='time'>
      <ul className='time-lines'>
        <li className='time-line-grid-text'>{items.start}</li>
        {/* {props.events.map((datas)=>console.log(datas.startTime))} */}
        
        {props.events.map((datas)=>datas.date===format(props.currentDate,"yyyy-MM-dd")&&(datas.startTime.slice(0,2)==items.start)&&<div className='events-title'>{datas.title}</div>)}
        {props.events.map((datas)=>datas.date===format(props.currentDate,"yyyy-MM-dd")&&(datas.startTime.slice(0,2)<=items.start&&datas.endTime.slice(0,2)>=items.start)&&<div className='events-title-blank'></div>)}
        {/* {events.map((things)=>things.AppointmentDateStartTime===format(props.currentDate,"dd MM yyyy")&&items.start
        {props.events.map((datas)=>console)}
        ===things.startTime&&things.event.map((item)=><div className='events-title'>{item.title}</div>))} */}
      </ul>
      </div>
      <div className='grid-lines'></div>
      
     </div>
      );})}
    </div>
  );
}
export default TimeLineGrid;
