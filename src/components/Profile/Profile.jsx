import React from 'react'
import style from './Profile.module.css'
import Review from '../Review/Review'

const Profile = () => {

 const userData = JSON.parse(sessionStorage.getItem('user'))
 

 if (userData){
  const {name, profilePic, lastName, email, reviews} = userData
  return (
    <div>
      <img src={profilePic} alt={`${name}'s profile picture`}></img>
      <h1>{name + ' ' + lastName}</h1>
      <h2>{email}</h2>
      {
        reviews.map(review => (
          <Review id={review.id} description={review.description} rating={review.rating} />
        ))
      }
    </div>
  )}
  else return (<div>Not Found</div>)
}

export default Profile