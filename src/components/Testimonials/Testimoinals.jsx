import React, { useState } from 'react'
import './Testimoinals.css'
import testimoinalsData from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import tfc from "../../assets/tfc.png"

const Testimoinals = () => {

    // const {selected} = useState(0);
    // // const tLenght = testimoinalsData.length;
  
    return (
    <div className="Testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>Say about us</span>
            <span>I made the right choice by choosing the Fitclub and by choosing the right plan and<br/> program I already achieved my ideal body!</span>
            <span>JOHN KEVIN - COACH</span>
            {/* <span> 
                {testimoinalsData[selected].reviwe}
            </span>

            <span>
                <span style={{color:'var(--orange)'}}>
                {testimoinalsData[selected].name}
                </span>{" "}
              - {testimoinalsData[selected].status}
            </span> */}
        </div>


        <div className="right-t">
          {/* <img src={testimoinalsData[selected].image} alt="" />
          <div className="arrows">
            <img src={leftArrow} alt="" />
            <img src={rightArrow} alt="" />
          </div> */}
          <img src={tfc} alt="" />
        </div>
    </div>
  )
}

export default Testimoinals