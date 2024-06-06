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
                <title>Lucas - Meu Portfólio</title>
                <link rel="icon" href="./LukeNekoUwU/LukeTheNekoAudi.jpg" />
                <meta name="description" content=""></meta>
                <meta name="keywords" content="portifolio, dev, developer, js, ts, react"></meta>
                <meta name="google-adsense-account" content="ca-pub-2763973119875552"></meta>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="title" content="LukeTheNeko" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="LukeTheNeko" />
                <meta
                    property="og:description"
                    content="Olá, Eu sou o Lucas este é meu portifolio :3"
                />
                <meta
                    property="og:image"
                    content="https://luketheneko.dev/image-meta.png"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://luketheneko.dev/"
                />
                <meta property="twitter:title" content="LukeTheNeko" />
                <meta
                    property="twitter:description"
                    content="Olá, Eu sou o Lucas este é meu portifolio :3"
                />
                <meta
                    property="twitter:image"
                    content="https://luketheneko.dev/image-meta.png"
                />

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