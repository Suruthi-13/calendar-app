import {React,useState,useEffect} from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark,faTrash,faPen} from "@fortawesome/free-solid-svg-icons";
import './Modals.scss';
import moment from 'moment';
import DeletePopUp from './popups/DeletePopUp';
import { UpdateEvent } from '../services/UserServices';
import { GetEventById } from '../services/UserServices';
import UpdatePopUp from './popups/UpdatePopUp';
Modal.setAppElement('#root');
var result;
function Modals(props) {
  const[display,setDisplay]=useState(false);
  const[updatePopup,setUpdatePopup]=useState(false);
 
  useEffect((e)=>
  {
    
     const getEvent=async()=>
     {
      result=await GetEventById(props.id);
     }
     getEvent();
  },)
  const toggle=()=>{
    setUpdatePopup(!updatePopup);
  }
 
  
  return (
    <div>
        <Modal isOpen={true}  className='modal-popup-daily-events' overlayClassName='overlay'>
         <div><div  className='xmark-icon'><FontAwesomeIcon icon={faXmark}  onClick={()=>props.setEventDisplay(!props.eventDisplay)}  /></div>
        {result && <div> <div className='popup-events'><label>Event</label>-{result.eventTitle}</div>
        <div className='popup-events'><label>Description</label>-{result.description}</div>
        <div className='popup-events'><label >Date</label>-{moment(result.appointmentDateStartTime).format("DD-MM-yy")}</div>
        <div className='popup-events'><label >startTime</label>-{moment(result.appointmentDateStartTime).format("hh:mm a")}</div>
        <div className='popup-events'><label>EndTime</label>-{moment(result.appointmentDateEndTime).format("hh:mm a")}</div> </div> }
        <div className='buttons-container'><FontAwesomeIcon icon={faTrash} className='primary-button' onClick={()=>setDisplay(!display)}/>
        <FontAwesomeIcon icon={faPen} onClick={toggle} className='primary-button-left'/></div></div>
        {display && <DeletePopUp deleteEvent={props.deleteEvent} id={props.id} eventDisplay={props.eventDisplay} setDisplay={setDisplay} setEventDisplay={props.setEventDisplay} setError={props.setError}/>}
        {updatePopup && <div className='event-creator-box'>
         <UpdatePopUp result={result} setUpdatePopup={setUpdatePopup} updatePopup={updatePopup} eventDisplay={props.eventDisplay} setEventDisplay={props.setEventDisplay}/>

        </div>
        }
       </Modal>
      </div>
  );
}
export default Modals;
