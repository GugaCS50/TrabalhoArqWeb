import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import profile_icon from '../../assets/profile_img.png'
import { logout } from '../../firebase'

const Navbar = () => {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav_dark')
      }else{
        navRef.current.classList.remove('nav_dark')
      }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Início</li>
          <li>Programas de TV</li>
          <li>Filmes</li>
          <li>Popular</li>
          <li>Minha Lista</li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="navbar-profile">
          <img src={profile_icon} alt="" className='profile' />
          <div className='dropdown'>
            <p onClick={()=>{logout()}}>Sair</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
