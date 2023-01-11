import {React,useState} from 'react';
import AppointmentCreator from './AppointmentCreator';
import RootCalendar from '../../calendar/RootCalendar';
import RandomQuotes from './RandomQuotes';

function LeftContainer(props) {
  const [errorMessage,setErrorMessage]=useState('');
  return (
    <div>
      <div className='create-event-icon'><AppointmentCreator events={props.events} setEvents={props.setEvents}  errorMessage={errorMessage} setErrorMessage={setErrorMessage}/></div>
      <div className='fixed-calendar'><RootCalendar currentDate={props.currentDate} setCurrentDate={props.setCurrentDate}/></div>
      <div className='fixed quotes'><RandomQuotes/></div>
    </div>
  );
}

export default LeftContainer;
