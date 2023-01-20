import {React} from 'react';
import Axios from 'axios';
import uuid from 'react-uuid';
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from 'react-toastify'
import moment from 'moment';
import format from 'date-fns/format';
const Toast=(message)=>
{
   toast(message,{
      position: "top-center",
   autoClose: 3000,
   hideProgressBar: true,
   closeOnClick: true,
   pauseOnHover: false,
   draggable: true,
   color: 'black',
   })
      {<ToastContainer/>}
}
var result;
const URL="http://localhost:5169";
export async function GetAllEvents() {

         await Axios.get(`${URL}/v1/appointments/bulk?offset=0&fetchCount=500`)
         .then((response)=>
         {
            result=response;
            
         })
         .catch((error)=>
         {

         })
         return result;
}
export async function GetEventById(id)
{
  await Axios.get(`${URL}/v1/appointments/${id}`)
  .then(response=>
    {
      result=response.data;
    })
    return result;
}
export async function DeleteEvents(id)
{
       await Axios.delete(`${URL}/v1/appointments/${id}`)
       .then(response=>
       {
         if(response.status===204)
         {
           Toast("  ✔️ Event deleted Successfully");
         }
        
       })
       .catch((error)=>{
         Toast("❌" + error.response.data.errorMessage);
       })
}
export async function UpdateEvent(updatingEvents)
{
   var dateStartTime = moment(updatingEvents.date + ' ' + updatingEvents.startTime, 'YYYY-MM-DDTHH:mm:ss');
   var dateEndTime=moment(updatingEvents.date+''+updatingEvents.endTime,'YYYY-MM-DDTHH:mm:ss');
   Axios
   .put(`${URL}/v1/appointments/${updatingEvents.id}`, {
     eventTitle: updatingEvents.title,
     appointmentDateStartTime:  dateStartTime.format('YYYY-MM-DDTHH:mm'),
     appointmentDateEndTime: dateEndTime.format('YYYY-MM-DDTHH:mm'),
     description: updatingEvents.description
   })
   .then((response) => {
     if(response.status===204)
     {
       Toast("✔️ Event Updated Successfully");
     }
   })
   .catch((error)=>
   {
      Toast("❌"+error.response.data.errorMessage);
     
   });
}
   
export async function AddEvent(events)
{
   var dateStartTime = moment(events.date + ' ' + events.startTime, 'YYYY-MM-DDTHH:mm:ss');
   var dateEndTime=moment(events.date+''+events.endTime,'YYYY-MM-DDTHH:mm:ss');
   Axios.post(`${URL}/v1/appointments`, {
        appointmentID: uuid(),
        eventTitle: events.title,
        appointmentDateStartTime:  dateStartTime.format('YYYY-MM-DDTHH:mm'),
        appointmentDateEndTime: dateEndTime.format('YYYY-MM-DDTHH:mm'),
        description: events.description
      })
   .then((response) => {
     if(response.status===201)
     {
      Toast(' ✔️ Event Created Successfully');
     }
   })
   .catch((error)=>
   {
      Toast("❌" + error.response.data.errorMessage);
   });
};

export async function GetEventByDate(date)
{
   await Axios.get(`${URL}/v1/appointments?date=${format(date, "yyyy-MM-dd'T'HH:mm:ss")}`)
  .then(response=>
    {
    result=response.data;
    })
    return result;
};
export async function SearchEvent(event)
{
  await Axios.get(`${URL}/v1/appointments/bulk?offset=0&fetchCount=20&searchAppointments=${event}`)
  .then(response=>
    {
      result=response.data.results;
    })
    return result;
};
export async function GetRandomQuotes()
{
  await Axios.get("https://type.fit/api/quotes")
  .then(response=>
    {
      result=response.data;
    })
    return result;
}

  

