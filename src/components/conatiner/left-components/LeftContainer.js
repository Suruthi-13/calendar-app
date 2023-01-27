import {React} from 'react';
import AppointmentCreator from './AppointmentCreator';
import RootCalendar from '../../calendar/RootCalendar';
import RandomQuotes from './RandomQuotes';

function LeftContainer() {
  return (
    <div>
      <div className='create-event-icon'><AppointmentCreator /></div>
      <div className='fixed-calendar'><RootCalendar/></div>
      <div className='fixed quotes'><RandomQuotes/></div>
    </div>
  );
}

export default LeftContainer;
