import React from "react";
import classes from "./Footer.module.css";
import FooterItem from "./FooterItem";
import Icons from "../Icons/Icons";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footerFl}>
        <div className={classes.mobMenu}> 
        <FooterItem
          title="О компании"
          first="Партнёрская программа"
          second="Вакансии"
        />
        <div className={classes.menu}>
        <FooterItem title="Меню" first="Расчёт стоимости" second="Услуги" third='Виджеты' fourth='Интеграции' fifth='Наши клиенты' />
        <FooterItem
          first="Кейсы"
          second="Благодарственные письма"
          third="Сертификаты"
          fourth="Блог на Youtube"
          fifth="Вопрос / Ответ"
        />
        </div>
        </div>
      </div>
      <div className={classes.welb}>
        <h2>Контакты</h2>
        <p>+7 555 555-55-55</p>
        <Icons cl={classes.icons}/>
        <p>Москва, Путевой проезд 3с1, к 902</p>
        <p>©WELBEX 2022. Все права защищены. Политика конфиденциальности</p>
      </div>
    </div>
  );
}
