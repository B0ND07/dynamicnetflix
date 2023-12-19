import React from 'react'

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
    <div>Main</div>
  )
}

export default Main