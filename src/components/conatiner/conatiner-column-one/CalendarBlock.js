import React from 'react';
import {Calendar} from 'react-date-range';
import format from 'date-fns/format';
import { useEffect,useRef,useState } from 'react';
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import SelectedTime from '../conatiner-column-two/SelectedTime';
function CalendarBlock(props) {
    const [calendar,setCalendar]=useState('');
    const handleSelect=(date)=>{
        setCalendar(format(date,"dd/MM/yy"));
        props.setDay(format(date,"PPPP"));
        props.setDate(format(date,"dd/MM/yy"));
    }
    useEffect(()=>setCalendar(format(new Date(),"dd/MM/yy")),[]);
  return (
    <div>
        <input value={calendar} hidden/>
      <Calendar
      date={new Date()}
      onChange={handleSelect}/>
    </div>
  );
}

export default CalendarBlock;
