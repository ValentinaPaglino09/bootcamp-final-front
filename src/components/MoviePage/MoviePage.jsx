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

const navigate = useNavigate()

useEffect(() => {

  fetchData(`http://localhost:3001/movies/${movieId}`, 'GET')
  .then(data => setMovieInfo(data))
}, [])
  
 
    const user = JSON.parse(sessionStorage.getItem('user'))

    const handleSubmit = async (e) => {
       e.preventDefault()
        if (!user) {
          alert('You have to be logged in to add reviews!')
          navigate('/login')
        }
        else {
          const body = {
            description: e.target[0].value,
            rating: e.target[1].value,
            movie: movieId,
            user: user.id
           }
      
          
           try {
              const updatedMovies = await postDataWithToken('http://localhost:3001/reviews', 'POST', body)
              
              const updatedMovie = updatedMovies.find(movie => movie.id === movieId);
              setMovieInfo(updatedMovie)
           } catch (error) {
            console.log(error);
           }
        }
       
     
    }

   

  if (movieInfo) {
    const {title, img, year, synopsis, genre, duration, reviews} = movieInfo
    return (
    <div className={style.container}>
      <div id={movieId} className={style.infoContainer}>
    
    <div className={style.movieContainer}>
    <img src={img && img} className={style.poster}></img>
     <div className={style.movieInfo}>
     <h1 className={style.title}>{title && year && title + ' (' + year + ')'}</h1>
   
     <div className={style.synopsis}>
     <p>{synopsis}</p>
     </div>
    
     <div >
     <span> Genre: <p className={style.genre}> {genre}</p></span> 
      <p className={style.duration}> Duration: {duration + ' min'}</p>
     </div>
     </div>
    </div>
     
     <div className={style.reviews}>
      <div className={style.reviewsTitle}>
      <h1>Reviews</h1>
      <span className={style.rating}>
      <h2 className={style.averageRating}>{reviews && avgRating(reviews)['value']}</h2>
      <img className={style.star} src={star}></img>
      </span>
      </div>
    
      <form onSubmit={handleSubmit}>
        <textarea placeholder='Add a review...' name='description' className={style.reviewInput} required></textarea>
        <span className={style.addRating}>
        <label htmlFor='rating'>Rate this movie out of 5 stars:</label>
        <input className={style.ratingInput} id='rating' type='number' min={1} max={5} defaultValue={1} name='rating' required></input>
        <img className={style.star} src={star}></img>
        </span>
        <input className={style.submit} value='Submit' type='submit'></input>
      </form>
      {
      reviews && reviews.map(review => {
        
            return <Review key={review.id} id={review.id} description={review.description} rating={review.rating} user={review.user} comments={review.comments} setMovieInfo={setMovieInfo}/>
       })
      }
     </div>
     
    
    </div>
    </div>
    
  )}
}

export default MoviePage