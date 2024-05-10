import styles from '../styles/style_home.module.scss'
import { ParticleEffect } from "../components/particles";
import Head from 'next/head';
import { Footer } from '@/components/footer';
import "aos/dist/aos.css"
import Aos from 'aos';
import { useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, [])

    return (
        <>
            <Head>
                <title>Erro 404</title>
                <link rel="icon" href="./LukeNekoUwU/LukeTheNekoAudi.jpg" />
            </Head>
            <div className={`${styles.home} ${styles['background-container']}`} id='start'>
                <ParticleEffect />
                <main className={styles.main404}>
                    <div className={` ${styles.body} `}>
                        <h1>
                            Erro 404 <br /> Página não foi encontrada
                        </h1>

                        <div className={styles.socias}>
                            <a href="./" rel="noopener noreferrer"> <BsArrowLeft color='#fff' size={40} /></a> 
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}