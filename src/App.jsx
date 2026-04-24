import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { HeaderComponent } from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { ContentComponent } from './components/ContentComponent'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'

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
      {/* <HeaderComponent></HeaderComponent>
      <ContentComponent></ContentComponent>
      <FooterComponent></FooterComponent> */}
      {/* <MapDemo1></MapDemo1> */}
      {/* <MapDemo2></MapDemo2> */}
      <MapDemo3></MapDemo3>
    </div>
  )
}

export default App
