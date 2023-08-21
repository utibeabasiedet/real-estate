import React from 'react'
import './GetStareted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="flexColCenter paddings innerWidth inner-container">
            <span className='primaryText'>Get atarted with HomyZ</span>
            <span className='secondaryText'>Subscribe and find attractive price quote from 
                <br/>
                find your residence soon
            </span>

            <button className="button">
                <a href="#">Get Started</a>
            </button>
        </div>
    </section>
  )
}

export default GetStarted