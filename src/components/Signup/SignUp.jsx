import React from 'react'
import style from './SignUp.module.css'
import { useNavigate } from 'react-router-dom'
import { postData } from '../../utils/fetchData'


const SignUp = () => {

const navigate = useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault()
  
  const name = e.target[0].value
  const lastName = e.target[1].value
  const email = e.target[2].value
  const password = e.target[3].value

  const body = {
   name, lastName, email, password
  }
 
 

  // try {
  //   const dataSignUp = await postData('http://localhost:3000/signup', 'POST', body)
  //   navigate('/login')
  // } catch (error) {
  //   console.log(error);
  // }
}

  return (
    <>
    <form onSubmit={handleSubmit}>

      <label htmlFor='name'>Name: </label>
      <input id='name' type='text' name='name'></input>

      <label htmlFor='lastName'>Last name: </label>
      <input id='lastName' type='text' name='lastName'></input>

      <label htmlFor='email'>Email:</label>
      <input id='email' type='email' name='email'></input>

      <label htmlFor='pass'>Password:</label>
      <input id='pass' type='password' name='pass'></input>

      <input type='submit'></input>
    </form>
    <p>Already have an account?</p>
    <button onClick={(e) => {
      e.preventDefault()
      navigate('/login')
    }}>Login</button>
    </>
  )
}

export default SignUp