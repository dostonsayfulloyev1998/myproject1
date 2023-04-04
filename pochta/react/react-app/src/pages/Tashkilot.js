
import React, {useEffect, useState} from 'react';
import './css/Tashkilot.css'
import Head from "../components/Head";
import Search from "../components/Search";
import Tashkilot_item from '../components/Tashkilot_item'
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import images from '../img'
import {useFetch} from "../components/useFetch";
import {useForm} from "../components/useForm";

const  URL = "https://triumf.pythonanywhere.com/api/v1/dashboard/";
const  initialState = {
    name: "",
    inn: "",
    password: "",
    price:"",
    is_active:true
}

function Tashkilot() {

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/tashkilot1`;
        navigate(path);
    }

    const routeChange1 = () =>{
        let path = `/tashkilot2`;
        navigate(path);
    }

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleOpen1 = () => setIsOpen1(true);
    const handleClose = () => setIsOpen(false);
    const handleClose1 = () => setIsOpen1(false);

    const  [show_pass,setShowPass] = useState(false);
    const handleShowPass = () => setShowPass(!show_pass);

    const [value,setValue] = useState(initialState)

    const  handleValue = (e)=>{
        const {name,value} = e.target
        setValue((prev)=>({...prev,[name]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
            fetch(`${URL}/couriers`,{
                method: 'POST',
                headers:{
                    'Content-type':"application/json",
                    "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjc4NTQ4NzAyLCJleHAiOjE2ODQ1OTY3MDIsImp0aSI6Ijc3NWQ0ODNlLWVhODMtNDI0Yy1hNTUyLTFjZTYwNWFiN2Y5OCIsInVzZXJfaWQiOjEsIm9yaWdfaWF0IjoxNjc4NTQ4NzAyfQ.2GVVmnhp2oSnPhd-DwdzQaUAu9A0pL5iKMQMP6CHaIU"
                },
                body:JSON.stringify(tash)
            })
                .then((response)=>response.json())
                .then((data)=>{
                    console.log(tash);
                    setTash(data)
                })
    };

    const [tash,setTash] = useState([])
    useEffect(()=>{
        fetch(`${URL}/organizations`)
            .then((response)=>response.json())
            .then((data)=>{
                setTash(data)
            })
    },[URL])

    return(
        <>
          <div className="main">
              <Modal isOpen={isOpen} onClose={handleClose}>
                 <div id='child_modal'>
                     <form onSubmit={handleSubmit}>
                        <div id="head-box">
                            <h1>Tashkilot qo`shish</h1>
                            <div id="img-box">
                                <img src={images.tashkilot_} alt=""/>
                            </div>
                        </div>
                         <div id="input-group">

                             <div id="form-group">
                                 <input type="number" placeholder='INN' name="inn" onChange={handleValue} value={value.inn}/>
                             </div>
                             <div id="form-group">
                                 <input type={show_pass?'text':'password'} name='password' placeholder='Kod'
                                       value={value.password} onChange={handleValue}/>
                                 <img id='view' onClick={handleShowPass} src={images.view_password} alt=""/>
                             </div>
                             <div id="form-group">
                                 <input type="text" placeholder='Tashkilot nomi' name='name'
                                        value={value.name} onChange={handleValue}/>
                             </div>
                             <div id="form-group">
                                 <input type="number"  name='price' placeholder='Har bir xat uchun summa'
                                       value={value.price} onChange={handleValue}/>
                                 <span id='uzs'>uzs</span>
                             </div>
                             <div id="form-group">
                                 <input type="checkbox" id="switch" name='is_active' value={value.is_active}
                                        className="checkbox"  onChange={handleValue}/>
                                 <label htmlFor="switch" className="toggle">
                                     <h3 id='check'>
                                         <span>Aktiv</span>
                                         <span>Noaktiv</span>
                                     </h3>  </label>
                             </div>
                             <div id="btn-box">
                                 <button id='add'> Davom etish </button>
                             </div>

                         </div>

                     </form>
                 </div>
              </Modal>
              <Modal isOpen={isOpen1} onClose={handleClose1}>
                  <div id='child_modal'>
                      <form action="">
                          <div id="head-box">
                              <h1> Ma’lumotlarni o’zgartirish </h1>
                              <div id="img-box">
                                  <img src={images.tashkilot_} alt=""/>
                              </div>
                          </div>
                          <div id="input-group">
                              <div id="form-group">
                                  <input type="number" id='id'/>
                              </div>
                              <div id="form-group">
                                  <input type="number" placeholder='INN'/>
                              </div>
                              <div id="form-group">
                                  <input type={show_pass?'text':'password'} placeholder='Kod'/>
                                  <img id='view' onClick={handleShowPass} src={images.view_password} alt=""/>
                              </div>
                              <div id="form-group">
                                  <input type="text" placeholder='Tashkilot nomi'/>
                              </div>
                              <div id="form-group">
                                  <input type="number" placeholder='Har bir xat uchun summa'/>
                                  <span id='uzs'>uzs</span>
                              </div>
                              <div id="form-group">
                                  <input type="checkbox" id="switch"
                                         className="checkbox"/>
                                  <label htmlFor="switch" className="toggle">
                                      <h3 id='check'>
                                          <span>Aktiv</span>
                                          <span>Noaktiv</span>
                                      </h3>  </label>
                              </div>
                              <div id="btn-box">
                                  <button id='add'> Davom etish </button>
                              </div>
                              <div id="btn-box">
                                  <button id='clear'> O`chirish </button>
                              </div>

                          </div>

                      </form>
                  </div>
              </Modal>

              <Head text='Tashkilotlar'/>
             <div className="row d-flex justify-content-end">
                 <Search  text='Tashkilot qo`shish' btn_click={ handleOpen} btn={true} />
             </div>
              <section>
                  {
                      tash.map((item,index)=>{
                        return(
                          <Tashkilot_item key={index} box_click={routeChange} btn1_click ={ routeChange1 }  btn2_click = { handleOpen1 }  text={item.name}> </Tashkilot_item>
                        )
                      })
                  }
              </section>
          </div>
        </>
    )
}

export default Tashkilot;