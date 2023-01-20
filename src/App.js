import './App.scss';
import { useState} from 'react';
import TopNavigationBar from './components/topnavigationbar/TopNavigationBar';
import LeftContainer from './components/conatiner/left-components/LeftContainer';
import MiddleContainer from './components/conatiner/middle-components/MiddleContainer';
import RightContainer from './components/conatiner/right-components/RightContainer';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const[currentDate,setCurrentDate]=useState(new Date());
  return (
     <div className="App">
      <div className='primary-container'>
      <div className="top-navigation-bar"><TopNavigationBar setCurrentDate={setCurrentDate}/></div>
      <div className="container">
        <div className='left-component'><LeftContainer currentDate={currentDate} setCurrentDate={setCurrentDate}/></div>
        <div className='centre-component'><MiddleContainer currentDate={currentDate} setCurrentDate={setCurrentDate}/></div>
        <div className='right-component'><RightContainer currentDate={currentDate}/></div>
      </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default App;
