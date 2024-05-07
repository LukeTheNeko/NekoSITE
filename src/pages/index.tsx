import { Cookies } from '@/components/cookies';
import { Footer } from '@/components/footer';
import { Main2 } from '@/components/home';
import { Technology } from '@/components/technology';
import Aos from 'aos';
import "aos/dist/aos.css";
import Head from 'next/head';
import { useEffect } from 'react';
import { About } from '../components/about';
import styles from '../styles/style_home.module.scss';

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
                <meta name="description" content="Olá, sou Lucas este é meu portifolio"></meta>
                <meta property="og:image" content="./imgs/luketheneko.png" />
            </Head>
            <div className={`${styles.home} ${styles['background-container']}`} id='start'> 
            <Main2 />
            <About />
            <Technology />
            <Cookies />
            <Footer />
            </div>
        </>
    )
}