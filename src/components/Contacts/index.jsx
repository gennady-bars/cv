import React from 'react';
import style from './index.module.css';

export default () => {
  return (
    <div>
      <h2><img className={style.logo} src="img/contacts.svg" alt=""/> Контакты</h2>
      <p><a className={style.contacts} href="mailto:samolevich@gmail.com">samolevich@gmail.com</a></p>
      <p><a className={style.contacts} href="tel:+79263248737">+7926 324 87 37</a></p>
      <p><a className={style.contacts} href="https://t.me/samolevich">Telegram me</a></p>
    </div>
  )
}
