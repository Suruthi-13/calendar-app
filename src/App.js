import './App.scss';
import { useState} from 'react';
import TopNavigationBar from './components/topnavigationbar/TopNavigationBar';
import format from 'date-fns/format';
import Quotes from './components/conatiner/conatiner-column-three/random-quotes/Quotes';
import LeftColumn from './components/conatiner/conatiner-column-one/LeftColumn';
import Centre from './components/conatiner/conatiner-column-two/Centre';
import RootCalendar from './components/calendar/RootCalendar';
import moment from 'react-moment';

function App() {
  const[currentDate,setCurrentDate]=useState(new Date());
  const[events,setEvents]=useState([]);
  const[display,setDisplay]=useState(false);
 

  return (
    <div className="App">
      <div className='primary-container'>
      <div className="top-navigation-bar"><TopNavigationBar setDisplay={setDisplay} display={display} setCurrentDate={setCurrentDate}/></div>
      <div className="container">
        <div className='container-column-one'><LeftColumn currentDate={currentDate} setCurrentDate={setCurrentDate} events={events} setEvents={setEvents}/></div>
        <div className='container-column-two'><Centre currentDate={currentDate} setCurrentDate={setCurrentDate} events={events} setEvents={setEvents}/></div>
        <div className='conatiner-column-three'><Quotes/></div>
      </div>
      </div>
      {/* <div><RootCalendar /></div> */}
    </div>
  );
}

export default App;
