import {React,useContext} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import './AppointmentCreator.scss';
import EventCreatorPopUp from '../../EventCreatorPopUp';
import { AppointmentContext } from '../../../AppointmentContext ';
function AppointmentCreator() {
 const {isCreate,toggle}=useContext(AppointmentContext);
  return (
    <div className='appointment-creator'>
    <div   className='appointment-creator-container'>
      <div><FontAwesomeIcon  onClick={toggle}  className="plus-icon" icon={faPlus} />
      <label  onClick={toggle}  className='create-text'>Create</label></div>
      {isCreate&&<div><EventCreatorPopUp/></div>}
    </div>
    </div>
  );
}

export default AppointmentCreator;
