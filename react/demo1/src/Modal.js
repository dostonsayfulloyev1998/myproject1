import style from './Modal.module.css'

const Modal = ({children,closeModal}) =>{


    return (
        <div className={style['modal-overlay']}>

            <div className={style.modal}>
                <button className={style.close} onClick={closeModal}>&times;</button>

                {children}
            </div>

        </div>
    )
}

export default Modal