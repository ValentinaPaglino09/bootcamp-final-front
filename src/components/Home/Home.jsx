import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import Movie from '../Movie/Movie'
import SearchBar from '../SearchBar/SearchBar'
import { fetchData } from '../../utils/fetchData'
import { avgRating } from '../../utils/avgRating'

const Home = () => {

  const [moviesData, setMoviesData] = useState([])
  const [results, setResults] = useState([])
 

  useEffect(() => {

   fetchData('http://localhost:3001/movies', 'GET')
   .then(data => {
    setMoviesData(data)
    setResults(data)
  })

  }, [])


  return (
   <div className={style.container}>
    <SearchBar moviesData={moviesData} setResults={setResults}/>
    <div className={style.movieCards}>
    {
     results && results.map(movie => (
        <Movie  key={movie.id} id={movie.id} img={movie.img} title={movie.title}  avg_rating={avgRating(movie.reviews)} genre={movie.genre} />
      ))
    }
    </div>
   </div>
  )
}

export default Home