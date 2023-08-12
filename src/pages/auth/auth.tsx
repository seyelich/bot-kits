import { useContext, useEffect, useState } from 'react';
import RegisterForm from '../../components/register-form/RegisterForm';
import Logo from '../../components/Logo/Logo';
import styles from './auth.module.css';
import LoginForm from '../../components/login-form/LoginForm';
import ForgotPassForm from '../../components/forgot-pass-form/ForgotPassForm';
import CloseIcon from '../../icons/others/Close';
// eslint-disable-next-line import/no-cycle
import { Context } from '../../app';

export default function Auth() {
  const { logIn } = useContext(Context);
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

  const chooseLogoSize = () => {
    if (windowWidth >= 1000 && state.authState === 'Register') {
      return { width: 148.75, height: 35 };
    }
    if (windowWidth >= 1000) {
      return { width: 161.5, height: 38 };
    }
    if (windowWidth >= 700 && windowWidth <= 999) {
      return { width: 148.75, height: 35 };
    }
    return { width: 127.5, height: 30 };
  };

  const logoSize = chooseLogoSize();

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
          <div className={styles.noticePage__wrapper}>
            <div className={styles.noticePage__titleContainer}>
              <h1 className={styles.noticePage__titleText}>
                Письмо с подтверждением отправлено тебе на
                <span className={styles.noticePage__titleIcon}>/email</span>!
              </h1>
            </div>
            <div
              className={`${styles.noticePage__titleImage} ${styles.noticePage__registerOrEmailImg}`}
            />
          </div>
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
          <div className={styles.noticePage__wrapper}>
            <div className={styles.noticePage__titleContainer}>
              <h1
                className={`${styles.noticePage__titleText} ${styles.noticePage__forgotPassOnEmailText}`}
              >
                Ссылка для сброса пароля отправлена тебе на
                <span className={styles.noticePage__titleIcon}>/email</span>!
              </h1>
            </div>
            <div
              className={`${styles.noticePage__titleImage} ${styles.noticePage__forgotPassOnEmailImg}`}
            />
          </div>
        </div>
      )}
      {banner.bannerState === 'none' && (
        <div
          className={`${styles.wrapper} ${
            state.authState !== 'Register' && styles.wrapper_login
          }`}
        >
          <div className={styles.headerContainer}>
            <Logo width={logoSize.width} height={logoSize.height} />
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
              logIn={logIn}
            />
          )}
          {state.authState === 'ForgotPass' && (
            <ForgotPassForm
              handleForgotPass={handleForgotPassBannerClick}
              windowWidth={windowWidth}
            />
          )}
        </div>
      )}
    </>
  );
}
