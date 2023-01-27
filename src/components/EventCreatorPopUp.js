import {React,useState,useContext} from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import './EventCreatorPopUp.scss'
import { AddEvent } from '../services/UserServices';
import moment from 'moment';
import { toast,ToastContainer } from 'react-toastify';
import { AppointmentContext } from '../AppointmentContext ';


function EventCreatorPopUp() {
  const {setDayEvents,currentDate,isCreate,setIsCreate}=useContext(AppointmentContext);
  const[eventInputs,setEventInputs]=useState({id:'',title:'',date:moment(currentDate).format("YYYY-MM-DD"),description:'',startTime:'',endTime:''})
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
// if((moment(currentDate).format("YYYY-MM-DD")<moment().format("YYYY-MM-DD")))
// {
//   Toast("You are trying to create event for the Past date");
//   return;
// }
// (moment(eventInputs.date).format("YYYY-MM-DD HH:mm")<=moment().format("YYYY-MM-DD HH:mm"))&&Toast("Event does not allowed past")&&return}
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
    setDayEvents(Math.random());
    setIsCreate(!isCreate)
  }
  return (
    <div>
      <Modal isOpen={true} className='event-creator-box' overlayClassName='overLay'>
       <div><div className='xmark-icon'><FontAwesomeIcon icon={faXmark} onClick={()=>setIsCreate(!isCreate)}/></div>
        <div className='form-container'>
          <form>
          <div ><input className='eventname-input-field' type="text" placeholder='Add the Event title' value={eventInputs.title} onChange={(e)=>setEventInputs({...eventInputs,title:e.target.value})} required/></div>
           <div className='input-field '><label>Date</label><input className='event-time-field' type="date" min={moment().format("YYYY-MM-DD")}  value={eventInputs.date} onChange={(e)=>setEventInputs({...eventInputs,date:e.target.value})}/></div>
          <div className='input-field '><label>Start time</label><input className='event-time-field' type="time"  value={eventInputs.startTime} onChange={(e)=>setEventInputs({...eventInputs,startTime:e.target.value})}/></div>
           <div className='input-field '><label>End time</label><input className='event-time-field' type="time"  value={eventInputs.endTime} onChange={(e)=>setEventInputs({...eventInputs,endTime:e.target.value})}/></div>
          <textarea className='description-input-field' rows="4" columns="50" placeholder='Add the Event description'value={eventInputs.description} onChange={(e)=>setEventInputs({...eventInputs,description:e.target.value})}/>
          <div className='buttons-container'>
          <input className='primary-button' type='reset' value='cancel' onClick={()=>setIsCreate(!isCreate)}/>
          <input className='primary-button-left' type="submit" value="Create" onClick={(e)=>submitted(eventInputs,e)}/>
          </div>
          </form>
        </div></div>
       </Modal>
    </div>
  );
}

export default EventCreatorPopUp;
