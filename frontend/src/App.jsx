import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MovieList from './components/MovieList'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element=""/>
      <Route path="/books" element={<MovieList/>}/>
      </Routes>    
    </BrowserRouter>
  )
}

export default App
