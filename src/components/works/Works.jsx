import React from 'react'
import './Works.css'
import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'
import portfolio4 from '../../assets/portfolio-4.png'
import portfolio5 from '../../assets/portfolio-5.png'
import portfolio6 from '../../assets/portfolio-6.png'


function Works() {
  return (
    <section id='works'>
      <span className='workTitle'>portfolio</span>
      <span className='workDesc'>Welcome to my portfolio, where innovation meets precision in every project showcased. With a focus on [your field or specialization], my work illustrates a deep understanding of both design principles and user experience. Each project highlights my commitment to delivering exceptional results that not only meet client expectations but also exceed them.</span>
      <div className="workContainer">
        <div className="workBox">
          <img src={portfolio1} alt="" />
        </div>

        <div className="workBox">
          <img src={portfolio2} alt="" />
        </div>

        <div className="workBox">
          <img src={portfolio3} alt="" />
        </div>

        <div className="workBox">
          <img src={portfolio4} alt="" />
        </div>

        <div className="workBox">
          <img src={portfolio5} alt="" />
        </div>

        <div className="workBox">
          <img src={portfolio6} alt="" />
        </div>
      </div>

      <button className='moreButton'>More works</button>
    </section>
  )
}

export default Works
