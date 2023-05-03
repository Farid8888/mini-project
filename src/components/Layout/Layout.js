import React from 'react'
import Navigation from './Navigation'
import classes from './Layout.module.css'



export default function Layout(props) {
  return (
    <div className={classes.layout}>
      <Navigation/>
      {props.children}
    </div>
  )
}
