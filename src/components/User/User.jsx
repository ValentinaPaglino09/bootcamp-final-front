import React from 'react'
import style from './User.module.css'
import { postDataWithToken } from '../../utils/fetchData'
import Review from '../Review/Review'

const User = ({id, name, lastName, email, isBanned, reviews}) => {

const handleUser = async (e) => {
  // try {
  //   const res = await postDataWithToken(`http://localhost:3000/users/${id}`, 'PATCH', {
  //     isBanned: !isBanned
  //   })
  //   const data = await res.json()
  // } catch (error) {
  //   console.log(error);
  // }
}

  return (
    <div id={id}>
      <h1>{name + ' ' + lastName}</h1>
      <h2>{email}</h2>
      {
        reviews.map(review => (
          <Review key={review.id} id={review.id} user={name} description={review.description} rating={review.rating}/>
        ))
      }
      <button onClick={handleUser}>{isBanned ? 'Habilitar' : 'Deshabilitar'}</button>
    </div>
  )
}

export default User