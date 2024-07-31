import React, { useEffect, useState } from 'react'
import style from './Users.module.css'
import { fetchDataWithToken } from '../../utils/fetchData'
import User from '../User/User'
import { usersArray } from '../../utils/data'

const Users = ({currentUser}) => {
const [users, setUsers] = useState([])




useEffect(() => {
  setUsers(usersArray)
  // fetchDataWithToken('http://localhost:3000/users', 'GET')
  // .then(res => res.json())
  // .then(data => setUsers(data))
}, [])

const user = JSON.parse(sessionStorage.getItem('user'))
console.log(user);
 if (user && user.role == 'admin') return (
    <div>{users.map(user => (
      <User key={user.id} name={user.name} lastName={user.lastName} email={user.email} reviews={user.reviews} isBanned={user.isBanned} />
    ))}</div>
  )
  else return (
    <div>Not Found</div>
  )
}

export default Users