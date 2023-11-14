
import {useState} from "react";

const App2 = ()=>{
     const [nav,setNav] = useState(1)

    return(
        <>
           <ul>
               <li> Tashkilot </li>
               <li> Kurier </li>
               <li> Statistika </li>
               <li> Tushumlar </li>
               <li> Arxiv </li>
               <li> Admin qo`shish </li>
           </ul>
        </>
    )

}
export default App2;