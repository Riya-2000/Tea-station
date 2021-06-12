import React from 'react'
import pro1 from './images/product-1.jpeg'
import pro2 from './images/product-2.jpeg'
import pro3 from './images/product-3.jpeg'
import './Services.css'
import { GiCoffeeCup, GiSpotedFlower, GiPestleMortar } from 'react-icons/gi'

const Services = () => {
  return (
    <div className="services">
      <div className="heading">
        <p className="first">Explore</p>
        <p className="sec">OUR SERVICES</p>
      </div>
      <div className="cards">
        <div className="card">
          <img src={pro1} className="tile-img" />
          <div className="tile">
            <GiPestleMortar className="sticker" />
            <p className="para">Custom Recipes Service</p>
            <button className="read">Read More</button>
          </div>
        </div>
        <div className="card">
          <img src={pro2} className="tile-img" />
          <div className="tile">
            <GiSpotedFlower className="sticker" />
            <p className="para">Home Delivery Service</p>
            <button className="read">Read More</button>
          </div>
        </div>
        <div className="card">
          <img src={pro3} className="tile-img" />
          <div className="tile">
            <GiCoffeeCup className="sticker" />
            <p className="para">Tea Aging Service</p>
            <button className="read">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services