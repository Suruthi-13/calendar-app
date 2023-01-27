import {React} from 'react';
import Modal from 'react-modal'
import { DeleteEvents} from '../../services/UserServices';
import { useContext } from 'react';
import { AppointmentContext } from '../../AppointmentContext ';
const CUSTOM_STYLES={
    content:{
    position: 'fixed',
    top:'50%',
    left:'50%',
    right:'auto',
    bottom:'auto',
    marginRight:'-50%',
    width: '350px',
    height: '30vh',
    display:'flex',
    alignItems:'center',
    textAlign:'center',
    transform:'translate(-50%,-50%)',
    backgroundColor: '#ebf3fb',
    border: '2px solid #61affe',
    color:'black',
    opacity: 1,
    zIndex:1000,
    }
}
export default function DeletePopUp(props) {
  const {setDayEvents}=useContext(AppointmentContext);
    const deleteToggle= async ()=>
    {
        await DeleteEvents(props.id);
        setDayEvents(Math.random());
        props.setDisplay(!props.display);
        props.setEventDisplay(!props.eventDisplay);
    }
  return(
    <div className='modal-popup'>
    <Modal isOpen={true} style={CUSTOM_STYLES}  overlayClassName='overlay'>
      <div style={{textAlign:'center',margin:'auto',alignItems:'center', justifyContent:'center'}}><div>Do you want to delete??</div>
        <div className='buttons-container'>
          <button onClick={deleteToggle} className='primary-button-left'>Yes</button>
          <button onClick={()=>{props.setDisplay(!props.display);props.setEventDisplay(false)}} className='primary-button-left'>Cancel</button>
        </div>
      </div>
    </Modal>
    </div>
  );
}

// ReactDOM.render(<App/>,portal);
