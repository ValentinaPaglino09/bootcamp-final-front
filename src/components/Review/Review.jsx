import React, { useState } from 'react'
import style from './Review.module.css'
import ReviewComment from '../Comment/Comment'
import { fetchDataWithToken, postDataWithToken } from '../../utils/fetchData'
import { useLocation, useParams } from 'react-router-dom'

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
      <p>{description}</p>
      <p>{rating}</p>
      </div>
      }
      
      {
        editMode && 
        <form onSubmit={handleEdit}>
       <textarea defaultValue={description} name='description'></textarea>
        <input type='number' min={1} max={5} defaultValue={rating} name='rating'></input>
        <input type='submit'></input>
        </form>
      }
  {
    (location.pathname == '/profile' || location.pathname == '/admin') &&
    <div>
    <button onClick={(e) => {
      e.preventDefault()
      setEditMode(!editMode)
    }}>{editMode ? 'Cancel' : 'Edit Review'}</button>
    <button onClick={handleDelete}>Delete review</button>
    </div>
  }
      
      
    {location.pathname == `/movie/${movieId}` && 
     <div>
      <form onSubmit={handleSubmit}>
      <textarea placeholder='Add comment...' name='description'></textarea>
      <input type='submit'></input>
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