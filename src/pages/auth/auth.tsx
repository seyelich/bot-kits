import RegisterForm from '../../components/register-form/RegisterForm';
import Logo from '../../components/Logo/Logo';
import styles from './auth.module.css';
import LoginForm from '../../components/login-form/LoginForm';
import { useState } from 'react';

export default function Auth() {
  const [state, setState] = useState({ authState: 'Login' });

  const handleRegisterClick = () => {
    setState({ authState: 'Register' });
  };

  const handleLoginClick = () => {
    setState({ authState: 'Login' });
  };

  const handleForgotPassClick = () => {
    setState({ authState: 'ForgotPass' });
  };



  return (
    <div className={`${styles.wrapper} ${state.authState !== "Register" && styles.wrapper_login}`}>
      <div className={styles.headerContainer}>
      {state.authState === 'Register' ? <Logo width={149} height={35}/> : <Logo width={161.5} height={38}/>}
        <h1 className={`${styles.title} ${state.authState !== "Register" && styles.title_login}`}>
          {state.authState === 'Register' && 'Регистрация'}
          {state.authState === 'Login' && 'Вход'}
          {state.authState === 'ForgotPass' && 'Восстановление пароля'}
        </h1>
      </div>
      {state.authState === 'Register' && <RegisterForm logIn={handleLoginClick}/>}
      {state.authState === 'Login' && <LoginForm signIn={handleRegisterClick} />}
      {state.authState === 'ForgotPass' && 'Восстановление пароля'}
    </div>
  );
}
