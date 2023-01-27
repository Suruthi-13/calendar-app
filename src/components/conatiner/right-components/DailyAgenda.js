import {React,useContext} from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import { AppointmentContext } from '../../../AppointmentContext ';
function DailyAgenda() {
  const{events}=useContext(AppointmentContext);
  var name;
 
  return (
    <div>
      <h4 className='agenda-title'>AGENDA OF THE DAY</h4>
       {events.length>0 ? events.map((event)=>{
       {((moment(event.appointmentDateStartTime).format("YYYY-DD-MM HH:mm")>=(moment().format("YYYY-DD-MM HH:mm"))))?name="future-events":name="past-events"}
        return(
          <div className='daily-agenda-container'>
         <div  className={name}>
           <div style={{display:'flex',alignItems:'center'}}><FontAwesomeIcon className='bubble-icon' icon={faCircle}/>
           <div style={{marginRight:'8px'}}>{moment(event.appointmentDateStartTime).format("hh:mm A")}-{moment(event.appointmentDateEndTime).format("hh:mm A")}</div>
           </div>
          <div style={{fontWeight:'bold',paddingLeft:'30px'}}>{event.eventTitle}</div>
          </div></div>)}):
        <div style={{paddingLeft:'10px',position:'relative',top:'38px'}} >"No Events Today"</div>}
    </div>
  );
}

export default DailyAgenda;
