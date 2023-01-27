import {React,useContext} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-regular-svg-icons";
import './TopNavigationBar.scss';
import { AppointmentContext } from '../../AppointmentContext ';
import AppointmentCreator from '../conatiner/left-components/AppointmentCreator';
function TopNavigationBar() {
  const {setCurrentDate}= useContext(AppointmentContext);
  return (
    <div className='top-navigation-bar'>
      <div className='left-collections'>
      <div className='hamburger-icon'><FontAwesomeIcon  className='hamburger-icon' icon={faCalendar} /></div>
      <div className='calendar-text'>Day Planner</div>
      <button className='today-button' onClick={()=>setCurrentDate(new Date())}>TODAY</button>
      </div>
      <div className='hidden-appointment-creator-container'>
       <AppointmentCreator/>
      </div>
      </div>
  );
}

export default TopNavigationBar;
