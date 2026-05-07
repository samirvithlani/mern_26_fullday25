import React from 'react'
import { Link } from 'react-router-dom'

export const Teams = () => {
    const teamList = [
        {id:1,name:"RCB"},
        {id:2,name:"PBKS"},
        {id:3,name:"GT"},
        {id:4,name:"SRH"}
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>TEAMS</h1>
        <ol>
            <li>
                <Link to="/teamdetail/csk">CSK</Link>
            </li>
            <li>
                <Link to="/teamdetail/mi">MI</Link>
            </li>
        </ol>
        <ol>
            {
                teamList.map((t)=>{
                    return <li>
                        <Link to={`/teamdetail/${t.name}`}>{t.name}</Link>
                    </li>
                })
            }
        </ol>
    </div>
  )
}
