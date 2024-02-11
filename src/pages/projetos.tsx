import styles from '../styles/style_home.module.scss'
import { Header } from '../components/header';
import Head from 'next/head';
import { Footer } from '@/components/footer';
import { Project } from '../components/project';
import { Cookies } from '../components/cookies';
import "aos/dist/aos.css"
import Aos from 'aos';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, []);

    return (
        <>
            <Head>
                <title>LukeTheNeko</title>
                <link rel="icon" href="./LukeNekoUwU/LukeTheNekoAudi.jpg" />
            </Head>
            <div className={`${styles.home} ${styles['background-container']}`} id='start'>
                <Header />
                <main className={styles.mainproject}>
                    <div className={styles.image}>
                        <img className={styles.project} src='/logos/projetos.png' alt='Logo' />
                    </div>
                </main>
                <Cookies />
                <Project />
                <Footer />
            </div>
        </>
    );
}