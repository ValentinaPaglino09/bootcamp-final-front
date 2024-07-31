import React from 'react'
import style from './Movie.module.css'
import Review from '../Review/Review'
import { useNavigate } from 'react-router-dom'
import star from '../../assets/star.png'


const MovieCard = ({id, img, title, avg_rating, genre, selectMovie}) => {

  return (
    <div id={id} className={style.container} onClick={(e) => {
      e.preventDefault()
      localStorage.setItem('selectedMovieId', id)
     selectMovie(id)
    }}>
      <img src={img}></img>
      <div className={style.genre}>
      <p style={{margin: 0}}>{genre}</p>
      </div>
      
      <h1 className={style.title}>{title}</h1>
      <span className={style.rating}>
      <img src={star} className={style.star}></img>
      <p >{avg_rating}</p>
      </span>
     
      
    </div>
  )
}

export default MovieCard