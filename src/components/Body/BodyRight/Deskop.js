import React from 'react'
import classes from './Deskop.module.css'


export default function Deskop() {
  return (
    <div className={classes.block}>
        <div>
          <h2>Виджеты</h2>
          <p>30 готовых решений</p>
        </div>
        <div>
          <h2>Dashboard</h2>
          <p>с показателями вашего бизнеса</p>
        </div>
        <div>
            <h2>Skype Аудит</h2>
            <p>отдела продаж и CRM системы</p>
        </div>
        <div>
            <h2>35 дней</h2>
            <p>использования CRM</p>
        </div>
      </div>
  )
}
