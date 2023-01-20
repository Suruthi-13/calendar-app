import {React} from 'react';
import Calendar from './Calendar';
import { useLocation } from 'react-router-dom';

function RootCalendar(props) {
 
  // console.log(location.pathname);
  return (
    <div>
      <Calendar currentDate={props.currentDate} setCurrentDate={props.setCurrentDate}/>
    </div>
  );
}

export default RootCalendar;
