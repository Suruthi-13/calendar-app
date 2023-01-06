import {React,useState,useEffect} from 'react';
import './Calendar.scss';
import Cell from './Cell';
import format from 'date-fns/format';
import Axios from 'axios';
// import { events } from '../../events';
import { startOfMonth,endOfMonth,differenceInDays,sub,add,setDate } from 'date-fns';
const daysOfWeek=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

// var days;
function Calendar(props) {
  const[datas,setDatas]=useState("");
  Axios.get('http://localhost:5169/v1/meetings?offset=0&fetchCount=500')
  .then(function (response) {
    setDatas(response.data);
    // console.log(response.data,'response');
  })
 
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  
  // useEffect(()=>
  //   getdata(),[])
    const startDate=startOfMonth(props.currentDate);
    const endDate=endOfMonth(props.currentDate);
    const numberOfDays=differenceInDays(endDate,startDate)+1;
    const prefixDays= startDate.getDay();
    const suffixDays=6-endDate.getDay();
    const handleClick=(index)=>
    {
     const day=setDate(props.currentDate,index);
     props.setCurrentDate(day);
    
    }
    var event=props.events;
    // console.log(event,"hii");
    const l=0;
  return (
    <div className='calendar'>
        
        <div className='grid-header'>
            <div className='nav-buttons' onClick={()=>props.setCurrentDate(sub(props.currentDate,{years: 1}))}><Cell >{"<<"}</Cell></div>
            <div className='nav-buttons' onClick={()=>props.setCurrentDate(sub(props.currentDate,{months: 1}))}><Cell >{"<"}</Cell></div>
            <Cell className='year-month'>{format(props.currentDate,"LLLL yyyy")}</Cell>
            <div className='nav-buttons' onClick={()=>props.setCurrentDate(add(props.currentDate,{months: 1}))}><Cell>{">"}</Cell></div>
             <div className='nav-buttons' onClick={()=>props.setCurrentDate(add(props.currentDate,{years: 1}))}><Cell>{">>"}</Cell></div>
        </div>
        <div className='grid-body'>
            {daysOfWeek.map( (item)=><Cell className='days-of-week'>{item}</Cell>)}
            {Array.from({length: prefixDays}).map((_,key)=>{
               return < Cell  className='suffix-space'></Cell>
            })}
            {Array.from({length:numberOfDays}).map((_,key)=>{
                const date=key+1;
                const isCurrentDate=date===props.currentDate.getDate();
                // console.log(date);
                 var days=setDate(props.currentDate,date);
                  const nd=format(days,"yyyy-MM-dd");
                return <Cell className="week-days" onClick={()=>handleClick(date)} isActive={isCurrentDate}>{date}
                 {/* {props.events &&props.events.map((items)=>items.date===nd &&<div className="events">{items.title}</div>)} */}
                 {datas &&datas.results.map((item)=>item.appointmentDateStartTime.slice(0,10)===nd&&<div className='events'>{item.eventTitle}</div>)}
                 </Cell>
            })}
            {Array.from({length: suffixDays}).map((_,key)=>{
                const date=key+1;
                return <Cell className="next-week-days">{date}</Cell>
            })}
        </div>
      
    </div>
  );
}

export default Calendar;
