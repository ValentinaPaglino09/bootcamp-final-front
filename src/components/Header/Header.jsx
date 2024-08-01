import React from 'react'
import style from './Header.module.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/popcorn.jpg'

const Header = () => {
const navigate = useNavigate()
const token = localStorage.getItem('token')

  return (
    <nav>
      <span className={style.logo} onClick={(e) => {
        e.preventDefault()
        navigate('/')
      }}>
      <img src={logo} className={style.logoImg}></img>
      <h1 className={style.title}>Pelis.com</h1>
      </span>
      <span className={style.links}>
        <p className={style.link} onClick={(e) => {
          e.preventDefault()
          if (token) {
            localStorage.removeItem('token')
            sessionStorage.removeItem('user')
          }
          navigate(token ? '/' : '/login')
        }}>{token ? 'Sign Out' : 'Sign in'}</p>
        { token && <p className={style.link} onClick={(e) => {
          e.preventDefault()
          navigate('/profile')
        }}>Profile</p>}
      </span>
    </nav>
  )
}

export default Header