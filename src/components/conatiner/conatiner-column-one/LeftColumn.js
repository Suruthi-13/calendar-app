import React from 'react';
import CreateEvent from './CreateEvent';
import RootCalendar from '../../calendar/RootCalendar';

function LeftColumn(props) {
  return (
    <div>
      <div className='create-event-icon'><CreateEvent events={props.events} setEvents={props.setEvents}/></div>
      <div className='fixed-calendar'><RootCalendar currentDate={props.currentDate} setCurrentDate={props.setCurrentDate}/></div>
    </div>
  );
}

export default LeftColumn;
