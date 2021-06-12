import React from 'react';
import './Skills.css';
import { FaMugHot, FaGlassCheers, FaBomb, FaMortarPestle} from "react-icons/fa";
const Skills = () => {
  return(
    <div className='container'>
      <div className='skill'>
        <FaMugHot className='icon'/>
        <p className="p1">MADE IN US</p>
        <p className="p2">Lorem ipsum dolor sit amet<br></br> consectetur adipisicing elit.<br></br>Tempore,sequi.</p>
      </div>
      <div className='skill'>
        <FaGlassCheers className='icon'/>
        <p className="p1">RELAXATION</p>
        <p className="p2">Lorem ipsum dolor sit amet<br></br> consectetur adipisicing elit.<br></br>Tempore,sequi.</p>
      </div>
      <div className='skill'>
        <FaBomb className='icon'/>
        <p className="p1">ENERGY</p>
        <p className="p2">Lorem ipsum dolor sit amet<br></br> consectetur adipisicing elit.<br></br>Tempore,sequi.</p>
      </div>
      <div className='skill'>
        <FaMortarPestle className='icon'/>
        <p className="p1">FAMILY RECIPE</p>
        <p className="p2">Lorem ipsum dolor sit amet<br></br> consectetur adipisicing elit.<br></br>Tempore,sequi.</p>
      </div>
    </div>
  );
}

export default Skills