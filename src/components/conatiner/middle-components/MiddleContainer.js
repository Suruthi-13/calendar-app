import {React,useState} from 'react';
import CurrentDateDisplay from './CurrentDateDisplay';
import DailyEventTimeLineGrid from './DailyEventTimeLineGrid';
import RootCalendar from '../../calendar/RootCalendar';
import { Routes,Route } from 'react-router-dom';
import './MiddleContainer.scss';
import '../../calendar/Calendar.scss'
import Axios from 'axios';

function MiddleContainer(props) {
 
  const deleteEvent=(id)=>
  {
    Axios.delete('http://localhost:5169/v1/meetings/'+id)
    .then(response => {
        if(response.status==204)
        alert("Event Deleted Successfully");
    });
  }
 return (
    <div className='middle-container'>
      <div className='selected-time-display'><CurrentDateDisplay currentDate={props.currentDate} setCurrentDate={props.setCurrentDate}/></div>
      <div className='routes-pages'>
      <Routes >
      <Route path="/day" element={<div className='event-schedular'><RootCalendar currentDate={props.currentDate} setCurrentDate={props.setCurrentDate} events={props.events} setEvents={props.setEvents} deleteEvent={deleteEvent}/></div>}/>
      <Route path="/" element={<div className="day-event"><DailyEventTimeLineGrid currentDate={props.currentDate} events={props.events} setEvents={props.setEvents} deleteEvent={deleteEvent} /></div>}/>
      </Routes>
      </div>
    </div>
  );
}

export default MiddleContainer;
