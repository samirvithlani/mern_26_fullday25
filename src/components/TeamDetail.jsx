import React from 'react'
import { useParams } from 'react-router-dom'

export const TeamDetail = () => {
    //url data->
    //<Route path = "/teamdetail/:name" element = {<TeamDetail/>}></Route>
    const name = useParams().name

    //<Route path = "/teamdetail/:id" element = {<TeamDetail/>}></Route>
    //const name = useParams().id
  return (
    <div style={{textAlign:"center"}}>
        <h1>TEAM DETAIL of  {name}</h1>
    </div>
  )
}
