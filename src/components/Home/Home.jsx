import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import Movie from '../Movie/Movie'
import SearchBar from '../SearchBar/SearchBar'
import {moviesArray} from '../../utils/data' 
import MoviePage from '../MoviePage/MoviePage'

const Home = () => {

  const [moviesData, setMoviesData] = useState([])
  const [selectedMovie, setSelectedMovie] = useState()
  const [results, setResults] = useState([])
 

  useEffect(() => {

  //  fetchData('http://localhost:3000/movies', 'GET')
  //  .then(res => res.json())
  //  .then(data => setMoviesData(data))

  setMoviesData(moviesArray)
   setResults(moviesArray)
   setSelectedMovie(localStorage.getItem('selectedMovieId'))
  }, [])



if (selectedMovie) {
  return <MoviePage setSelectedMovie={setSelectedMovie} selectedMovieData={moviesData.find(movie => movie.id == selectedMovie)}/> 
}
  else return (
   <div className={style.container}>
    <SearchBar moviesData={moviesData} setResults={setResults}/>
    <div className={style.movieCards}>
    {
     results && results.map(movie => (
        <Movie selectMovie={setSelectedMovie} key={movie.id} id={movie.id} img={movie.img} title={movie.title}  avg_rating={movie.avg_rating} genre={movie.genre} />
      ))
    }
    </div>
   </div>
  )
}

export default Home