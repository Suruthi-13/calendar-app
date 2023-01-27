import {React,useState,useContext} from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark,faTrash,faPen} from "@fortawesome/free-solid-svg-icons";
import './Modals.scss';
import moment from 'moment';
import DeletePopUp from './popups/DeletePopUp';
import { AppointmentContext } from '../AppointmentContext ';
import UpdatePopUp from './popups/UpdatePopUp';
Modal.setAppElement('#root');
var result;
function Modals(props) {
  const{allEvents}=useContext(AppointmentContext);
  const[display,setDisplay]=useState(false);
  const[updatePopup,setUpdatePopup]=useState(false);
  if(allEvents.length>0)
  {
   
    result=(allEvents.find(s=>s.appointmentID===props.id));
  }
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
        <div className='popup-events'><label >Start time</label>-{moment(result.appointmentDateStartTime).format("hh:mm a")}</div>
        <div className='popup-events'><label>End time</label>-{moment(result.appointmentDateEndTime).format("hh:mm a")}</div> </div> }
        <div className='icons-container'><FontAwesomeIcon icon={faTrash} className='trash-button' onClick={()=>setDisplay(!display)}/>
        <FontAwesomeIcon icon={faPen} onClick={toggle} className='update-button'/></div></div>
        {display && <DeletePopUp deleteEvent={props.deleteEvent} id={props.id} eventDisplay={props.eventDisplay} setDisplay={setDisplay} setEventDisplay={props.setEventDisplay}/>}
        {updatePopup && <div className='event-creator-box'>
         <UpdatePopUp result={result} setUpdatePopup={setUpdatePopup} updatePopup={updatePopup} eventDisplay={props.eventDisplay} setEventDisplay={props.setEventDisplay}/>

        </div>
        }
       </Modal>
      </div>
  );
}
export default Modals;
