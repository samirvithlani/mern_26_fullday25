import React from 'react'
import { Link } from 'react-router-dom'

export const Teams = () => {
   const teamList = [
  {
    id: 1,
    name: "Royal Challengers Bengaluru",
  },
  {
    id: 2,
    name: "Punjab Kings",
  },
  {
    id: 3,
    name: "Gujarat Titans",
   
  },
  {
    id: 4,
    name: "Sunrisers Hyderabad",
   
  },
  {
    id: 5,
    name: "Chennai Super Kings",
    
  
  },
  {
    id: 6,
    name: "Mumbai Indians",
   
  },
  {
    id: 7,
    name: "Kolkata Knight Riders",
   
  },
  {
    id: 8,
    name: "Delhi Capitals",
   
  },
  {
    id: 9,
    name: "Lucknow Super Giants",
   
  },
  {
    id: 10,
    name: "Rajasthan Royals",
    
  },
];
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
                        <Link to={`/teamdetail/${t.id}`}>{t.name}</Link>
                    </li>
                })
            }
        </ol>
    </div>
  )
}
