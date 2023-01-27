import {React,useState,useContext} from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import {UpdateEvent } from '../../services/UserServices';
import {toast,ToastContainer} from 'react-toastify';
import { AppointmentContext } from '../../AppointmentContext ';
function UpdatePopUp(props) {
  const {setDayEvents}=useContext(AppointmentContext);
    const[updatingEvents,setUpdatingEvents]=useState({id:props.result.appointmentID,
        title:props.result.eventTitle,
        date:moment(props.result.appointmentDateStartTime).format("yyyy-MM-DD"),
        startTime:moment(props.result.appointmentDateStartTime).format("HH:mm"),
        endTime:moment(props.result.appointmentDateEndTime).format("HH:mm"),
        description:props.result.description
      });
      const Toast=(message)=>
      {
        toast(message,{
        position: "top-center",
       autoClose: 4000,
       hideProgressBar: true,
       closeOnClick: true,
       pauseOnHover: false,
       draggable: true,
       color: 'black',
       })
       {<ToastContainer/>}
      }
      const updateToggle=async (e,updatingEvents)=>
      {
        e.preventDefault(); 
        if (updatingEvents.title.trim() ===""){ 
          Toast("Please fill the Event title");
          return;
        }
        if(moment(updatingEvents.date+ ' ' + updatingEvents.startTime).format('YYYY-MM-DDTHH:mm')<moment().format('YYYY-MM-DDTHH:mm'))
        {
          Toast("Appointment does not allowed for past");
          return;
        }
        await UpdateEvent(updatingEvents);
        setDayEvents(Math.random());
        props.setUpdatePopup(!props.updatePopup);
        props.setEventDisplay(!props.eventDisplay);
    
      }
  return (
    <div >
      <Modal isOpen={true} className='event-creator-box' style={{width:'550px'}}overlayClassName='overlay'>
      <div style={{paddingTop: '20px',paddingLeft:10,fontWeight:'bolder'}}>Update</div><hr/>
      {props.result && 
        <div className='form-container' style={{marginTop:'25px'}}>
          <form>
          <div ><input className='eventname-input-field' type="text"  value={updatingEvents.title} onChange={(e)=>setUpdatingEvents({...updatingEvents,title:e.target.value})} /></div>
          <div className='input-field '><label>Date:</label><input className='event-time-field' type="date" min={moment().format("YYYY-MM-DD")} value={updatingEvents.date} onChange={(e)=>setUpdatingEvents({...updatingEvents,date:e.target.value})}/></div>
          <div className='input-field '><label>Start time:</label><input className='event-time-field' type="time"  value={updatingEvents.startTime} onChange={(e)=>setUpdatingEvents({...updatingEvents,startTime:e.target.value})}/></div>
          <div className='input-field '><label>End time</label><input className='event-time-field' type="time"  value={updatingEvents.endTime} onChange={(e)=>setUpdatingEvents({...updatingEvents,endTime:e.target.value})}/></div>
          <textarea rows="4" cols="50" className='description-input-field' type="text" placeholder='Add the Event description'value={updatingEvents.description} onChange={(e)=>setUpdatingEvents({...updatingEvents,description:e.target.value})}/>
          <div className='buttons-container'>
          <input className='primary-button-left' type='reset' value='cancel' onClick={()=>{props.setUpdatePopup(!props.updatePopup);props.setEventDisplay(!props.eventDisplay)}}/>
          <input className='primary-button-left' type="submit" value="save" onClick={(e)=>updateToggle(e,updatingEvents)}/>
          </div>
          </form>
        </div>}
     </Modal>
    </div>
  );
}

export default UpdatePopUp;
