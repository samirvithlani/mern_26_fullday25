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
import { TableDemo1 } from './components/TableDemo1'
import { TableDemo2 } from './components/TableDemo2'
import { FormDemo1 } from './components/form/FormDemo1'
import { FormDemo2 } from './components/form/FormDemo2'
import { FormDemo3 } from './components/form/FormDemo3'
import { FormDemo4 } from './components/form/FormDemo4'
import { FormDemo5 } from './components/form/FormDemo5'
import { Common } from './components/Common'
import { FormDemo6 } from './components/form/FormDemo6'
import { UseMemoDemo1 } from './components/UseMemoDemo1'
import { FindGameBomb } from './components/FindGameBomb'
import { ApiDemo1 } from './components/api/ApiDemo1'
import { OmdbSearch } from './components/api/OmdbSearch'


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
          <Route path='/table' element = {<TableDemo1></TableDemo1>}></Route>
          <Route path='/table2' element = {<TableDemo2/>}></Route>
          <Route path='/formdemo1' element ={<FormDemo1/>}></Route>
          <Route path='/formdemo2' element ={<FormDemo2/>}></Route>
          <Route path='/formdemo3' element = {<FormDemo3/>}></Route>
          <Route path='/formdemo4' element ={<FormDemo4/>}></Route>
          <Route path='/formdemo5' element ={<FormDemo5/>}></Route>
          <Route path='/formdemo6' element ={<FormDemo6/>}></Route>
          <Route path='/common' element = {<Common/>}></Route>
          <Route path='/usememodemo1' element  ={<UseMemoDemo1/>}></Route>
          <Route path='/findbomb' element = {<FindGameBomb/>}></Route>
          <Route path='/apidemo1' element = {<ApiDemo1/>}></Route>
          <Route path='/searchomdb' element = {<OmdbSearch/>}></Route>

        </Routes>
    </div>
  )
}

export default App
