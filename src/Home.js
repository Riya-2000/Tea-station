import React from 'react'
import './Home.css'
import Sidebar from './Sidebar'
const Home = () => {
  return(
    <>
    <Sidebar/>
    <div className='home'>
    <p className='para1'>Over one hundred flavours of tea</p>
    <p className="para2">specially crafted tea</p>
    <button className="exp">explore</button>
    </div>
    <div className="line"></div>
    </>
  );
}

export default Home