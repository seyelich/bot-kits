import AuthForm from '../../components/auth-form/AuthForm'
import Logo from '../../components/Logo/Logo'
import styles from './register.module.css'


export default function Register () {
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

