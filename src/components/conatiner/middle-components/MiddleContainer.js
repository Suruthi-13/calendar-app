import {React} from 'react';
import CurrentDateDisplay from './CurrentDateDisplay';
import DailyEventTimeLineGrid from './DailyEventTimeLineGrid';
import RootCalendar from '../../calendar/RootCalendar';
import { Routes,Route } from 'react-router-dom';
import './MiddleContainer.scss';
import '../../calendar/Calendar.scss'

function MiddleContainer() {
 return (
    <div className='middle-container'>
      <div className='selected-time-display'><CurrentDateDisplay/></div>
      <div className='routes-pages'>
      <Routes >
      <Route path="/month" element={<div className='event-schedular'><RootCalendar/></div>}/>
      <Route path="/" element={<div className="day-event"><DailyEventTimeLineGrid/></div>}/>
      </Routes>
      </div>
    </div>
  );
}

export default MiddleContainer;
