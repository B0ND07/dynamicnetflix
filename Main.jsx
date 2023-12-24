import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Main() {
    const [movies,setMovies]=useState([])


    useEffect(() => {
        axios
          .get(
            "https://api.themoviedb.org/3/movie/popular?api_key=7375b3162ed1bb2f24bb965386019997"
          )
          .then((response) => {
            console.log(response.data.results);
            setMovies(response.data.results);
          });
      }, []);
  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movies[1].backdrop_path}`} alt={movies[1].title}/>
      <div className='absolute w-full top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>{movies[1].title}</h1>
        <div className='my-4'>
        
        <button className='border px-4 py-2 bg-gray-300 text-black'>Play</button>
        <button className='border px-4 py-2 bg-black-300 text-white ml-4'>Watch Later</button>
        </div>
        <p className='w-full md:max-w-[70%] lg:max-w-[50%]'>{movies[1].overview}</p>
      </div>
      </div>
    </div>
  )
}

export default Main