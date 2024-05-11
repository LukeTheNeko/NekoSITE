import { BsDiscord, BsGithub, BsInstagram, BsTiktok, BsTwitter, BsYoutube } from 'react-icons/bs';
import { Header } from '../header';
import { ParticleEffect } from '../particles';
import styles from './home.module.scss';

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

                        <div className={styles.socias}>
                            <a href="https://github.com/LukeTheNeko/" target="_blank" rel="noopener noreferrer">
                                <BsGithub color='#fff' size={30} />
                            </a>
                            <a href="https://discord.com/users/265766165958230016" target="_blank" rel="noopener noreferrer">
                                <BsDiscord color='#fff' size={30} />
                            </a>
                            <a href="https://www.twitter.com/LukeTheNeko" target="_blank" rel="noopener noreferrer">
                                <BsTwitter color='#fff' size={30} />
                            </a>
                            <a href="https://www.instagram.com/LukeTheNeko" target="_blank" rel="noopener noreferrer">
                                <BsInstagram color='#fff' size={30} />
                            </a>
                            <a href="https://www.tiktok.com/@LukeTheNeko" target="_blank" rel="noopener noreferrer">
                                <BsTiktok color='#fff' size={30} />
                            </a>
                            <a href="https://www.youtube.com/@LukeTheNekoo" target="_blank" rel="noopener noreferrer">
                                <BsYoutube color='#fff' size={30} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.block2} data-aos="fade-left">
                        <div className={styles.imageContainer}>
                            <img className={styles.me} src='./imgs/devpc.png' alt="dev no pc" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}