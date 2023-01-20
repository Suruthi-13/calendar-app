import {React,useState} from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import './EventCreatorPopUp.scss'
import { AddEvent } from '../services/UserServices';
import moment from 'moment';
import { toast,ToastContainer } from 'react-toastify';


function EventCreatorPopUp(props) {
  const[events,setEvents]=useState({title:'',date:moment(props.currentDate).format("yyyy-MM-DD"),description:'',startTime:'',endTime:''})
  const Toast=(message)=>
  {
   toast(message,{
      position: "top-center",
   autoClose: 3000,
   hideProgressBar: true,
   closeOnClick: true,
   pauseOnHover: false,
   draggable: true,
   color: 'black',
   
   })
   {<ToastContainer/>}
}
  const submitted= async (events,e)=>
  {
    e.preventDefault();
    if (events.title.trim() ===""){ 
      Toast("Please fill the Event title");
      return;
    }
    if(moment(events.date + ' ' + events.startTime).format('YYYY-MM-DDTHH:mm')<moment().format('YYYY-MM-DDTHH:mm'))
    {
      Toast("Appointment does not allowed for past");
      return;
    }
    await AddEvent(events);

      props.setDisplay(!props.display);
  }
  return (
    <div>
      <Modal isOpen={true} className='event-creator-box' overlayClassName='overLay'>
       <div><div className='xmark-icon'><FontAwesomeIcon icon={faXmark} onClick={()=>props.setDisplay(!props.display)}/></div>
        <div className='form-container'>
          <form>
          <div ><input className='eventname-input-field' type="text" placeholder='Add the Event title' value={events.title} onChange={(e)=>setEvents({...events,title:e.target.value})} required/></div>
           <div className='input-field '><label>Date</label><input className='event-time-field' type="date"  value={events.date} onChange={(e)=>setEvents({...events,date:e.target.value})}/></div>
          <div className='input-field '><label>Start time</label><input className='event-time-field' type="time"  value={events.startTime} onChange={(e)=>setEvents({...events,startTime:e.target.value})}/></div>
           <div className='input-field '><label>End time</label><input className='event-time-field' type="time"  value={events.endTime} onChange={(e)=>setEvents({...events,endTime:e.target.value})}/></div>
          <textarea className='description-input-field' rows="4" columns="50" placeholder='Add the Event description'value={events.description} onChange={(e)=>setEvents({...events,description:e.target.value})}/>
          <div className='buttons-container'>
          <input className='primary-button' type='reset' value='cancel' onClick={()=>props.setDisplay(!props.display)}/>
          <input className='primary-button-left' type="submit" value="Create" onClick={(e)=>submitted(events,e)}/>
          </div>
          </form>
        </div></div>
       </Modal>
    </div>
  );
}

export default EventCreatorPopUp;
