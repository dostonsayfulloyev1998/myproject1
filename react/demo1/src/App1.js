
import './App1.css'
import {useState} from "react";

const App1 = ()=>{

    const  [url,setUrl] = useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setUrl(URL.createObjectURL(event.target.files[0]));
        }
    }



    const [pass,showPass] = useState(false)
    return (
        <div className={'modal'}>
            <form>
                <label>
                    {!url && <div className={'pic'}>
                        <input onChange={onImageChange} type="file"/>
                    </div>
                    }

                    {
                        url &&
                        <img src={url}/>
                    }
                </label>

                <label>
                    <input type="text" placeholder='enter name'/>
                </label>

                <label>
                    <input type="text" placeholder="Enter surname"/>
                </label>

                <input type={pass?"text":'password'}/>

                <button> Ok </button>
            </form>

        </div>
    )
}

export default App1