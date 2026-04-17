import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  var name = "Royal"
  var year = 2026
  var isActive = true

  var user = {
    name:"amit",
    age:23
  }

  //object:



  return (
    <div>
      <h1>HELLO</h1>
      <h4>AT A TIME WE CAN RETURN ONLY 1 ELEMENT</h4>
      <h4>Every Tag must have closing tag</h4>
      <h4>WhATEVER WRITTEN INSIDE REUTN STATMENT WILL DISPLAY TO BROWSER ONLY</h4>
      <h1>Name : {name}</h1>
      <h2>Year : {year}</h2>
      <h2>Isactive ?? : {isActive == true ? "Active" : "Not Active"}</h2>
      <h2>Name = {user.name}</h2>
      <h2>Age = {user.age}</h2>
    </div>
  )
}

export default App
