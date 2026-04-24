import React from 'react'

export const MapDemo1 = () => {

    var marks = [10,20,30,40,50]

  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 1</h1>
        {
           marks.map((m)=>{
            return <li>{m}</li>
           }) 
        }
    </div>
  )
}
