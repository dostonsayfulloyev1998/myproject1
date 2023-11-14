import {useState} from 'react'
import AppBarr from './Components/AppBar'
import Product from './Components/Product'
import Modal from './Components/Modal'

function App1(){

    let [tab,setTab] = useState(1)
    const [show,setShow] = useState(false)
    const [pass,showPass] = useState(true)

    const [active,setActive] = useState(true)

    function showModal(){
        setShow(e=>!e)
    }

    return(
        <>
             <Product/>
            <AppBarr/>

            <button onClick={setShow}>show modal</button>
            {
                show &&
                <Modal show={showModal}>

                    <h1>Reigter</h1>
                    <form>
                        <input type="text"/> <br/>
                        <input type={pass?'password':'text'}/> <br/>
                        <div className={'radio'}>
                            <label> <div id="rad" className={active?'active':''} onClick={()=>setActive(true)}>
                                <input type="radio" name='a' checked/> aktiv
                            </div> </label>

                            <label>
                              <div id="rad" className={!active?'active':''} onClick={()=>setActive(false)}>
                                  <input type="radio" name='a'/> noaktiv
                              </div>
                            </label>

                        </div>
                        <button>okay</button>
                    </form>
                </Modal>
            }
        </>
    )
}

export default App1
