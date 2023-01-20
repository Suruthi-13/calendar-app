import {React} from 'react';
import CurrentDateDisplay from './CurrentDateDisplay';
import DailyEventTimeLineGrid from './DailyEventTimeLineGrid';
import RootCalendar from '../../calendar/RootCalendar';
import { Routes,Route } from 'react-router-dom';
import './MiddleContainer.scss';
import '../../calendar/Calendar.scss'

function MiddleContainer(props) {
 return (
    <div className='middle-container'>
      <div className='selected-time-display'><CurrentDateDisplay currentDate={props.currentDate} setCurrentDate={props.setCurrentDate}/></div>
      <div className='routes-pages'>
      <Routes >
      <Route path="/day" element={<div className='event-schedular'><RootCalendar currentDate={props.currentDate} setCurrentDate={props.setCurrentDate}/></div>}/>
      <Route path="/" element={<div className="day-event"><DailyEventTimeLineGrid currentDate={props.currentDate}  /></div>}/>
      </Routes>
      </div>
    </div>
  );
}

export default MiddleContainer;
