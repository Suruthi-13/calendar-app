import {React,useState,useEffect,useContext} from 'react';
import { useNavigate} from 'react-router-dom';
import './Calendar.scss';
import Cell from './Cell';
import format from 'date-fns/format';
import { startOfMonth,endOfMonth,differenceInDays,sub,add,setDate } from 'date-fns';
import Modals from '../Modals';
import moment from 'moment';
import { AppointmentContext } from '../../AppointmentContext ';
import { GetAllEvents } from '../../services/UserServices';
import { toast,ToastContainer } from 'react-toastify';
const daysOfWeek=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var id,count=0;
function Calendar() {
  const {currentDate,setCurrentDate,dayEvents,allEvents,setAllEvents}=useContext(AppointmentContext)
  let navigate = useNavigate(); 
  const routeChange = (index) =>{ 
    const day=setDate(currentDate,index);
    setCurrentDate(day);
    navigate("/");
  }
  useEffect(()=>
  {
   const getAllEvents= async ()=>
   {
     const result= await GetAllEvents();
    setAllEvents(result.data.results);
   }
   getAllEvents();
  },[dayEvents]);
  const eventAlert=(startTime,title)=>
  {
    if(count===0)
    {
    {toast(`You have ${title} at ${moment(startTime).format("HH:mm a")}`,{
      position: "top-right",
      autoClose: false,
      className:"event-alert-message"
   })}
  }
  count++;
    {<ToastContainer/>}
  }
    const[eventDisplay,setEventDisplay]=useState(false);
    const startDate=startOfMonth(currentDate);
    const endDate=endOfMonth(currentDate);
    const numberOfDays=differenceInDays(endDate,startDate)+1;
    const prefixDays= startDate.getDay();
    const suffixDays=6-endDate.getDay();
    const handleClick=(index)=>
    {
    const day=setDate(currentDate,index);
    setCurrentDate(day);
    }
     const eventDisplayFunction=(Id)=>{
      id=Id
     setEventDisplay(!eventDisplay);
    }
  return (
    <div className='calendar'>
        <div className='grid-header'>
            <div className='movenext-button years' onClick={()=>setCurrentDate(sub(currentDate,{years: 1}))}><Cell >{"<<"}</Cell></div>
            <div className='movenext-button months' onClick={()=>setCurrentDate(sub(currentDate,{months: 1}))}><Cell >{"<"}</Cell></div>
            <Cell className='current-month-year'>{format(currentDate,"LLLL yyyy")}</Cell>
            <div className='movenext-button months' onClick={()=>setCurrentDate(add(currentDate,{months: 1}))}><Cell>{">"}</Cell></div>
             <div className='movenext-button years' onClick={()=>setCurrentDate(add(currentDate,{years: 1}))}><Cell>{">>"}</Cell></div>
        </div>
        <div className='grid-body'>
            {daysOfWeek.map( (item)=><Cell className='days-of-week'>{item}</Cell>)}
            {Array.from({length: prefixDays}).map((_,key)=>{
               return < Cell  className='suffix-space'></Cell>
            })}
            {Array.from({length:numberOfDays}).map((_,key)=>{
                const date=key+1;
                var isCurrentDate=date===currentDate.getDate() && date !== new Date().getDate();
                var activeDate=date===new Date().getDate();
                return(<div className="week-days" onDoubleClick={()=>routeChange(date)}><Cell  onClick={()=>handleClick(date)} isActive={isCurrentDate} activeDate={activeDate}><div  className='date-number'>{date}</div></Cell>
                       <div className="event-name">
                           {allEvents && allEvents.filter(item=>moment(item.appointmentDateStartTime).format("YYYY-MM-DD")===moment(setDate(currentDate,date)).format("YYYY-MM-DD")).map((item)=>{
                        return(<Cell>
                         <div className='events'onClick={(e)=>eventDisplayFunction(item.appointmentID,e)}>{item.eventTitle}</div>
                         <div>{
                          moment(item.appointmentDateStartTime).format("YYYY-MM-DD")===moment().format("YYYY-MM-DD")&&
                          (moment(item.appointmentDateStartTime).format("YYYY-MM-DD HH:mm")>=moment().format("YYYY-MM-DD HH:mm"))&&
                          parseInt(moment.duration((moment(item.appointmentDateStartTime)).diff(moment())).asMinutes())<=5 &&eventAlert(item.appointmentDateStartTime,item.eventTitle)
                         }</div>
                         </Cell>)
                          })}
                        {eventDisplay&& <Modals eventDisplay={eventDisplay} setEventDisplay={setEventDisplay}  id={id}/>}
                       </div>
                       </div>)})}
                {Array.from({length: suffixDays}).map((_,key)=>{
                const date=key+1;
                return <Cell className="next-week-days">{date}</Cell>
            })}
        </div>
      
    </div>
  );
}

export default Calendar;
