import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const MovieDetails = () => {
  const { bookId } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`http://localhost:4000/movies/${bookId}`, {
          method: 'GET',
        })

        if (response.ok) {
          const data = await response.json()
          setMovie(data)
        }
      } catch (error) {
        console.error("Something went wrong", error)
      }
    }
    fetchMovies()
  }, [bookId])

  // Function to render stars based on rating
  const renderStars = () => {
    const totalStars = 5
    const starsToShow = Math.round((movie.rating || 0) / 2)
    let stars = ''

    for (let i = 0; i < totalStars; i++) {
      stars += i < starsToShow ? '★' : '☆'
    }

    return <span className="text-yellow-500 text-xl">{stars}</span>
  }

  return (
    <div className='h-screen flex items-center justify-center relative flex-col gap-12 '>

      <h1 className='font-bold text-xl'>Book Details </h1>


      <Link to='/movies' className='bg-blue-400 py-2 px-4 rounded-lg absolute right-70 top-5 hover:bg-blue-300'>
       Book Catalog
      </Link>
      <div className='overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer shadow-md bg-[whitesmoke] h-fit w-100 px-2 py-2 gap-4'>
        <img src={movie.posterURL} alt="" className='h-80 rounded-lg w-full object-cover transition-transform duration-200 group-hover:scale-105' />
        <div className='flex justify-center flex-col gap-6'>
          <p className='text-xl font-semibold'>{movie.title}</p>
          <p className='text-gray-700'>{movie.description}</p>
          <div className='flex items-center gap-2'>
            {renderStars()}
            <span className='text-sm text-gray-600'>{movie.rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
