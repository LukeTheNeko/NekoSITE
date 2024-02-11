import styles from '../styles/style_home.module.scss'
import { Header } from '../components/header';
import { About } from '../components/about'
import { Technology } from '../components/technology'
import { ParticleEffect } from "../components/particles";
import { Cookies } from '@/components/cookies';
import Head from 'next/head';
import { Footer } from '@/components/footer';
import "aos/dist/aos.css"
import Aos from 'aos';
import { useEffect } from 'react';
import { BsGithub, BsInstagram, BsTiktok, BsTwitter, BsYoutube } from 'react-icons/bs';

export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, [])

    return (
        <>
            <Head>
                <title>LukeTheNeko</title>
                <link className={`${styles.icon}`} rel="icon" href="./LukeNekoUwU/LukeTheNekoAudi.jpg" />
            </Head>
            <div className={`${styles.home} ${styles['background-container']}`} id='start'>
                <Header />
                <ParticleEffect />
                <main className={styles.main}>
                    <div className={styles.body}>
                        <div className={styles.image}>
                            <img className={styles.me} src='./logos/luketheneko.png' alt="Minha foto" />
                        </div>
                        <h1>
                            Lucas
                        </h1>
                        <h2>
                            Programador FullStack
                        </h2>
                        <div className={styles.socias}>
                            <a href="https://github.com/LukeTheNeko" target="_blank" rel="noopener noreferrer">
                                <BsGithub color='#fff' size={35} />
                            </a>
                            <a href="https://www.instagram.com/LukeTheNeko" target="_blank" rel="noopener noreferrer">
                                <BsInstagram color='#fff' size={35} />
                            </a>
                            <a href="https://www.twitter.com/LukeTheNeko" target="_blank" rel="noopener noreferrer">
                                <BsTwitter color='#fff' size={35} />
                            </a>
                            <a href="https://www.tiktok.com/@LukeTheNeko" target="_blank" rel="noopener noreferrer">
                                <BsTiktok color='#fff' size={35} />
                            </a>
                            <a href="https://www.youtube.com/@LukeTheNekoo" target="_blank" rel="noopener noreferrer">
                                <BsYoutube color='#fff' size={35} />
                            </a>
                        </div>
                    </div>
                </main>
                <About />
                <Technology />
                <Cookies />
                <Footer />
            </div>
        </>
    )
}