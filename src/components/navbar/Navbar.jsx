import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'
import Menu from '../../assets/menu.png'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className='navbar'>
        <img src={logo} alt="logo"  className='navLogo'/>
        <div className="navMenu">
         <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className='navMenuItems'>Home</Link>
         <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='navMenuItems'>About</Link>
         <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='navMenuItems'>Portfolio</Link>
         <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='navMenuItems'>Contact</Link>
        </div>
        <button className='nav-btn' onClick={()=>{
          document.getElementById('contact').scrollIntoView( {behavior: 'smooth'} );
        }}>
          <img src={contact} alt="" className='navBtnImg' />
          Contact Me
        </button>

        <img src={Menu} alt="Menu"  className='mobLogo' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="mobMenu" style={{display: showMenu? 'flex':'none'}}>
         <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className='mobMenuItems' onClick={()=>setShowMenu(false)}>Home</Link>
         <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='mobMenuItems' onClick={()=>setShowMenu(false)}>About</Link>
         <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='mobMenuItems' onClick={()=>setShowMenu(false)}>Portfolio</Link>
         <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='mobMenuItems' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
