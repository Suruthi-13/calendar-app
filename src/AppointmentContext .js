import { createContext,useState,useEffect } from "react";
import {GetEventByDate } from "./services/UserServices";
import moment from "moment";
import { toast } from "react-toastify";
export const AppointmentContext=createContext();
export function ContextProvider({children})
{
   
    const [currentDate,setCurrentDate]=useState(new Date());
    const [dayEvents,setDayEvents]=useState(Math.random());
    const[events,setEvents]=useState('');
    const[allEvents,setAllEvents]=useState('');
    const[IsDayView,setIsDayView]=useState('');
    const[isMonthView,setIsMonthView]=useState('');
    const[isCreate,setIsCreate]=useState(false);
    const toggle=()=>
    {
     if((moment(currentDate).format("YYYY-MM-DD")<moment().format("YYYY-MM-DD")))
   {
     toast.warn(("You are trying to create event for the passed date"),{
       position: toast.POSITION.TOP_CENTER,
       className: 'toast-message'
     });
     return;
   }
     setIsCreate(!isCreate);
    }
    // const dateValue=moment(currentDate).format("YYYY-MM-DD");
    // const[eventInputs,setEventInputs]=useState({id:'',title:'',date:dateValue,description:'',startTime:'',endTime:''})
    // console.log(currentDate);
    useEffect(()=>{
        const getEvent= async()=>
        {
           var result= await GetEventByDate(currentDate);
           setEvents(result);
        }
        getEvent();
    },[currentDate,dayEvents]);
    return(
        <AppointmentContext.Provider value={{currentDate,setCurrentDate,dayEvents,setDayEvents
        ,events,setEvents,allEvents,setAllEvents,
        isCreate,setIsCreate,toggle,setIsDayView,setIsMonthView,
        IsDayView,isMonthView}}>
            {children}
        </AppointmentContext.Provider>
    )
}