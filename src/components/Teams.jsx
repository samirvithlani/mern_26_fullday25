import React from 'react'
import { Link } from 'react-router-dom'

export const Teams = () => {
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
    </div>
  )
}
