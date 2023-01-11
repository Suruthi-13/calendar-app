import './App.scss';
import { useState} from 'react';
import TopNavigationBar from './components/topnavigationbar/TopNavigationBar';
import LeftContainer from './components/conatiner/left-components/LeftContainer';
import MiddleContainer from './components/conatiner/middle-components/MiddleContainer';
import Axios from 'axios';
import RightContainer from './components/conatiner/right-components/RightContainer';

function App() {
  const[currentDate,setCurrentDate]=useState(new Date());
  const[errorMessage,setErrorMessage]=useState("");
  const[events,setEvents]=useState('');

   Axios.get('http://localhost:5169/v1/meetings/bulk?offset=0&fetchCount=500')
  .then(function (response) {
  setEvents(response.data);
  }) 


  return (
    <div className="App">
      <div className='primary-container'>
      <div className="top-navigation-bar"><TopNavigationBar setCurrentDate={setCurrentDate}/></div>
      <div className="container">
        <div className='left-component'><LeftContainer currentDate={currentDate} setCurrentDate={setCurrentDate} events={events} setEvents={setEvents} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/></div>
        <div className='centre-component'><MiddleContainer currentDate={currentDate} setCurrentDate={setCurrentDate} events={events} setEvents={setEvents}/></div>
        <div className='right-component'><RightContainer currentDate={currentDate}/></div>
      </div>
      </div>
    </div>
  );
}

export default App;
