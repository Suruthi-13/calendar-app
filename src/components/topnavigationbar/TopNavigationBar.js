import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import './TopNavigationBar.scss'
import format from 'date-fns/format';

function TopNavigationBar(props) {
  var day=format(new Date(),"dd");
  return (
    <div className='top-navigation-bar'>
      <div className='hamburger-icon'><FontAwesomeIcon  className='hamburger-icon' icon={faBars} onClick={()=>props.setDisplay(!props.display)}/></div>
      <h1 className='date'>{day}</h1>
      <div className='calendar-text'>Calendar</div>
      <div className='today-button' onClick={()=>props.setCurrentDate(new Date())}>TODAY</div>
    </div>
  );
}

export default TopNavigationBar;
