
import style from  './Kuries.module.css'

const Kurier= ()=>{


    return (

        <>
          <div className={style.item}>

              <h1 className='logo'>Kurier</h1>
              <p className='price'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores doloribus facere, ipsam libero magni minima natus nobis officiis quae quam quod tempore ut voluptate? Assumenda eligendi libero porro repellendus voluptatem?</p>

              <div className='btn-group'>
                  <button id='btn1'>add</button>
                  <button>remove</button>
              </div>
          </div>
        </>
    )

}

export  default Kurier