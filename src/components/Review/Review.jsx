import React, { useState } from 'react'
import style from './Review.module.css'
import ReviewComment from '../Comment/Comment'
import { fetchDataWithToken, postDataWithToken } from '../../utils/fetchData'
import { useLocation, useParams } from 'react-router-dom'
import star from '../../assets/star.png'


const Review = ({id, description, user, rating, comments}) => {


  const [editMode, setEditMode] = useState(false)
  const location = useLocation()
  const {movieId} = useParams()

  const handleDelete = async (e) => {
     e.preventDefault()
     try {
      const data = await fetchDataWithToken(`http://localhost:3001/reviews/${id}`, 'DELETE')
     console.log(data);
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
       const data = await postDataWithToken(`http://localhost:3001/reviews/${id}`, 'PATCH', body)
       console.log(data);
    } catch (error) {
     console.log(error);
    }

    setEditMode(false)
  }

const handleSubmit = async (e) => {
  e.preventDefault()
const userId = JSON.parse(sessionStorage.getItem('user')).id
  const body = {
    content: e.target[0].value,
    review: id,
    user: userId
  }

  try {
  const data = await postDataWithToken('http://localhost:3001/comments', 'POST', body)
  console.log(data);
  } catch (error) {
    console.log(error);
  }
}
  
  return (
    <div id={id} className={style.container}>
      <h2>{user}</h2>
      {
        !editMode &&
        <div>
          <span className={style.rating}>
             <p>{rating}</p>
      
      <img className={style.star} src={star}></img>
          </span>
      <p>{description}</p>
      </div>
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
      <form onSubmit={handleSubmit} style={{display: 'flex', alignItems: 'center'}}>
      <textarea placeholder='Add comment...' name='description' className={style.addCommentInput}></textarea>
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