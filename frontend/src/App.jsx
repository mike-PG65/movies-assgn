import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MovieList from './components/MovieList'
import NewMovie from './components/NewMovie'
import MovieDetails from './components/MovieDetails'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element=""/>
      <Route path="/movies" element={<MovieList/>}/>
      <Route path='/add-movie' element={<NewMovie/>}/>
      <Route path='/movies/:bookId' element={<MovieDetails />} />
      </Routes>    
    </BrowserRouter>
  )
}

export default App
