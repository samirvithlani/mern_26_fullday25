import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { HeaderComponent } from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { ContentComponent } from './components/ContentComponent'
import { MapDemo1 } from './components/MapDemo1'

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
      <MapDemo1></MapDemo1>
    </div>
  )
}

export default App
