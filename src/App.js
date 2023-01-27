import './App.scss';
import TopNavigationBar from './components/topnavigationbar/TopNavigationBar';
import LeftContainer from './components/conatiner/left-components/LeftContainer';
import MiddleContainer from './components/conatiner/middle-components/MiddleContainer';
import RightContainer from './components/conatiner/right-components/RightContainer';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContextProvider } from './AppointmentContext ';
// import { AppointmentContext } from './AppointmentContext ';
// import { useContext } from 'react';
// import 'react-tooltip/dist/react-tooltip.css'

function App() {
  return (
     <div className="App">
      <ContextProvider>
      <div className='primary-container'>
      <div className="top-navigation-bar"><TopNavigationBar/></div>
      <div className="container">
      <div className='left-component'><LeftContainer /></div>
      <div className='centre-component'><MiddleContainer/></div>
      <div className='right-component'><RightContainer/></div>
      </div>
      </div>
      <ToastContainer/>
      </ContextProvider>
      </div>
  );
}

export default App;
