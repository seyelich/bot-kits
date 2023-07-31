// import React from 'react'
import LogoBotKits from '../../components/icons/Logo/logo-bot-kits'
import styles from './register.module.css'


export default function Register () {
  return (
    <div className={styles.wrapper}>
      <LogoBotKits register={true}/>
      <h1 className={styles.title}>Регистрация</h1>

    </div>
  )
}

