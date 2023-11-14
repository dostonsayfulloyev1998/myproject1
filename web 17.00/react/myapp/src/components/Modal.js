import './Modal.css'

const  Modal = ({children}) =>{

    return (
        <div className='modal-overlay'>
           <div id="modal">
               <button className='close'>&times;</button>
               {children}
           </div>
        </div>
    )
}

export default Modal