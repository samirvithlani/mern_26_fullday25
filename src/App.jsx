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
import { Navbar } from './components/Navbar'
import { Error404 } from './components/Error404'
import { Watch } from './components/netflix/Watch'
import { NetflixMovies } from './components/netflix/NetflixMovies'
import { Teams } from './components/Teams'
import { TeamDetail } from './components/TeamDetail'
import { UseStateDemo1 } from './components/UseStateDemo1'
import { UseStateDemo2 } from './components/UseStateDemo2'
import { UseStateDemo3 } from './components/UseStateDemo3'
import { UseStateDemo4 } from './components/UseStateDemo4'
import { UseStateDemo5 } from './components/UseStateDemo5'
import { InputDemo1 } from './components/InputDemo1'
import { InputDemo2 } from './components/InputDemo2'
import { Students } from './components/Students'


function App() {

  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element = {<MapDemo3/>}></Route>
          <Route path='/netflixhome' element = {<NetflixHome/>}></Route>
          <Route path='/netflixshows' element = {<NetflixShows/>}></Route>
          <Route path='/netflixmovies' element={<NetflixMovies/>}></Route>
          <Route path='/watch/:name' element = {<Watch/>}></Route>
          <Route path='/*' element = {<Error404/>}></Route>
          <Route path = "/teams" element = {<Teams/>}></Route>
          <Route path = "/teamdetail/:id" element = {<TeamDetail/>}></Route>
          <Route path='/useStateDemo1' element ={<UseStateDemo1/>}></Route>
          <Route path='/useStateDemo2' element ={<UseStateDemo2/>}></Route>
          <Route path='/useStateDemo3' element ={<UseStateDemo3/>}></Route>
          <Route path='/useStateDemo4' element ={<UseStateDemo4/>}></Route>
          <Route path='/useStateDemo5' element ={<UseStateDemo5/>}></Route>
          <Route path='/inputdemo1' element ={<InputDemo1/>}></Route>
          <Route path='/inputdemo2' element ={<InputDemo2/>}></Route>
          <Route path='/students' element = {<Students/>}></Route>
        </Routes>
    </div>
  )
}

export default App
