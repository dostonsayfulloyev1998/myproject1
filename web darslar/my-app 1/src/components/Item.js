import './Item.css'
import {useState} from 'react'


const Item = () => {

    const [count,setCount] = useState(0)


    function plus(){
       setCount(e=> e+1)

    }
    
    function minus(){
        setCount(e=> e-1)
    }

    return (
        <div id='item'>
              <h1>hello wolrd  {count} </h1>
            <button onClick={plus}>plus</button>
            <button onClick={minus}> minus</button>

            <hr/>
        </div>
    )

}


export default Item
