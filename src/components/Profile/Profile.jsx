import React, { useEffect, useState } from 'react'
import style from './Profile.module.css'
import Review from '../Review/Review'
import { fetchDataWithToken } from '../../utils/fetchData'

const Profile = () => {

  const [profile, setProfile] = useState()

 const userData = JSON.parse(sessionStorage.getItem('user'))
 const {id} = userData


 useEffect(() => {
  fetchDataWithToken(`http://localhost:3001/users/${id}`)
  .then(data => setProfile(data.user))
  .catch(error => console.log(error))
 }, [id])


 if (profile){
  const {name, lastName, email, reviews} = profile
  return (
    <div>
      <h1>{name + ' ' + lastName}</h1>
      <h2>{email}</h2>
      <h3>My reviews</h3>
      {
        reviews && reviews.map(review => (
          <Review key={review.id} id={review.id} description={review.description} rating={review.rating} />
        ))
      }
    </div>
  )}
  else return (<div>Not Found</div>)
}

export default Profile