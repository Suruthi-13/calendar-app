import {React,useState,useContext} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import './TopNavigationBar.scss'
import format from 'date-fns/format';
function TopNavigationBar(props) {
  var day=format(new Date(),"dd");
 
  return (
    <div className='top-navigation-bar'>
      <div className='left-collections'>
      <div className='hamburger-icon'><FontAwesomeIcon  className='hamburger-icon' icon={faCalendar} /></div>
      <h1 className='date'>{day}</h1>
      <div className='calendar-text'>Calendar</div>
      <button className='today-button' onClick={()=>props.setCurrentDate(new Date())}>TODAY</button>
      </div>
    </div>
  );
}

export default TopNavigationBar;
