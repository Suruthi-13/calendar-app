import {useContext} from 'react';
import format from 'date-fns/format';
import './CurrentDateDisplay.scss'
import {Link} from 'react-router-dom';
import {sub,add} from 'date-fns';
import { useLocation } from 'react-router-dom';
import { AppointmentContext } from '../../../AppointmentContext ';
import  {Tooltip as ReactTooltip} from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'


function CurrentDateDisplay() {
  const location=useLocation();
  const{currentDate,setCurrentDate}=useContext(AppointmentContext);
  
  // useEffect(()=>{
  //   {location.pathname==='/'?setDayView("months:1"): setValue("days:1")}
  //   {location.pathname==='/month'?setDayView("years:1"): setValue("months:1")}
  // },[location.pathname])
  // {location.pathname==='/'?setDayView("months:1"): setValue("days:1")}
  // {location.pathname==='/month'?setDayView("years:1"): setValue("months:1")}
 return (
    <div className='current-date-display-container'>
      <div style={{display: 'flex',alignItems:'center'}}>
        {location.pathname==='/' && <div style={{display: 'flex',alignItems:'center'}}>
          <button onClick={()=>setCurrentDate(sub(currentDate,{months: 1}))} id='previous-month-arrow' className='arrow-icon-year backward' style={{marginRight: 30,display: 'flex',alignItems:'center'}}>{"<<"}</button>
          <div id='day-tooltip' style={{fontWeight:'bold'}} >{format(currentDate,"dd MMM YYY")}</div>
          <button onClick={()=>setCurrentDate(sub(currentDate,{days: 1}))}  id='previous-day-arrow' className='arrow-icon month-backward' style={{marginLeft: 5}}>{"<"}</button>
          <button  onClick={()=>setCurrentDate(add(currentDate,{days: 1}))} id='next-day-arrow' className='arrow-icon month-forward'  style={{marginRight: 50}}>{">"}</button>
          </div>}
          {location.pathname==='/month' && <div style={{display: 'flex',alignItems:'center'}}>
          <button onClick={()=>setCurrentDate(sub(currentDate,{years: 1}))} id='previous-year-arrow' className='arrow-icon-year backward' style={{marginRight: 30,display: 'flex',alignItems:'center'}}>{"<<"}</button>
          <div style={{fontWeight:'bold'}} >{format(currentDate,"dd MMM YYY")}</div>
          <button onClick={()=>setCurrentDate(sub(currentDate,{months: 1}))}  id='previous-month-arrow' className='arrow-icon month-backward' style={{marginLeft: 5}}>{"<"}</button>
          <button  onClick={()=>setCurrentDate(add(currentDate,{months: 1}))} id='next-month-arrow' className='arrow-icon month-forward'  style={{marginRight: 50}}>{">"}</button>
          </div>}
          </div>
          <div style={{display: 'flex',alignItems:'center'}}>
          <div className='route-container'>
         <Link className='route-buttons' to="/" ><div>Day</div></Link>
         <Link className='route-buttons' to="/month" ><div>Month</div></Link>
       </div>
       {location.pathname==='/' &&<button onClick={()=>setCurrentDate(add(currentDate,{months: 1}))} id='next-month-arrow' className='arrow-icon-year forward' style={{marginLeft: 30,display: 'flex',alignItems:'center'}}>{">>"}</button>}
       {location.pathname==='/month' &&<button onClick={()=>setCurrentDate(add(currentDate,{years: 1}))} id='next-year-arrow' className='arrow-icon-year forward' style={{marginLeft: 30,display: 'flex',alignItems:'center'}}>{">>"}</button>}
       </div>
       <ReactTooltip anchorId="previous-day-arrow" place="bottom" content="previous day"/>
       <ReactTooltip anchorId="next-day-arrow" place="bottom" content="next day"/>
       <ReactTooltip anchorId="previous-month-arrow" place="bottom" content="previous month"/>
       <ReactTooltip anchorId="next-month-arrow" place="bottom" content="next month"/>
       <ReactTooltip anchorId="previous-year-arrow" place="bottom" content="previous year"/>
       <ReactTooltip anchorId="next-year-arrow" place="bottom" content="next year"/>
    </div>
  );
  
}

export default CurrentDateDisplay;
