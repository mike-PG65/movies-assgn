import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
import FilterMovies from './FilterMovies'


const MovieList = () => {

  
  return (
    <div className='px-4 py-2 '>

      <FilterMovies className=""/>

      <MovieCard/>        
      
    </div>
  )
}

export default MovieList
