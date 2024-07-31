import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import SignUp from "./components/Signup/SignUp"
import Profile from "./components/Profile/Profile"
import Users from "./components/Users/Users"
import MoviePage from "./components/MoviePage/MoviePage.jsx"
import Header from "./components/Header/Header.jsx"


function App() {
  
  


  return (
    <>
    <Header />
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      {/* <Route path="/movie" element={<MoviePage />}></Route> */}
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/admin"  element={< Users/>}></Route>
     </Routes>
    </>
  )
}

export default App
