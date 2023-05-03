import React from "react";
import classes from "./BodyRight.module.css";
import Deskop from "./Deskop";
import Mobile from "./Mobile";


export default function BodyRight() {
  return (
    <div className={classes.bodyRight}>
      <article className={classes.title}>
        Вместе с <span>БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы дарим:
      </article>
      <div className={classes.deskop}>
      <Deskop/>
      </div>
      <div className={classes.mobile}>
      <Mobile/>
      </div>
      <button type="button" className={classes.btn}>Получить консультацию</button>
    </div>
  );
}
