import {React,useState,useEffect} from 'react';
import { GetEventByDate } from '../../../services/UserServices';
import moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
function DailyAgenda(props) {
  const[dayEvents,setDayEvents]=useState('');
   useEffect(  () =>
  {
    async function getAllEvents()
    {
      var result= await GetEventByDate(props.currentDate);
      setDayEvents(result);
    }
    getAllEvents();
   });
  return (
    <div>
      <h4 style={{textAlign:'center'}}>AGENDA OF THE DAY</h4>
       {dayEvents.length>0? dayEvents.map((event)=>{return(
         <div  className='daily-agenda' style={{border:'2px solid white'}}>
           <div style={{display:'flex',alignItems:'center'}}><FontAwesomeIcon  style={{color:"#BA2D7B"}} icon={faCircle}/><div style={{marginRight:'8px'}}>{moment(event.appointmentDateStartTime).format("hh:mm A")}-{moment(event.appointmentDateEndTime).format("hh:mm A")}</div></div>
          <div style={{fontWeight:'bold',paddingLeft:'30px'}}>{event.eventTitle}</div>
          </div>)}):
        <div style={{paddingLeft:'10px'}} >"No Events Today"</div>}
    </div>
  );
}

export default DailyAgenda;
