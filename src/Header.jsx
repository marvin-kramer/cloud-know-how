import React from 'react';
import styles from './Header.module.css'; // Import CSS module

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Cloud KnowHow</div>
            <nav className={styles.navList}>
                {/*<a href={"#about-me"}>About Me</a>*/}
                <a href={"#services"}>Cloud Solutions</a>
            </nav>
        </header>
    );
};

export default Header;
