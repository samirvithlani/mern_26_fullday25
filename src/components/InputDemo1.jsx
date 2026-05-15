import React, { useState } from 'react'

export const InputDemo1 = () => {

    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [isClicked, setisClicked] = useState(false)



    const nameHandler = (event)=>{
        console.log(event.target.value)
        setname(event.target.value)
    }
    const ageHandler = (event)=>{

        //console.log(event)
        setage(event.target.value)
    }
    const clickHandler = ()=>{
        setisClicked(true)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>INPUT DEMO 1</h1>
        <div>
            <label>NAME:</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {/* {name} */}
        </div>
        <div>
            <label>AGe:</label>
            <input type='number' onChange={(event)=>{ageHandler(event)}}></input>
            {/* {age} */}
        </div>
        <div>
            <button onClick={()=>{clickHandler()}}>CLICK</button>
        </div>
        {
            isClicked==true && <div>
            <h1>OUTPUT</h1>
            <h1>Name = {name}</h1>
            <h1>AGE = {age}</h1>
        </div>
        }
        
    </div>
  )
}
