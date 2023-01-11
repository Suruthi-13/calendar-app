import Axios from 'axios';
import {React,useState} from 'react';
import DailyAgenda from './DailyAgenda';
import './RightContainer.scss'

function RightContainer(props) {
 

  return (
    <div className='output-container'>
        <div className='primary-daily-agenda' ><DailyAgenda currentDate={props.currentDate}/></div>
    </div>
  );
}

export default RightContainer;
