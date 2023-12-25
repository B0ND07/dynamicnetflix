import React from 'react'
import Main from '../Main'
import Row from '../Row'

function Home() {
  return (
    <div>
        <Main/>
        <Row title='Trending Now' fetchUrl='https://api.themoviedb.org/3/trending/all/day?api_key=7375b3162ed1bb2f24bb965386019997'/>
        <Row title='Top Rated' fetchUrl='https://api.themoviedb.org/3/movie/top_rated?api_key=7375b3162ed1bb2f24bb965386019997'/>
        <Row title='Action' fetchUrl='https://api.themoviedb.org/3/discover/movie?api_key=7375b3162ed1bb2f24bb965386019997&with_genres=28'/>
        <Row title='Comedy' fetchUrl='https://api.themoviedb.org/3/discover/movie?api_key=7375b3162ed1bb2f24bb965386019997&with_genres=35'/>
        
    </div>
  )
}

export default Home