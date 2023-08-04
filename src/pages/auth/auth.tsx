import RegisterForm from '../../components/register-form/RegisterForm';
import Logo from '../../components/Logo/Logo';
import styles from './auth.module.css';
import LoginForm from '../../components/login-form/LoginForm';
import { useState } from 'react';

export default function Auth() {

  const [state, setState] = useState({authState:"Register"})

    const handleRegisterClick = () => {
      setState({ authState: "Register" });
    };

    const handleLoginClick = () => {
      setState({ authState: "Login" });
    };

    const handleForgotPassClick = () => {
      setState({ authState: "ForgotPass" });
    };

    console.log(state);


  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <Logo register={true} />
        <h1 className={styles.title}>Регистрация</h1>
      </div>
      <RegisterForm logIn={handleLoginClick}/>
      {/* <LoginForm/> */}
    </div>
  );
}
