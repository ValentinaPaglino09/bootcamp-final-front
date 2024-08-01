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
    <div className={style.container}>
    <form onSubmit={handleSubmit} className={style.login}>
      <h1 style={{textAlign: 'center', margin: '0 0 .8em 0', color: 'rgb(85, 108, 241)'}}>Welcome back!</h1>
      <label htmlFor='email'>Email:</label>
      <input id='email' type='email' name='email' className={style.formInput}></input>

      <label htmlFor='pass'>Password:</label>
      <input id='pass' type='password' name='pass' className={style.formInput}></input>

      <input type='submit' className={style.submit} value='Log in'></input>
      <p>Don't have an account?</p>
    <button onClick={(e) => {
      e.preventDefault()
      navigate('/signup')
    }} className={style.signup}>Sign up</button>
    </form>
    
    </div>
  )
}

export default Login