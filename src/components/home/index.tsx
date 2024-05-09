import { BsGithub, BsInstagram, BsTiktok, BsTwitter, BsYoutube } from 'react-icons/bs';
import { Header } from '../header';
import { ParticleEffect } from '../particles';
import styles from './styles.module.scss';

export function Main2() {
    return (
        <div className={`${styles.home} ${styles['background-container']}`} id='Main2'>
            <Header />
            <ParticleEffect />
            <main className={styles.main}>
                <div className={styles.body}>
                    <div className={styles.block1} data-aos="fade-right">
                        <h1>
                            Lucas Borges
                        </h1>
                        <h2>
                            Programador NodeJS | React
                        </h2>
                    </div>
                    <div className={styles.block2} data-aos="fade-left">
                        <div className={styles.imageContainer}>
                            <img className={styles.me} src='./imgs/devimg.png' alt="devimg" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}