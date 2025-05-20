import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewMovie = () => {
  const [movie, setMovie] = useState({
    title:'',
    description:'',
    posterURL:'',
    rating:''
  })

  const navigate = useNavigate()

  const handleSubmit =async (e)=>{
    e.preventDefault()

    if (!movie.title || !movie.description || !movie.posterURL || !movie.rating) {
      return 'All fields are required';
    }
    try {
      const response = await axios.post("http://localhost:4000/addmovie", movie)
      console.log('Movie added:', response.data);
      alert("Movie successfully added!");

      setTimeout(()=>{
        navigate("/movies")
      }, 1000)
    } catch (error) {
      console.error("Error Adding the movie", error)      
    }

  }
  return (
    <div>

      <form action="" onSubmit={handleSubmit} className=''>
        <input 
        type="text" 
        value={movie.title}
        placeholder='Enter the movie title' 
        onChange={(e)=>{setMovie(movie=>({...movie, title: e.target.value}))}}
        className=''
        />
        <textarea type="text" value={movie.description} placeholder='Enter the movie description' onChange={(e)=>{setMovie(movie=>({...movie, description: e.target.value}))}}/>
        <input type="text" value={movie.posterURL} placeholder='Enter the poster url' onChange={(e)=>{setMovie(movie=>({...movie, posterURL: e.target.value}))}}/>
        <input type="text" value={movie.rating} placeholder='Enter the movie rating' onChange={(e)=>{setMovie((movie)=>({...movie, rating: e.target.value }))}} />

        <button type='submit'> Submit </button>
      </form>
      
    </div>
  )
}

export default NewMovie
