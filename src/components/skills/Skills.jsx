import React from 'react'
import './Skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

function Skills() {
  return (
    <section id='skills' >
      <span className='skillHeading'>what can I do</span>
      <span className="skillDesc">I am a skilled and passionate web designer with experience in creating I am a skilled and passionate web designer with experience in creating I am a skilled and passionate web designer with experience in creating </span>

      <div className='skillBars'>

        <div className="skillBar">
            <img src={UIDesign} alt="" />
            <div className="skillBarText">
                <h1>UIDesign</h1>
                <p>This is the demo text it can be change be </p>
            </div>  
        </div>

          
        <div className="skillBar">
            <img src={WebDesign} alt="" />
            <div className="skillBarText">
                <h1>WebDesign</h1>
                <p>This is the demo text it can be change be </p>
            </div>  
        </div>

          
        <div className="skillBar">
            <img src={AppDesign} alt="" />
            <div className="skillBarText">
                <h1>AppDesign</h1>
                <p>This is the demo text it can be change be </p>
            </div>  
        </div>
        
      </div>
    </section>
  )
}

export default Skills
