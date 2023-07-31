import React from 'react'
import AuthForm from '../../components/auth-form/AuthForm'
import LogoBotKits from '../../components/icons/Logo/logo-bot-kits'
import styles from './register.module.css'


export default function Register () {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
      <LogoBotKits register={true}/>
      <h1 className={styles.title}>Регистрация</h1>
      </div>
      <AuthForm/>

    </div>
  )
}

