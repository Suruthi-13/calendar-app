import React from 'react';
import SelectedTime from './SelectedTime';
import TimeLineGrid from './TimeLineGrid';
import RootCalendar from '../../calendar/RootCalendar';
import { Routes,Route } from 'react-router-dom';
import './Centre.scss';
import '../../calendar/Calendar.scss'

function Centre(props) {
  return (
    <div className='middle-container'>
      <div className='selected-time-display'><SelectedTime currentDate={props.currentDate}/></div>
      <div className='routes-pages'>
      <Routes >
      <Route path="/day" element={<div className='event-schedular'><RootCalendar currentDate={props.currentDate} setCurrentDate={props.setCurrentDate} events={props.events} /></div>}/>
      <Route path="/" element={<div className="day-event"><TimeLineGrid currentDate={props.currentDate} events={props.events}/></div>}/>
      </Routes>
      </div>
    </div>
  );
}

export default Centre;
