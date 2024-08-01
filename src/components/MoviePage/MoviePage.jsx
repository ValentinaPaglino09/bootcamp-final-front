import React, { useEffect, useState } from 'react'
import Review from '../Review/Review'
import { fetchData, postDataWithToken } from '../../utils/fetchData'
import { useNavigate, useParams } from 'react-router-dom'
import style from './MoviePage.module.css'
import star from '../../assets/star.png'
import { avgRating } from '../../utils/avgRating'

const MoviePage = () => {

const {movieId} = useParams()
const [movieInfo, setMovieInfo] = useState()

useEffect(() => {

  fetchData(`http://localhost:3001/movies/${movieId}`, 'GET')
  .then(data => setMovieInfo(data))
}, [movieInfo])
  
 
    const user = JSON.parse(sessionStorage.getItem('user'))

    const handleSubmit = async (e) => {
       e.preventDefault()

       const body = {
        description: e.target[0].value,
        rating: e.target[1].value,
        movie: movieId,
        user: user.id
       }
  
      
       try {
          const data = await postDataWithToken('http://localhost:3001/reviews', 'POST', body)
          console.log(data);
       } catch (error) {
        console.log(error);
       }
     
    }

  if (movieInfo) return (
    <div className={style.container}>
      <div id={movieId} className={style.infoContainer}>
    
    <div className={style.movieContainer}>
    <img src={movieInfo.img} className={style.poster}></img>
     <div className={style.movieInfo}>
     <h1 className={style.title}>{movieInfo.title + ' (' + movieInfo.year + ')'}</h1>
   
     <div className={style.synopsis}>
     <p>{movieInfo.synopsis}</p>
     </div>
    
     <div >
     <span> Genre: <p className={style.genre}> {movieInfo.genre}</p></span> 
      <p className={style.duration}> Duration: {movieInfo.duration + ' min'}</p>
     </div>
     </div>
    </div>
     
     <div className={style.reviews}>
      <div className={style.reviewsTitle}>
      <h1>Reviews</h1>
      <span className={style.rating}>
      <h2 className={style.averageRating}>{avgRating(movieInfo.reviews)['value']}</h2>
      <img className={style.star} src={star}></img>
      </span>
      </div>
    
      <form onSubmit={handleSubmit}>
        <textarea placeholder='Add a review...' name='description' className={style.reviewInput}></textarea>
        <input type='number' min={1} max={5} placeholder='rating' name='rating'></input>
        <input className={style.submit} type='submit'></input>
      </form>
      {
       movieInfo.reviews && movieInfo.reviews.map(review => {
        
            return <Review key={review.id} id={review.id} description={review.description} rating={review.rating} user={review.user} comments={review.comments} />
       })
      }
     </div>
     
    
    </div>
    </div>
    
  )
}

export default MoviePage