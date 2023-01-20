import {React,useState} from 'react';
import AppointmentCreator from './AppointmentCreator';
import RootCalendar from '../../calendar/RootCalendar';
import RandomQuotes from './RandomQuotes';

function LeftContainer(props) {
  return (
    <div>
      <div className='create-event-icon'><AppointmentCreator  currentDate={props.currentDate}/></div>
      <div className='fixed-calendar'><RootCalendar currentDate={props.currentDate} setCurrentDate={props.setCurrentDate}/></div>
      <div className='fixed quotes'><RandomQuotes/></div>
    </div>
  );
}

export default LeftContainer;
