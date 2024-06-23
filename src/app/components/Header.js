import { useState } from 'react';
import Image from "next/image";
import styles from '../styles/Header.module.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.topBanner}>
                Come see us at IABC World Conference, June 23-26 <a href="#">Register now</a>
            </div>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <Image src="/logo.svg" alt="Poppulo" width={100} height={50} />

                </div>
                <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
                    <a href="#">Harmony Platform</a>
                    <a href="#">Solutions</a>
                    <a href="#">Our Company</a>
                    <a href="#">Resources</a>
                    <a href="#">Pricing</a>
                    <a href="#">Login</a>
                </nav>
                <div className={styles.cta}>
                    <button>TALK TO AN EXPERT</button>
                </div>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    ☰
                </div>
            </div>
        </header>
    );
};

export default Header;
