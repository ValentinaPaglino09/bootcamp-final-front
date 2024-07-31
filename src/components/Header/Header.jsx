import React from 'react'
import style from './Header.module.css'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import logo from '../../assets/popcorn.jpg'

const Header = () => {
const navigate = useNavigate()
const user = JSON.parse(sessionStorage.getItem('user'))

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
          if (user) sessionStorage.removeItem('user')
          navigate(user ? '/' : '/login')
        }}>{user ? 'Sign Out' : 'Sign in'}</p>
        { user && <p className={style.link} onClick={(e) => {
          e.preventDefault()
          navigate('/profile')
        }}>Profile</p>}
      </span>
    </nav>
  )
}

export default Header