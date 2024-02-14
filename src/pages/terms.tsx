import styles from '../styles/style_home.module.scss'
import { Header } from '../components/header';
import Head from 'next/head';
import { Footer } from '@/components/footer';
import "aos/dist/aos.css"
import Aos from 'aos';
import { useEffect } from 'react';
import { Terms } from '@/components/terms';

export default function Home() {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, []);

    return (
        <>
            <Head>
            <title>Terms and Conditions</title>
                <link rel="icon" href="./LukeNekoUwU/LukeTheNekoAudi.jpg" />
            </Head>
            <div className={`${styles.home} ${styles['background-container']}`} id='start'>
                <Header />
                <Terms />
                <Footer />
            </div>
        </>
    );
}