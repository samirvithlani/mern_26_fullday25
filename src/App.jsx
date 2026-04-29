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
import { MapDemo4 } from './components/MapDemo4'
import {  Route, Routes } from 'react-router-dom'
import { NetflixHome } from './components/netflix/NetflixHome'
import { NetflixShows } from './components/netflix/NetflixShows'


function App() {

  return (
    <div>
        <Routes>
          <Route path='/netflixhome' element = {<NetflixHome/>}></Route>
          <Route path='/netflixshows' element = {<NetflixShows/>}></Route>
        </Routes>
    </div>
  )
}

export default App
