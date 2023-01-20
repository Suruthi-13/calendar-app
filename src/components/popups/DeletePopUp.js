import {React} from 'react';
import Modal from 'react-modal'
import { DeleteEvents} from '../../services/UserServices';
const CUSTOM_STYLES={
    content:{
    position: 'fixed',
    top:'50%',
    left:'50%',
    right:'auto',
    bottom:'auto',
    marginRight:'-50%',
    transform:'translate(-50%,-50%)',
    padding:'50px',
    background: '#BD2E7A',
    background: 'linear-gradient(to top right, #BD2E7A 0%, #FFFFFF 100%, #FFFFFF 27%)',
    color:'black',
    opacity: 1,
    zIndex:1000,
    }
}

// toast.configure();
export default function DeletePopUp(props) {
    const deleteToggle= async ()=>
    {
        await DeleteEvents(props.id);
        // props.setError(result);
        // toast(result,{position:toast.POSITION.BOTTOM_CENTER});
        props.setDisplay(!props.display);
        props.setEventDisplay(false);
    }
    
   
    // const portal = document.getElementById('portal');
  return(
    <div className='modal-poup'>
    <Modal isOpen={true} style={CUSTOM_STYLES}  overlayClassName='overlay'>
      <div ><div>Are you want to delete??</div>
        <div className='buttons-container'>
          <button onClick={deleteToggle} className='primary-button-left'>Yes</button>
          <button onClick={()=>{props.setDisplay(!props.display);props.setEventDisplay(false)}} className='primary-button-left'>cancel</button>
        </div>
      </div>
      {/* <ToastContainer/> */}
     </Modal>
     
    </div>
  );
}

// ReactDOM.render(<App/>,portal);
