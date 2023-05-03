import React from 'react'
import classes from './FooterItem.module.css'

export default function FooterItem(props) {
  return (
    <div className={classes.footer}>
      <h2 style={{marginTop:!props.title && '26px'}}>{props.title}</h2>
      <p>{props.first}</p>
      <p>{props.second}</p>
      <p>{props.third}</p>
      <p>{props.fourth}</p>
      <p>{props.fifth}</p>
    </div>
  )
}
