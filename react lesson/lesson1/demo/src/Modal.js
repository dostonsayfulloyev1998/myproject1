import React, {Component,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css'
import './bootstrap.min.css'

const Modal = (props) =>{

    if(!props.show){
        return null;
    }

    return (
            <>
                <div id="modal_add" className="">
                    <button id="close" className="close" onClick= { props.onClose }> &times;</button>
                    <div id="box">
                        <h1 id="title">Tashkilot qoshish</h1>
                        <div id="img-box">
                            {/*<img src="">*/}
                        </div>
                        <form>
                            <div id="form-group">
                                {/*<input type="text" placeholder="INN">*/}
                            </div>
                            <div id="form-group">
                                {/*<input id="password" type="password" placeholder="Kod">*/}
                                    {/*<img id="show_password"*/}
                                    {/*     src="../images/view_password.png" alt="">*/}
                            </div>
                            <div id="form-group">
                                {/*<input type="text" placeholder="Tashkilot nomi">*/}
                            </div>
                            <div id="form-group">
                                {/*<input type="number" placeholder="Har bir xat uchun summa">*/}
                                    <span>UZS</span>
                            </div>
                            <div id="form-group">
                                {/*<input type="checkbox" id="switch"*/}
                                       className="checkbox"/>
                                {/*<label htmlFor="switch" className="toggle">*/}
                                    <p>
                                        <span>Aktiv</span>
                                        <span>Noaktiv</span>
                                    </p>
                            </div>
                            <div className="btn-box">
                                <button type="submit">Davom etish</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
}

export default Modal;