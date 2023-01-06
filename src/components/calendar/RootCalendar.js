import {React,useState} from 'react';
import Calendar from './Calendar';

function RootCalendar(props) {
    // const[currentDate,setCurrentDate]=useState(new Date());
  return (
    <div>
      <Calendar currentDate={props.currentDate} setCurrentDate={props.setCurrentDate}  events={props.events}/>
    </div>
  );
}

export default RootCalendar;
