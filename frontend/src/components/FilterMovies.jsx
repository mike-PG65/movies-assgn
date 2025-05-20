import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FilterMovies = () => {

    const [filteredMovies, setFilteredMovies]= useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [movies, setMovies] = useState([])

    useEffect(()=>{

      const fetchMovies = async ()=>{
        try {
          const response = await axios.get("http://localhost:4000/movies")
          const data = response.data
  
          setMovies(data)
          
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      }

      fetchMovies()
      
    },[])


    useEffect(()=>{
      if (searchTerm.trim() === '') {
        setFilteredMovies([]); // show all if empty search
      } else {
        const results = movies.filter(movie =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMovies(results);
      }
    },[searchTerm])
  return (
    <div className=''>

        <input type="text" value={searchTerm} placeholder='Search a movie....'  onChange={(e)=> setSearchTerm(e.target.value)} className='border border-gray-400 px-4 py-2 w-100 rounded-lg'/>
        <div className='px-2 py-2 cursor-pointer '>
          {
            filteredMovies.length > 0 && searchTerm ? (
              filteredMovies.map(filteredMovie =>(
                <div key={filteredMovie.id} className='h-15 px-2 py-2 w-100 rounded-lg flex mb-3 hover:bg-gray-200'>
                  <img src={filteredMovie.posterURL} alt="" className='h-full'/>
                  <p>{filteredMovie.title}</p>
                </div>
              ))
            ) : searchTerm.trim() !== '' ? (
              <div>No movies found</div> // Only show if search is not empty
            ) : null
            
          }
        </div>
      
    </div>
  )
}

export default FilterMovies
