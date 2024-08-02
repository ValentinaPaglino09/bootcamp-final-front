import React, { useState } from 'react'
import style from './SignUp.module.css'
import { useNavigate } from 'react-router-dom'
import { postData } from '../../utils/fetchData'


const SignUp = () => {

const navigate = useNavigate()
const [error, setError] = useState('')

const handleSubmit = async (e) => {
  e.preventDefault()
  
  const name = e.target[0].value
  const lastName = e.target[1].value
  const email = e.target[2].value
  const password = e.target[3].value

  const body = {
   name, lastName, email, password
  }
 
 

  try {
    const dataSignUp = await postData('http://localhost:3001/signup', 'POST', body)
    if (dataSignUp.message == "User email already in use") setError("User email already in use.")
     else{
      alert("Account all set up! You'll be redirected to the login page to sign in into your new account.")
      navigate('/login')
    } 
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div className={style.container}>
    <form onSubmit={handleSubmit} className={style.signup}>
    <h1 style={{textAlign: 'center', margin: '0 0 .3em 0', color: 'rgb(85, 108, 241)'}}>Welcome!</h1>
     
      <label htmlFor='name'>Name: </label>
      <input id='name' type='text' name='name' className={style.formInput} required></input>

      <label htmlFor='lastName'>Last name: </label>
      <input id='lastName' type='text' name='lastName' className={style.formInput} required></input>

      <label htmlFor='email'>Email:</label>
      <input id='email' type='email' name='email' className={style.formInput} required></input>

      <label htmlFor='pass'>Password:</label>
      <input id='pass' type='password' name='pass' className={style.formInput} required></input>

      <input type='submit' className={style.submit} value='Sign up'></input>
      <p style={{color: "red", marginBottom: '1em'}}>{error}</p>
      <p>Already have an account?</p>
    <button onClick={(e) => {
      e.preventDefault()
      navigate('/login')
    }} className={style.login}>Login</button>

    </form>
    
    </div>
  )
}

export default SignUp