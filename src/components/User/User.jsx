import React from 'react'
import style from './User.module.css'
import { postDataWithToken } from '../../utils/fetchData'
import Review from '../Review/Review'

const User = ({id, name, lastName, email, isBanned, reviews, setUsers}) => {

const handleUser = async (e) => {
  e.preventDefault()
  try {
    const updatedUsers = await postDataWithToken(`http://localhost:3001/users/${id}`, 'PATCH', {
      isBanned: !isBanned
    })
    setUsers(updatedUsers)
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div id={id}>
      <h1>{name + ' ' + lastName}</h1>
      <h2>{email}</h2>
      {
        reviews.map(review => (
          <Review key={review.id} id={review.id} user={name} description={review.description} rating={review.rating} setUsers={setUsers}/>
        ))
      }
      <button onClick={handleUser}>{isBanned ? 'Habilitar' : 'Deshabilitar'}</button>
    </div>
  )
}

export default User