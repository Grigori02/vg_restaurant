import React from 'react';
import styles from '../../styles/Header.module.css';
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.menus}>
                    <ul>
                        <li>HOME</li>
                        <li>MENU</li>
                        <li>PAGES</li>
                        <li>SHOP</li>
                        <li>LANDING</li>
                    </ul>
                </div>
                <div className={styles.logos}>
                    <img src="logo-main.png" alt=""/>
                </div>
                <div>
                    <button>Զանգահարել</button>
                </div>
            </div>
        </div>
    );
};

export default Header;