import { format } from 'date-fns';
import {React,useState,useEffect} from 'react';
import { Time } from '../../Time';
import './DailyEventTimeLineGrid.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash,faPen} from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
import Axios from 'axios';
import Modals from '../../Modals';
var id;
function DailyEventTimeLineGrid(props) {
  const[datas,setDatas]=useState('');
  const[openModal,setOpenModal]=useState(false);
  Axios.get('http://localhost:5169/v1/meetings?date='+format(props.currentDate, "yyyy-MM-dd'T'HH:mm:ss"))
  .then(function (response) {
  setDatas(response.data);
  })
  const toggleOn=(appointmentId)=>
  {
   id=appointmentId;
   console.log(id)
   setOpenModal(!openModal);
  }
  
  return (
    <div className='day-event-display-container'>
        {Time.map((items,key)=>
        <div className='time-grid'>
        <ul>
        <li className='static-time-text'>{items.start}
        {datas &&datas.map((data)=>{
          var duration =moment.duration(moment(data.appointmentDateEndTime).diff(moment(data.appointmentDateStartTime)));
          var hours = parseInt(duration.asHours());
          var minutes= parseInt(duration.asMinutes()) % 60;
          const starts=moment(datas.appointmentDateStartTime).format('mm');
          return(
         data.appointmentDateStartTime.slice(0,10)===format(props.currentDate,"yyyy-MM-dd")&&
         (data.appointmentDateStartTime.slice(11,13)==items.start)&&
         <div className='events-title' style={{marginTop: 0.8*starts ,height:((hours)*50)+(minutes*0.8)}}>
          <div className='events-display'>{data.eventTitle}</div>
          <div><FontAwesomeIcon className='events-display trash-icon' icon={faTrash} onClick={()=>toggleOn(data.appointmentID)}/><FontAwesomeIcon className='events-display update-icon' icon={faPen}/></div></div>)})}
        {openModal&&<Modals deleteEvent={props.deleteEvent} id={id} openModal={openModal} setOpenModal={setOpenModal}/>}
        </li>
      </ul>
      <div className='time-lines'></div>
    </div>
      )}
    </div>
  );
}
export default DailyEventTimeLineGrid;
