import React from 'react'
import classes from './Icons.module.css'
import {MdPhoneInTalk} from 'react-icons/md';
import {FaTelegramPlane,FaWhatsapp} from 'react-icons/fa'

export default function Icons(props) {
  return (
    <div className={`${classes.icons} ${props.cl}`}>
    <FaTelegramPlane/>
    <MdPhoneInTalk/>
    <FaWhatsapp/>
  </div>
  )
}
