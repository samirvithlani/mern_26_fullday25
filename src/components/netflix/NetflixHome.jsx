import React from 'react'
import { MyButton } from '../MyButton'

export const NetflixHome = () => {
  const homeTest = (x)=>{
    alert("home test "+x)
  }
  return (
    <div style={{textAlign:"center"}}>
      
        <h1>NETFLIX HOME</h1>
        <MyButton funName={()=>{homeTest(100)}} name="home button"></MyButton>
    </div>
  )
}
