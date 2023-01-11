import {React,useState,useEffect} from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import Axios from 'axios';
import moment from 'moment';
import uuid from 'react-uuid';
import './EventCreatorPopUp.scss'
function EventCreatorPopUp(props) {
  const[title,setTitle]=useState("");
  const[date,setDate]=useState('');
  const[description,setDescription]=useState('');
  const[startTime,setStartTime]=useState("");
  const[endTime,setEndTime]=useState("");
  const submitted=(e)=>
  {
    e.preventDefault();
    var dateStartTime = moment(date + ' ' + startTime, 'YYYY-MM-DDTHH:mm:ss');
    var dateEndTime=moment(date+''+endTime,'YYYY-MM-DDTHH:mm:ss');
      Axios.post('http://localhost:5169/v1/meetings', {
        appointmentID: uuid(),
        eventTitle: title,
        appointmentDateStartTime:  dateStartTime.format('YYYY-MM-DDTHH:mm'),
        appointmentDateEndTime: dateEndTime.format('YYYY-MM-DDTHH:mm'),
        description: description
      })
      .then((response)=>{
          if(response.status==201)
          alert("Event Created Successfully");
      })
      .catch((error)=> {
        alert(error.response.data.errorMessage);
        props.setErrorMessage(error.response.data.errorMessage);
        });
      
      props.setDisplay(!props.display)
      console.log(props.errorMessage);
     
     

  }
  return (
    <div>
      <Modal isOpen={true} className='event-creator-box' >
       <div><div className='xmark-icon'><FontAwesomeIcon icon={faXmark} onClick={()=>props.setDisplay(!props.display)}/></div>
        <div className='form-container'>
          <form>
          <div ><input className='eventname-input-field' type="text" placeholder='Add the Event title' value={title} onChange={(e)=>setTitle(e.target.value)} required/></div>
          <div className='input-field '><label>Appointment Date:</label><input className='event-time-field' type="date"  value={date} onChange={(e)=>setDate(e.target.value)}/></div>
          <div className='input-field '><label>Appointment Start time:</label><input className='event-time-field' type="time"  value={startTime} onChange={(e)=>setStartTime(e.target.value)}/></div>
          <div className='input-field '><label>Appointment End time</label><input className='event-time-field' type="time"  value={endTime} onChange={(e)=>setEndTime(e.target.value)}/></div>
          <input className='description-input-field' type="text" placeholder='Add the Event description'value={description} onChange={(e)=>setDescription(e.target.value)}/>
          <div className='buttons-container'>
          <input className='primary-button' type='reset' value='cancel' onClick={()=>props.setDisplay(!props.display)}/>
          <input className='primary-button-left' type="submit" value="Create" onClick={submitted}/>
          </div>
          </form>
        </div></div>
      </Modal>
    </div>
  );
}

export default EventCreatorPopUp;
