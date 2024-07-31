import React, { useState } from 'react'
import style from './Review.module.css'
import ReviewComment from '../Comment/Comment'
import { fetchDataWithToken, postDataWithToken } from '../../utils/fetchData'
import { useLocation } from 'react-router-dom'

const Review = ({id, description, user, rating, comments}) => {

  const [editMode, setEditMode] = useState(false)
  const location = useLocation()

  const handleDelete = async (e) => {
     e.preventDefault()
    //  try {
    //   const res = await fetchDataWithToken(`http://localhost:3000/reviews/${id}`, 'DELETE')
    //   const data = await res.json()
    //  } catch (error) {
    //   console.log(error);
    //  }
  }
  
  const handleEdit = async (e) => {
    e.preventDefault()
   
    const body = {
     description: e.target[0].value,
     rating: e.target[1].value,
    }

     
   //  try {
      //  const res = await postDataWithToken(`http://localhost:3000/reviews/${id}`, 'PATCH', body)
   // const data = await res.json()
   //  } catch (error) {
   //   console.log(error);
   //  }
  }

const handleSubmit = async (e) => {
  e.preventDefault()

  const body = {
    description: e.target[0].value,
    review: id,
    user: user.id
  }

  // try {
  // const res = await postDataWithToken('http://localhost:3000/comments', 'POST', body)
  //  const data = await res.json() 
  // } catch (error) {
  //   console.log(error);
  // }
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
      
      
    {location.pathname == '/' && 
     <div>
      <form onSubmit={handleSubmit}>
      <textarea placeholder='Add comment...' name='description'></textarea>
      <input type='submit'></input>
      </form>
    
      </div>
      }
    
      {
       comments && comments.map(comment => (
          <ReviewComment key={comment.id} id={comment.id} description={comment.description} user={comment.user}/>
        ))
      }
    </div>
  )
}

export default Review