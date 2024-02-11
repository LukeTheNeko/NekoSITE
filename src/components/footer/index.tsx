import React from 'react';
import { BsGithub, BsInstagram, BsTiktok, BsTwitter, BsYoutube } from 'react-icons/bs';
import styles from './footer.module.scss';

export function Footer() {
    return (
        <div className={styles.main}>
            <div className={styles.block}>
                <div className={styles.socias}>
                    <a href="https://github.com/LukeTheNeko/" target="_blank" rel="noopener noreferrer">
                        <BsGithub color='#808080' size={28} />
                    </a>
                    <a href="https://www.instagram.com/LukeTheNeko" target="_blank" rel="noopener noreferrer">
                        <BsInstagram color='#808080' size={28} />
                    </a>
                    <a href="https://www.twitter.com/LukeTheNeko" target="_blank" rel="noopener noreferrer">
                        <BsTwitter color='#808080' size={28} />
                    </a>
                    <a href="https://www.tiktok.com/@LukeTheNeko" target="_blank" rel="noopener noreferrer">
                        <BsTiktok color='#808080' size={28} />
                    </a>
                    <a href="https://www.youtube.com/@LukeTheNekoo" target="_blank" rel="noopener noreferrer">
                        <BsYoutube color='#808080' size={28} />
                    </a>
                </div>
            </div>

            <div className={styles.block}>
                <div className={styles.infoRede}>
                    <p className={styles.copyright}>2024 © LukeTheNeko</p>
                </div>
            </div>

            <div className={styles.block}>
                <div className={styles.termsContainer}>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/terms">Terms and Conditions</a>
                </div>
            </div>
        </div>
    );
}