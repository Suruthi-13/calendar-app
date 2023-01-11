import {React,useState,useEffect} from 'react';
import Axios from 'axios';
import format from 'date-fns/format';

function DailyAgenda(props) {
  const[dayEvents,setDayEvents]=useState('');
    Axios.get('http://localhost:5169/v1/meetings?date='+format(props.currentDate, "yyyy-MM-dd'T'HH:mm:ss"))
    .then(function (response) {
    setDayEvents(response.data);
    }
    )
  return (
    <div>
      <h4 style={{textAlign:'center'}}>AGENDA OF THE DAY</h4>
       {dayEvents.length>0 ? dayEvents.map((event)=>{return(
         <div  className='daily-agenda'>
          <div>{event.eventTitle}</div>
          <div style={{paddingLeft: '3px'}}>-{event.description}</div>
          </div>
        
      )}
     ):<div style={{paddingLeft:'10px'}} >"No Events Today"</div>}
    
    </div>
  );
}

export default DailyAgenda;
