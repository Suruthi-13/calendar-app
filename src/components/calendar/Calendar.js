import {React,useState,useEffect,useCallback} from 'react';
import './Calendar.scss';
import Cell from './Cell';
import format from 'date-fns/format';
import { startOfMonth,endOfMonth,differenceInDays,sub,add,setDate } from 'date-fns';
import Modals from '../Modals';
import { GetAllEvents } from '../../services/UserServices';
const daysOfWeek=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var  eventName, eventDescription,startTime,endTime,id;

function Calendar(props) {
  const[events,setEvents]=useState('')
  useEffect(()=>
  {
   const getAllEvents= async ()=>
   {
     const allEvents= await GetAllEvents();
    //  setEvents(allEvents.data);
    setEvents(allEvents.data)
   }
   getAllEvents();
  },[events])
    const[eventDisplay,setEventDisplay]=useState(false);
    const startDate=startOfMonth(props.currentDate);
    const endDate=endOfMonth(props.currentDate);
    const numberOfDays=differenceInDays(endDate,startDate)+1;
    const prefixDays= startDate.getDay();
    const suffixDays=6-endDate.getDay();
    // console.log(props.events);
    const handleClick=(index)=>
    {
     const day=setDate(props.currentDate,index);
     props.setCurrentDate(day);
    
    }
     const eventDisplayFunction=(Id,e)=>{
      id=Id
      setEventDisplay(!eventDisplay);
    }
  return (
    <div className='calendar'>
        
        <div className='grid-header'>
            <div className='movenext-button years' onClick={()=>props.setCurrentDate(sub(props.currentDate,{years: 1}))}><Cell >{"<<"}</Cell></div>
            <div className='movenext-button months' onClick={()=>props.setCurrentDate(sub(props.currentDate,{months: 1}))}><Cell >{"<"}</Cell></div>
            <Cell className='current-month-year'>{format(props.currentDate,"LLLL yyyy")}</Cell>
            <div className='movenext-button months' onClick={()=>props.setCurrentDate(add(props.currentDate,{months: 1}))}><Cell>{">"}</Cell></div>
             <div className='movenext-button years' onClick={()=>props.setCurrentDate(add(props.currentDate,{years: 1}))}><Cell>{">>"}</Cell></div>
        </div>
        <div className='grid-body'>
            {daysOfWeek.map( (item)=><Cell className='days-of-week'>{item}</Cell>)}
            {Array.from({length: prefixDays}).map((_,key)=>{
               return < Cell  className='suffix-space'></Cell>
            })}
            {Array.from({length:numberOfDays}).map((_,key)=>{
                const date=key+1;
                const isCurrentDate=date===props.currentDate.getDate();
                return(<div className="week-days"><Cell  onClick={()=>handleClick(date)} isActive={isCurrentDate}><div  className='date-number'>{date}</div></Cell>
                <div className="event-name">
                 {events && events.results.map((item)=>item.appointmentDateStartTime.slice(0,10)===format(setDate(props.currentDate,date),"yyy-MM-dd")&&
                 <div className='events' 
                    onClick={(e)=>eventDisplayFunction(item.appointmentID,e)}>{item.eventTitle}
                </div>
                )}
                 {eventDisplay&& <Modals  
                  eventDisplay={eventDisplay} 
                  setEventDisplay={setEventDisplay}  
                   id={id}/>}
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
