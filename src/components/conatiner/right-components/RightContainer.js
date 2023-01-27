import {React} from 'react';
import DailyAgenda from './DailyAgenda';
import './RightContainer.scss'

function RightContainer(props) {
 return (
    <div className='output-container'>
        <div className='primary-daily-agenda' ><DailyAgenda/></div>
    </div>
  );
}

export default RightContainer;
