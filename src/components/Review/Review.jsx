import React, { useState } from 'react'
import style from './Review.module.css'
import ReviewComment from '../Comment/Comment'
import { fetchDataWithToken, postDataWithToken } from '../../utils/fetchData'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import star from '../../assets/star.png'


const Review = ({id, description, user, rating, comments, movie, setMovieInfo, setProfile, setUsers}) => {

  const navigate = useNavigate()


  const [editMode, setEditMode] = useState(false)
  const location = useLocation()
  const {movieId} = useParams()

  const handleDelete = async (e) => {
     e.preventDefault()
     try {
      const updatedUsers = await fetchDataWithToken(`http://localhost:3001/reviews/${id}`, 'DELETE')
      if (location.pathname == 'admin') setUsers(updatedUsers)
      const currentUserId = JSON.parse(sessionStorage.getItem('user')).id
      const updatedUser = updatedUsers.find(user => user.id === currentUserId);

      setProfile(updatedUser)
     } catch (error) {
      console.log(error);
     }
  }
  
  const handleEdit = async (e) => {
    e.preventDefault()
   
    const body = {
     description: e.target[0].value,
     rating: e.target[1].value,
    }

     
    try {
       const updatedUsers = await postDataWithToken(`http://localhost:3001/reviews/${id}`, 'PATCH', body)

        if (location.pathname == 'admin') setUsers(updatedUsers)

       const currentUserId = JSON.parse(sessionStorage.getItem('user')).id
       const updatedUser = updatedUsers.find(user => user.id === currentUserId);
      console.log(updatedUser);
       setProfile(updatedUser)

    } catch (error) {
     console.log(error);
    }

    setEditMode(false)
  }

const handleSubmit = async (e) => {
  e.preventDefault()
const currentUser = JSON.parse(sessionStorage.getItem('user'))


if (!currentUser) {
  alert('You have to be logged in to add comments!')
  navigate('/login')
}
else {
  const body = {
    content: e.target[0].value,
    review: id,
    user: currentUser.id
  }

  try {
  const updatedMovies = await postDataWithToken('http://localhost:3001/comments', 'POST', body)
  const updatedMovie = updatedMovies.find(movie => movie.id === movieId);
  setMovieInfo(updatedMovie)
  
  } catch (error) {
    console.log(error);
  }
}
}

const stars = Array.from({length: rating})

  return (
    <div id={id} className={style.container}>
      {user &&<h2>{user}</h2>}
      {movie && <h2>{movie}</h2>}
      {
        !editMode && (
          <div>
            {
              stars.map((_, index) => (<img key={index} className={style.star} src={star}></img>))
            }
          
          
          <p>{description}</p>
          </div>
        )
        
      }
      
      {
        editMode && 
        <form onSubmit={handleEdit}>
       <textarea defaultValue={description} name='description' className={style.editReview}></textarea>
       <span style={{display: 'flex', alignItems: 'center'}}>
       <p>Your rating:</p>
       <input type='number' min={1} max={5} defaultValue={rating} name='rating' className={style.editRating}></input>
       <img className={style.star} src={star}></img>
       </span>
        <span style={{display: 'flex'}}>
        <input type='submit' className={style.editDelReview} value='Save changes'></input>
        <button className={style.editDelReview} onClick={(e) => {
          e.preventDefault()
          setEditMode(false)
        }} >Cancel</button>
        </span>
        </form>
      }
  {
    ((location.pathname == '/profile' || location.pathname == '/admin') && !editMode) &&
    
    <div>
    <button onClick={(e) => {
      e.preventDefault()
      setEditMode(!editMode)
    }} className={style.editDelReview}>Edit Review</button>
    <button onClick={handleDelete} className={style.editDelReview}>Delete review</button>
    </div>
  }
      
      
    {location.pathname == `/movie/${movieId}` && 
     <div>
      <form onSubmit={handleSubmit} className={style.commentForm}>
      <textarea placeholder='Add comment...' name='description' className={style.addCommentInput} required></textarea>
      <input type='submit' className={style.submitComment}></input>
      </form>
    
      </div>
      }
    
      {
       comments && comments.map(comment => (
          <ReviewComment key={comment.id} id={comment.id} content={comment.content} user={comment.user}/>
        ))
      }
    </div>
  )
}

export default Review