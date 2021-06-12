import React from 'react'
import "./Contact.css"
import {IoCall } from 'react-icons/io5'
import {IoIosSend} from 'react-icons/io'
import {HiMail} from 'react-icons/hi'

const Contact = () => {
  return(
    <div className="contact">
      <ul className="address">
        <li>
          <div className="flex">
          <HiMail className="i"/>
          <h1 className="p8">ADDRESS</h1>
          </div>
          <h3 className="info">523 N FAIRFAX, LOS ANGELES, CA 90048</h3>
        </li>
        <li>
          <div className="flex">
          <IoIosSend className="i"/>
          <h1 className="p8">EMAIL</h1>
          </div>
          <h3 className="info">EMAIL@EMAIL.COM</h3>
        </li>
        <li>
          <div className="flex">
          <IoCall className="i"/>
          <h1 className="p8">TELEPHONE</h1>
          </div>
          <h3 className="info">+123 456 789</h3>
        </li>
      </ul>
      <form>
        <label>NAME</label>
        <input type="text"></input>
        <label>EMAIL</label>
        <input type="email"></input>
        <label>MESSAGE</label>
        <textarea></textarea>
        <button type="submit" className="btn">SEND</button>
      </form>
    </div>

  );
}

export default Contact