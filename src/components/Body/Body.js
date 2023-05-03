import React from 'react'
import BodyLeft from './BodyLeft/BodyLeft'
import BodyRight from './BodyRight/BodyRight'
import classes from './Body.module.css'

export default function Body() {
  return (
    <div className={classes.body}>
      <BodyLeft/>
      <BodyRight/>
    </div>
  )
}
