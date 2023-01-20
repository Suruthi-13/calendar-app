import { format } from 'date-fns';
import {React,useState,useEffect} from 'react';
import { Time } from '../../Time';
import './DailyEventTimeLineGrid.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash, faCircle} from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
import { GetEventByDate } from '../../../services/UserServices';
import DeletePopUp from '../../popups/DeletePopUp';
import Modals from '../../Modals';
var id;
function DailyEventTimeLineGrid(props) {
  const[datas,setDatas]=useState('');
  const[display,setDisplay]=useState(false);
  const[eventDisplay,setEventDisplay]=useState(false);
  useEffect(  () =>
  {
    async function getAllEvents()
    {
      var result= await GetEventByDate(props.currentDate);
      setDatas(result);
    }
    
    getAllEvents();
   
  });
  const toggleOn=(appointmentId)=>
  {
   id=appointmentId;
   setDisplay(!display);
  }
  const eventDisplayFunction=(Id)=>{
    id=Id;
    setEventDisplay(!eventDisplay);
  }
  var currentDate= moment().format("yyyy-MM-DD");
  var currentHour=moment().format();
  var currentMinute=moment().format("mm");
  currentMinute=currentMinute*0.8;
 
  return (
    <div className='day-event-display-container'>
        {Time.map((items,key)=>
        <div className='time-grid'>
        <ul>
        <li className='static-time-text'>{items.start}
        {datas &&datas.map((data)=>{
          const starts=moment(data.appointmentDateStartTime).format("mm");
          var duration =moment.duration(moment(data.appointmentDateEndTime).diff(moment(data.appointmentDateStartTime)));
          var hours = parseInt(duration.asHours());
          var minutes= parseInt(duration.asMinutes()) % 60;
         
          return(
          data.appointmentDateStartTime.slice(0,10)===format(props.currentDate,"yyyy-MM-dd")&&
         (data.appointmentDateStartTime.slice(11,13)===items.start)&&
         <div  className='events-title-container'  style={{marginTop: 0.8*starts ,height:((hours)*50)+(minutes*0.8)}}>
         <div className='events-title' onClick={(e)=>eventDisplayFunction(data.appointmentID,e)}>
          <div className='events-display' >{data.eventTitle}</div>
          </div>
          <div><FontAwesomeIcon className='events-display-trash-icon' icon={faTrash} onClick={()=>toggleOn(data.appointmentID)}/>
          </div></div>
          )})}
          {currentDate===format(props.currentDate,"yyyy-MM-dd")&&currentHour.slice(11,13)==items.start&&
          <div className='current-time-display' style={{marginTop:currentMinute}}><FontAwesomeIcon icon={faCircle}/><div style={{backgroundColor:'#ea4335',width: '650px',height:'2px'}}></div></div>}
          {display&&<DeletePopUp deleteEvent={props.deleteEvent} id={id} setDisplay={setDisplay} display={display} />}
          {eventDisplay && <Modals eventDisplay={eventDisplay} setEventDisplay={setEventDisplay} id={id}/>}
        </li>
      </ul>
      <div className='time-lines'></div>
    </div>
      )}
    </div>
  );
}
export default DailyEventTimeLineGrid;
