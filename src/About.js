import React from 'react'
import './About.css'
import about from './images/about-bcg.jpeg'

const About = () => {
  return(
    <div className="cont">

    <div className="image">
      {/* <img src={about}/> */}
    </div>

      <div className="txt">
        <h1 className='p3'>about our</h1>
        <h1 className="p4">tea station</h1>
        <p className='p5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus numquam rem eos vel consequuntur obcaecati?<br></br><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus numquam rem eos vel consequuntur obcaecati?</p>
      <button className="btn">LEARN MORE</button>
    </div>
    </div>

  );
}

export default About