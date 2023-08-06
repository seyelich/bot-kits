import RegisterForm from '../../components/register-form/RegisterForm';
import Logo from '../../components/Logo/Logo';
import styles from './auth.module.css';
import LoginForm from '../../components/login-form/LoginForm';
import { useEffect, useState } from 'react';
import ForgotPassForm from '../../components/forgot-pass-form/ForgotPassForm';
import sendEmail from '../../images/sendEmail.png';
import sendForgotPass from '../../images/sendForgotPass.png';
import CloseIcon from '../../icons/others/Close';

export default function Auth() {
  const [state, setState] = useState({ authState: 'Login' });
  const [banner, setBanner] = useState({ bannerState: 'none' });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleRegisterClick = () => {
    setState({ authState: 'Register' });
  };

  const handleLoginClick = () => {
    setState({ authState: 'Login' });
  };

  const handleForgotPassClick = () => {
    setState({ authState: 'ForgotPass' });
  };

  const handleRegisterBannerClick = () => {
    setBanner({ bannerState: 'registerOnEmail' });
  };

  const handleForgotPassBannerClick = () => {
    setBanner({ bannerState: 'forgotPassOnEmail' });
  };
  const handleDefaultStateClick = () => {
    setBanner({ bannerState: 'none' });
    setState({ authState: 'Login' });
  };

  return (
    <>
      {banner.bannerState === 'registerOnEmail' && (
        <div className={styles.noticePage}>
          <div
            className={styles.noticePage__closeIcon}
            onClick={handleDefaultStateClick}
          >
            <CloseIcon color="#22FFAA" width={32} height={32} />
          </div>
          <div className={styles.noticePage__titleContainer}>
            <h1 className={styles.noticePage__titleText}>
              Письмо с подтверждением отправлено тебе на
              <span className={styles.noticePage__titleIcon}>/email</span>!
            </h1>
          </div>
          <img
            className={styles.noticePage__titleImage}
            src={sendEmail}
            alt="image"
          />
        </div>
      )}
      {banner.bannerState === 'forgotPassOnEmail' && (
        <div className={styles.noticePage}>
          <div
            className={styles.noticePage__closeIcon}
            onClick={handleDefaultStateClick}
          >
            <CloseIcon color="#22FFAA" width={32} height={32} />
          </div>
          <div className={styles.noticePage__titleContainer}>
            <h1 className={styles.noticePage__titleText}>
              Ссылка для сброса пароля отправлена тебе на
              <span className={styles.noticePage__titleIcon}>/email</span>!
            </h1>
          </div>
          <img
            className={styles.noticePage__titleImage}
            src={sendForgotPass}
            alt="image"
          />
        </div>
      )}
      {banner.bannerState === 'none' && (
        <div
          className={`${styles.wrapper} ${
            state.authState !== 'Register' && styles.wrapper_login
          }`}
        >
          <div className={styles.headerContainer}>
            {windowWidth <= 660 ? (
              <Logo width={127.5} height={30} />
            ) : (
              <>
                {state.authState === 'Register' ? (
                  <Logo width={149} height={35} />
                ) : (
                  <Logo width={161.5} height={38} />
                )}
              </>
            )}
            <h1
              className={`${styles.title} ${
                state.authState !== 'Register' && styles.title_login
              }`}
            >
              {state.authState === 'Register' && 'Регистрация'}
              {state.authState === 'Login' && 'Вход'}
              {state.authState === 'ForgotPass' && 'Восстановление пароля'}
            </h1>
          </div>
          {state.authState === 'Register' && (
            <RegisterForm
              logIn={handleLoginClick}
              handleRegister={handleRegisterBannerClick}
              windowWidth={windowWidth}
            />
          )}
          {state.authState === 'Login' && (
            <LoginForm
              signIn={handleRegisterClick}
              forgotPass={handleForgotPassClick}
              windowWidth={windowWidth}
            />
          )}
          {state.authState === 'ForgotPass' && (
            <ForgotPassForm handleForgotPass={handleForgotPassBannerClick} />
          )}
        </div>
      )}
    </>
  );
}
