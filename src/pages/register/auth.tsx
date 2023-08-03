import AuthForm from '../../components/auth-form/AuthForm'
import Logo from '../../components/Logo/Logo'
import styles from './auth.module.css'


export default function Auth () {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
      <Logo register={true}/>
      <h1 className={styles.title}>Регистрация</h1>
      </div>
      <AuthForm/>

    </div>
  )
}

