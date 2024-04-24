import React from 'react'
import './Intro.css'
import { Link } from 'react-scroll'
import profilePic from '../../assets/zameer.png'
import hireBtn from '../../assets/hireme.png'

function Intro() {
  return (
    <section id='intro'>
      <div className="introContent">
            <span className='hello'>Hello,</span>
            <h1 className='introText'>
                I'm <span className='introName'>Zameer</span>
                <br />
                Website Designer
            </h1>
            <p className='introPara'>
            I am a skilled and passionate web designer with experience in creating 
            <br />
            visually appealing and user-friendly websites</p>
            <Link>
            <button className="introBtn">
                <img src={hireBtn} alt=""  className='hireBtnImg'/>
                HireMe
            </button>
            </Link>
            
      </div>
      <img src={profilePic} alt="" className='introImg' />
    </section>
  )
}

export default Intro
