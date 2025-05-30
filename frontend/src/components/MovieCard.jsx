import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const MovieCard = () => {

  const [movies, setMovies] = useState([])


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:4000/movies");
        console.log(response)
        setMovies(response.data); // Store the response in state
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <div>

      <div className='grid grid-cols-4 gap-3'>
        {
          movies.length > 0 ? (
            movies.map(movie =>(
              
              <div key={movie.id} className='h-80 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group'>
                <Link to={`/movies/${movie.id}`}>
                <img src={movie.posterURL} alt={movie.title} className='h-1/2 w-full object-cover transition-transform duration-500 group-hover:scale-105'/>
                <div className='px-3 py-2'>
                  <p className='text-xl '>{movie.title}</p>
                  <p>{movie.description}</p>
                  <p>{movie.rating}</p>

                </div>
                </Link>
              </div>
             
            ))

          ) : (
            <div> No movies found </div>
          )
        }
      </div>
      
    </div>
  )
}

export default MovieCard
