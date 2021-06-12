import React from 'react'
import './Sidebar.css'
import {GrFormClose} from 'react-icons/gr'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  const[isShow,setIsShow] = React.useState('hide');
  return(
    <>
    <div className="side">
      <FaBars className="bars" onClick={() => setIsShow('show')}/>
    </div>
    <div className={`sidebar ${isShow}`}>
      <GrFormClose className="close" onClick={() => setIsShow('hide')}/>
      <ul className="menu" onClick={() => setIsShow('hide')}>
        <li>
          <Link to="/" className="opt">
            home
          </Link>
        </li>
        <li>
          <Link to="/skills" className="opt">
            skills
          </Link>
        </li>
        <li>
          <Link to="/about" className="opt">
            about
          </Link>
        </li>
        <li>
          <Link to="/products" className="opt">
            products
          </Link>
        </li>
        <li>
          <Link to="/services" className="opt">
            services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="opt">
            contact
          </Link>
        </li>
      </ul>  
    </div>
  </>
  );
}

export default Sidebar