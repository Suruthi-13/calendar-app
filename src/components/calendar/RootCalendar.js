import {React} from 'react';
import Calendar from './Calendar';

function RootCalendar(props) {
  return (
    <div>
      <Calendar currentDate={props.currentDate} setCurrentDate={props.setCurrentDate}  events={props.events} setEvents={props.setEvents} deleteEvent={props.deleteEvent}/>
    </div>
  );
}

export default RootCalendar;
