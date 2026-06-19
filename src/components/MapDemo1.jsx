import React from 'react'

export const MapDemo1 = () => {

    var marks = [10,20,30,40,50]

  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 1</h1>
        <table className='table table-dark'>

        </table>
        {
           marks.map((m)=>{
            
           }) 
        }
    </div>
  )
}
