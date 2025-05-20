import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MovieList from './components/MovieList'
import NewMovie from './components/NewMovie'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element=""/>
      <Route path="/movies" element={<MovieList/>}/>
      <Route path='/add-movie' element={<NewMovie/>}/>
      </Routes>    
    </BrowserRouter>
  )
}

export default App
