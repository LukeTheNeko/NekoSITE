import styles from '../styles/style_home.module.scss'
import { Header } from '../components/header';
import Head from 'next/head';
import { Footer } from '@/components/footer';
import { Privacy } from '../components/privacy';
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
                <Privacy />
                <Footer />
            </div>
        </>
    );
}