import {React,useState} from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import Axios from 'axios';

import './EventCreatorPopUp.scss'
import DateTimePicker from 'react-datetime-picker';
// import { events } from '../events';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    innerWidth: '500',
    transform: 'translate(-50%, -50%)',
    opacity: 1,
    backgroundColor:'#BD2E7A',
  },
};
function EventCreatorPopUp(props) {
  const[title,setTitle]=useState("");
  const[date,setDate]=useState('');
  const[description,setDescription]=useState('');
  const[startTime,setStartTime]=useState("");
  const[endTime,setEndTime]=useState("");
  // console.log(props.events);
  // const[events,setEvents]=useState([]);
  const submitted=(e)=>
  {
    // console.log(title+" "+date+" "+startTime+" "+endTime);
    e.preventDefault();
    
    // console.log(event);
    // props.setEvents([{
    //   title:title,
    //   date:date,
    //   startTime:startTime,
    //   endTime:endTime,
    //   description: description},...props.events]);
      // Axios.post('/http://localhost:5169/v1/meetings', {
      // eventTitle: 'title',
      // appointmentDateStartTime: new Date(),
      // appointmentDateEndTime: new Date(),
      // description: 'description'
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
      Axios({
        method: 'post',
        url: 'http://localhost:5169/v1/meetings',
        data: {
          eventTitle: 'title',
          appointmentDateStartTime: new Date(),
          appointmentDateEndTime: new Date(),
          description: 'description'
        }
      });
      props.setDisplay(!props.display)
    // console.log(props.events);

  }
  return (
    <div className='modal-pop-up'>
      <Modal isOpen={true} className='modal-popup' >
        <div className='close-icon'><FontAwesomeIcon icon={faXmark} onClick={()=>props.setDisplay(!props.display)}/></div>
        <div className='input-body'>
          <form>
          <div ><input className='input-field' type="text" placeholder='Add the Event title' value={title} onChange={(e)=>setTitle(e.target.value)} required/></div>
          <div className='input-fields'><label>Appointment Start time:</label><input className='appointment-time-field' type="date" placeholder='starting time' value={date} onChange={(e)=>setDate(e.target.value)}/></div>
          <div className='input-fields'><label>Appointment Start time:</label><input className='appointment-time-field' type="time" placeholder='starting time' value={startTime} onChange={(e)=>setStartTime(e.target.value)}/></div>
          <div className='input-fields'><label>Appointment End time</label><input className='appointment-time-field' type="time" placeholder='End time' value={endTime} onChange={(e)=>setEndTime(e.target.value)}/></div>
          {/* <input type="datetime-local" value={date} onChange={(e)=>setDate(e.target.value)}/> */}
          <input className='description-field' type="text" placeholder='Add the Event description'value={description} onChange={(e)=>setDescription(e.target.value)}/>
          <div className='buttons'>
          <input className='primary-button' type='reset' value='cancel' onClick={()=>props.setDisplay(!props.display)}/>
          <input className='primary-button-two' type="submit" value="Create" onClick={submitted}/>
          </div>
          </form>
        </div>
      </Modal>

    </div>
  );
}

export default EventCreatorPopUp;
