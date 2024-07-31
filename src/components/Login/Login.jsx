import React from 'react'
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import { postData } from '../../utils/fetchData'
import { usersArray } from '../../utils/data'

const Login = () => {
  const navigate = useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault()

  const email = e.target[0].value
  const password = e.target[1].value

  const body = {
    email, password
  }

  const userExists = usersArray.find(user => user.email == email && user.password == password)
 if (userExists) sessionStorage.setItem('user', JSON.stringify(userExists))
  else throw new Error('Datos incorrectos')
navigate('/')

  // try {
  //   const dataLogin = await postData('http://localhost:3000/login', 'POST', body)
  //   localStorage.setItem('token', dataLogin.token)
  //   setCurrentUser(dataLogin.user)
  //   navigate('/')
  // } catch (error) {
  //   console.log(error);
  // }
  
  
}

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor='email'>Email:</label>
      <input id='email' type='email' name='email'></input>

      <label htmlFor='pass'>Password:</label>
      <input id='pass' type='password' name='pass'></input>

      <input type='submit'></input>
    </form>
    <p>Don't have an account?</p>
    <button onClick={(e) => {
      e.preventDefault()
      navigate('/signup')
    }}>Sign up</button>
    </>
  )
}

export default Login