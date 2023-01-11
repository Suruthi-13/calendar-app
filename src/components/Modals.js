import {React,useState} from 'react';
import Modal from 'react-modal';
import format from 'date-fns/format';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark,faTrash,faPen, faBorderNone} from "@fortawesome/free-solid-svg-icons";
import './Modals.scss';
import moment from 'moment';

Modal.setAppElement('#root');
function Modals(props) {
  const[display,setDisplay]=useState(false);
  return (
    <div>
        <Modal isOpen={true}  className='modal-popup-daily-events' overlayClassName='overlay'>
        {props.eventDisplay && <div><div  className='xmark-icon'><FontAwesomeIcon icon={faXmark}  onClick={()=>props.setEventDisplay(!props.eventDisplay)} style={{cursor:'pointer'}} /></div>
        <div className='popup-events'><label>Event</label>:{props.eventName}</div>
        <div className='popup-events'><label>Description</label>:{props.eventDescription}</div>
        <div className='popup-events'><label >Date</label>:{moment(props.startTime).format("DD-MM-yy")}</div>
        <div className='popup-events'><label >startTime</label>:{moment(props.startTime).format("hh:mm a")}</div>
        <div className='popup-events'><label>EndTime</label>:{moment(props.endTime).format("hh:mm a")}</div>
        <div className='buttons-container'><FontAwesomeIcon icon={faTrash} className='primary-button' onClick={()=>{setDisplay(!display)}}/>
        <FontAwesomeIcon icon={faPen} className='primary-button-left'/></div></div>}
        {display && <div className='delete-alert-container-popup'><div className='delete-alert'>Are you want to delete??</div>
        <div className='buttons-container'>
          <button onClick={()=>{props.deleteEvent(props.id);props.setEventDisplay(!props.eventDisplay)}} className='primary-button'>Yes</button>
          <button onClick={()=>props.setEventDisplay(!props.eventDisplay)} className='primary-button-left'>cancel</button>
        </div>
        </div>}
        {props.openModal && <div className='delete-alert-container'><div className='delete-alert'>Are you want to delete??</div>
        <div className='buttons-container'>
          <button onClick={()=>{props.deleteEvent(props.id);props.setOpenModal(false)}} className='primary-button'>Yes</button>
          <button onClick={()=>props.setOpenModal(!props.openModal)} className='primary-button-left'>cancel</button>
        </div>
        </div>
        }
       </Modal>
      </div>
  );
}
// ReactDOM.render(<App />,'#root');
export default Modals;
