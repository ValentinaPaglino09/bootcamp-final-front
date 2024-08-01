import React from 'react'
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import { postData } from '../../utils/fetchData'


const Login = () => {
  const navigate = useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault()

  const email = e.target[0].value
  const password = e.target[1].value

  const body = {
    email, password
  }



  try {
    const dataLogin = await postData('http://localhost:3001/login', 'POST', body)
    if (dataLogin.statusCode == 401) console.log('No está autorizado.');
    else {localStorage.setItem('token', dataLogin.token)
    sessionStorage.setItem('user', JSON.stringify(dataLogin.user))
    navigate('/')}
  } catch (error) {
    console.log(error);
  }
  
  
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