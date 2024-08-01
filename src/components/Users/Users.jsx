import React, { useEffect, useState } from 'react'
import style from './Users.module.css'
import { fetchDataWithToken } from '../../utils/fetchData'
import User from '../User/User'
import { usersArray } from '../../utils/data'

const Users = () => {
const [users, setUsers] = useState([])




useEffect(() => {
 
  fetchDataWithToken('http://localhost:3001/users', 'GET')
  .then((data) => setUsers(data))
  .catch(error => console.log(error))
}, [])



const user = JSON.parse(sessionStorage.getItem('user'))

 if (user && user.role == 'admin') return (
    <div>{ users && users.map(user => (
      <User key={user.id} id={user.id} name={user.name} lastName={user.lastName} email={user.email} reviews={user.reviews} isBanned={user.isBanned} />
    ))}</div>
  )
  else return (
    <div>Not Found</div>
  )
}

export default Users