import React from 'react'

export const ContentComponent = () => {
    const name = "India"
    const age = 5000
    const isSecular = true
  return (
    <div>
        <h1>Name = {name}</h1>
        <h3>Age = {age}</h3>
        <h3>Secular {isSecular == true ? "Yes":"No"}</h3>
    </div>
  )
}
