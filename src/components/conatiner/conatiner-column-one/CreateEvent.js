import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import './CreateEvent.scss';
import { useState } from 'react';
import EventCreatorPopUp from '../../EventCreatorPopUp';

function CreateEvent(props) {
 const [display,setDisplay]=useState(false);
 const toggle=()=>
 {
  setDisplay(!display);
 }
  return (
    <div className='create-event'>
    <div   className='create-event-container'>
      <FontAwesomeIcon  onClick={toggle}  className="plus-icon" icon={faPlus} />
      <label  onClick={toggle}  className='create-text'>Create</label>
      {display&&<div><EventCreatorPopUp setDisplay={setDisplay} display={display} events={props.events} setEvents={props.setEvents}/></div>}
    </div>
    </div>
  );
}

export default CreateEvent;
