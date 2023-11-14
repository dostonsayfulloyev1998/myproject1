import './Modal.css'
// import 'bootstrap/dist/css/bootstrap.css';

const Modal = ({children,show})=>{


    return(
       <div className={'overlay-modal'}>
           <div className={'modal'}>
               <button className={'close'} onClick={show}>&times;</button>
               {children}
           </div>
       </div>
    )
}


export default Modal
