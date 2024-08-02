import React from 'react'
import style from './Movie.module.css'
import { useNavigate } from 'react-router-dom'
import star from '../../assets/star.png'


const MovieCard = ({id, img, title, avg_rating, genre}) => {

  const navigate = useNavigate()

  return (
    <div id={id} className={style.container} onClick={(e) => {
      e.preventDefault()
    navigate(`/movie/${id}`)
    }}>
      <img src={img}></img>
      <div className={style.genre}>
      <p style={{margin: 0}}>{genre}</p>
      </div>
      
      <h1 className={style.title}>{title}</h1>
      <span className={style.rating}>
        
      <img src={star} className={style.star}></img>
      <p style={{marginRight: '.4em'}}>{avg_rating.value}</p>
        
      <p style={{fontSize: 'small', opacity: '0.8'}}>{avg_rating.totalReviews + ' ' + 'reviews'}</p>
      </span>
     
      
    </div>
  )
}

export default MovieCard