import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import './AppointmentCreator.scss';
import { useState } from 'react';
import EventCreatorPopUp from '../../EventCreatorPopUp';

function AppointmentCreator(props) {
 const [display,setDisplay]=useState(false);
 const toggle=()=>
 {
  setDisplay(!display);
 }
  return (
    <div className='appointment-creator'>
    <div   className='appointment-creator-container'>
      <div><FontAwesomeIcon  onClick={toggle}  className="plus-icon" icon={faPlus} />
      <label  onClick={toggle}  className='create-text'>Create</label></div>
      {display&&<div><EventCreatorPopUp setDisplay={setDisplay} display={display}  currentDate={props.currentDate}/></div>}
    </div>
    </div>
  );
}

export default AppointmentCreator;
