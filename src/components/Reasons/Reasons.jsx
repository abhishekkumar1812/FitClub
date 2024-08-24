import React from 'react'
import './Reasons.css'
import imgage1 from "../../assets/image1.png";
import imgage2 from "../../assets/image2.png";
import imgage3 from "../../assets/image3.png";
import imgage4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";


const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={imgage1} alt="" />
            <img src={imgage2} alt="" />
            <img src={imgage3} alt="" />
            <img src={imgage4} alt="" />
        </div>

        <div className="right-r">
            <span>some reasons</span>
             
            <div>
                <span className="stroke-text">Why</span>
                <span>choose us?</span>
                 
                <div className='details-r'>
                <div>
                    <img src={tick} alt="" />
                    <span>over 140+ expert coachs
                    </span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>train smarter and faster than before</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>1 free program for new member</span>
                </div>

                <div>
                    <img src={tick} alt="" />
                    <span>reliable partners</span>
                </div>
            </div>

            <span style={{
                color: "var(--gray)",
                 fontWeight:'normal'
            }}> OUR PARTNERS 
            </span>

            <div className="partners">
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
            </div>

            </div>
        </div>
    </div>
  )
}

export default Reasons