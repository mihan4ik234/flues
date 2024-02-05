import { useState } from 'react'
import './header.css'
import gosuslugi from '../../assets/gosuslugi.png'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='back'>
        <div className='sodershimoe'>
          <div className='shtrafamDA'>
            <p id='blue'>ШТРАФАМ</p>
            <p id='red'> ДА!</p>
          </div>
          <img className='gosuslugi' src={gosuslugi} alt="." />
        </div>
      </div>
      <div className='navbar'>
        <div class="dropdown">
          <button class="dropbtn">Навигация
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="/zaiavka"><p className='nav'>ЗАЯВКА</p></a>
            <a href="/profile"><p className='nav'>ПРОФИЛЬ</p></a>
            <a href="#"><p className='nav'>РЕГИСТРАЦИЯ</p></a>
            <a href="#"><p className='nav'>ВОЙТИ</p></a>
          </div>
        </div>
        
        
        
        
      </div>
    </>
  )
}

export default Header