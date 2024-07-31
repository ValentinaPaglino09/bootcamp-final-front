import React from 'react'
import Review from '../Review/Review'
import { postDataWithToken } from '../../utils/fetchData'
import { useNavigate } from 'react-router-dom'
import style from './MoviePage.module.css'
import star from '../../assets/star.png'

const MoviePage = ({selectedMovieData, setSelectedMovie}) => {


   const {id, title, synopsis, img, year, duration, genre, avg_rating, reviews} = selectedMovieData
 
    const user = JSON.parse(sessionStorage.getItem('user'))

    const handleSubmit = async (e) => {
       e.preventDefault()

       const body = {
        description: e.target[0].value,
        rating: e.target[1].value,
        movie: id,
        user: user.id
       }
  
      
       
        
      //  try {
         //  const res = await postDataWithToken('http://localhost:3000/reviews', 'POST', body)
      // const data = await res.json()
      //  } catch (error) {
      //   console.log(error);
      //  }
     
    }

  return (
    <div className={style.container}>
      <div id={id} className={style.infoContainer}>
        <button onClick={(e) => {
        e.preventDefault()
        localStorage.removeItem('selectedMovieId')
        setSelectedMovie()
      }}>Volver a inicio</button>
    
    <div className={style.movieContainer}>
    <img src={img} className={style.poster}></img>
     <div className={style.movieInfo}>
     <h1 className={style.title}>{title + ' (' + year + ')'}</h1>
   
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
      <h2 className={style.averageRating}>{avg_rating}</h2>
      <img className={style.star} src={star}></img>
      </span>
      </div>
    
      <form onSubmit={handleSubmit}>
        <textarea placeholder='Add a review...' name='description' className={style.reviewInput}></textarea>
        <input type='number' min={1} max={5} placeholder='rating' name='rating'></input>
        <input className={style.submit} type='submit'></input>
      </form>
      {
        reviews.map(review => (
            <Review key={review.id} id={review.id} description={review.description} user={review.user} comments={review.comments}/>
        ))
      }
     </div>
     
    
    </div>
    </div>
    
  )
}

export default MoviePage