import React from 'react'
import style from './Comment.module.css'

const ReviewComment = ({id, content, user}) => {
  return (
    <div id={id} style={{marginTop: '1em'}}>
      <h1 className={style.user}>{user}</h1>
      <p>{content}</p>
    </div>
  )
}

export default ReviewComment