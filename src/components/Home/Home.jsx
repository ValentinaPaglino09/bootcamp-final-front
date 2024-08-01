import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import Movie from '../Movie/Movie'
import SearchBar from '../SearchBar/SearchBar'
import MoviePage from '../MoviePage/MoviePage'
import { fetchData } from '../../utils/fetchData'

const Home = () => {

  const [moviesData, setMoviesData] = useState([])
  //const [selectedMovie, setSelectedMovie] = useState()
  const [results, setResults] = useState([])
 

  useEffect(() => {

   fetchData('http://localhost:3001/movies', 'GET')
   .then(data => {
    setMoviesData(data)
    setResults(data)
  })

   //setSelectedMovie(localStorage.getItem('selectedMovieId'))
  }, [])



// if (selectedMovie) {
//   return <MoviePage setSelectedMovie={setSelectedMovie} selectedMovie={selectedMovie}/> 
// }
  return (
   <div className={style.container}>
    <SearchBar moviesData={moviesData} setResults={setResults}/>
    <div className={style.movieCards}>
    {
     results && results.map(movie => (
        <Movie  key={movie.id} id={movie.id} img={movie.img} title={movie.title}  avg_rating={movie.avg_rating} genre={movie.genre} />
      ))
    }
    </div>
   </div>
  )
}

export default Home