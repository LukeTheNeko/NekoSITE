import React, { useState, useEffect } from 'react';
import styles from './cookie.module.scss';

export function Cookies() {
  const [displayBanner, setDisplayBanner] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem('decisaoCookies')) {
      setDisplayBanner(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('decisaoCookies', 'aceitar');
    setDisplayBanner(false);
  };

  const handleRejectCookies = () => {
    localStorage.setItem('decisaoCookies', 'rejeitar');
    setDisplayBanner(false);
  };

  if (!displayBanner) {
    return null;
  }

  return (
    <div className={styles.cookieBannerFixed}>
      <div className={styles.cookieBanner}>
        <p>
          Este site utiliza cookies.<br />
          Ao continuar a navegação, você concorda com o uso de cookies.{' '}<br />
          <a href="/privacy">Saiba mais</a>
        </p>
        <div className={styles.buttonContainer}>
          <button className={`${styles.button}`} onClick={handleAcceptCookies}>
            Aceitar
          </button>
          <button className={`${styles.button}`} onClick={handleRejectCookies}>
            Rejeitar
          </button>
        </div>
      </div>
    </div>
  );
}
