import React from 'react'
import style from './Comment.module.css'

const ReviewComment = ({id, description, user}) => {
  return (
    <div style={{marginTop: '1em'}}>
      <h1 className={style.user}>{user}</h1>
      <p>{description}</p>
    </div>
  )
}

export default ReviewComment