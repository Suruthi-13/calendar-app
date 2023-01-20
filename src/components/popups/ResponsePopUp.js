import {React,useState} from 'react';
import  ReactDom  from 'react-dom';
import Modal from 'react-modal'
// import { DeleteEvents, UserServices } from '../../services/UserServices';
// Modal.setAppElement('#portal')
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
    color:'black',
    opacity: 1,
    zIndex:1000,
    background:'#FFFF'
    }
}
export default function ResponsePopUp(props) {
    console.log("I am executed");
  return ReactDom.createPortal(
    <div className='modal-poup'>
     {<Modal isOpen={true} style={CUSTOM_STYLES}  overlayClassName='overlay'>
        <div >
          {props.result}
        </div>
     </Modal>}
    </div>,
    document.getElementById('portal'),
  );
}

// ReactDOM.render(<App/>,portal);
