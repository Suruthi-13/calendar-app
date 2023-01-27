import { format } from 'date-fns';
import {React,useState,useContext} from 'react';
import { Time } from '../../Time';
import './DailyEventTimeLineGrid.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash, faCircle} from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
import DeletePopUp from '../../popups/DeletePopUp';
import Modals from '../../Modals';
import EventCreatorPopUp from '../../EventCreatorPopUp';
import { AppointmentContext } from '../../../AppointmentContext ';
var id;
function DailyEventTimeLineGrid() {
  const[display,setDisplay]=useState(false);
  const[eventDisplay,setEventDisplay]=useState(false);
  const{currentDate,events,isCreate,toggle}=useContext(AppointmentContext);
  const toggleOn=(appointmentId,e)=>
  {

   id=appointmentId;
   setDisplay(!display);
   e.stopPropagation();
  }
  const eventDisplayFunction=(Id)=>{
    id=Id;
    setEventDisplay(!eventDisplay);
  }
  var TodayDate= moment().format("yyyy-MM-DD");
  var currentHour=moment().format();
  var currentMinute=moment().format("mm");
  currentMinute=currentMinute*0.8;
 
  return (
    <div className='day-event-display-container'>
        {Time.map((items,key)=>
        <div className='time-grid'>
        <ul>
        <li className='static-time-text'>{items.start}
        {events &&events.map((data)=>{
          const starts=moment(data.appointmentDateStartTime).format("mm");
          var duration =moment.duration(moment(data.appointmentDateEndTime).diff(moment(data.appointmentDateStartTime)));
          var hours = parseInt(duration.asHours());
          var minutes= parseInt(duration.asMinutes()) % 60;
          return(
          moment(data.appointmentDateStartTime).format("YYYY-MM-DD")===moment(currentDate).format("YYYY-MM-DD")&&
         (moment(data.appointmentDateStartTime).format("HH")===items.start)&&
         <div  className='events-title-container'  style={{marginTop: 0.8*starts ,height:((hours)*50)+(minutes*0.8)}}>
         <div className='events-title' onClick={(e)=>eventDisplayFunction(data.appointmentID,e)}>
         {parseInt(duration.asMinutes())>20?<div style={{display:'flex',justifyContent:'space-between',width:'100%',position:'relative',zIndex:'5'}}>
          <div className='events-display' >{data.eventTitle}</div>
          <div><FontAwesomeIcon className='events-display-trash-icon' icon={faTrash} onClick={(e)=>toggleOn(data.appointmentID,e)}/></div>
          </div>:<div className='display-on'>{data.eventTitle}</div>}
          </div>
          </div>
          )})}
          {TodayDate===format(currentDate,"yyyy-MM-dd")&&moment(currentHour).format("HH")===items.start&&
          <div className='current-time-display' style={{marginTop:currentMinute}}><FontAwesomeIcon icon={faCircle}/><div style={{backgroundColor:'#ea4335',width: '650px',height:'2px'}}></div></div>}
          {display&&<DeletePopUp id={id} setDisplay={setDisplay} display={display} />}
          {eventDisplay && <Modals eventDisplay={eventDisplay} setEventDisplay={setEventDisplay} id={id}/>}
        </li>
      </ul>
      <div className='time-lines' onClick={toggle}></div>
    </div>
      )}
      {isCreate&&<EventCreatorPopUp/>}
    </div>
  );
}
export default DailyEventTimeLineGrid;

 //  (data.appointmentDateStartTime.slice(11,13)===items.start)&&
 // data.appointmentDateStartTime.slice(0,10)===format(currentDate,"yyyy-MM-dd")&&
