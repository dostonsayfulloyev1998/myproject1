import './App.css'

import Counter  from "./Components/Counter";
import Product from './Components/Product';

const App = ()=>{

    let talaba = [
        {
            name:"ali",
            surname:"valiyev",
            age:23
        },
        {
            name:"ali",
            surname:"valiyev",
            age:23
        },
        {
            name:"ali",
            surname:"valiyev",
            age:23
        },
        {
            name:"ali",
            surname:"valiyev",
            age:23
        },
        {
            name:"ali",
            surname:"valiyev",
            age:23
        }
    ]

    return (
        <div>
            <table>
                  <tr>
                       <th>name</th>
                      <th>surname</th>
                      <th>age</th>
                  </tr>

                {
                    talaba.map((t)=>{
                        return(
                            <tr>
                                 <td>{t.name}</td>
                                 <td>{t.surname}</td>
                                 <td>{t.age}</td>
                            </tr>
                        )
                    })
                }
            </table>

            <img src={require('./images/rasm.jpg')} alt=""/>
            
           <Counter text='Alisher'/>
           <Counter text="Vali"/>
           <Counter text='Sherzod'/>
           <Counter text='Shaxzod'/>
        </div>
    )
}

export default App