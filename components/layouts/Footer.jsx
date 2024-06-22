import React from 'react';
import styles from '../../styles/Footer.module.css';
import {FacebookFilled, InstagramFilled, LinkedinFilled} from "@ant-design/icons";
const Footer = () => {
    return (
        <div>
            <div className={styles.footerContayner}>
                <div className={styles.contayner}>
                    <div className={styles.item}>
                        <ul>
                            <li>locationn</li>
                            <li>pereriv</li>
                            <li>colla</li>
                            <li>fanta</li>
                            <li>limonad</li>
                        </ul>
                    </div>
                    <div className={styles.item}>
                        <ul>
                            <li>locationn</li>
                            <li>pereriv</li>
                            <li>colla</li>
                            <li>fanta</li>
                            <li>limonad</li>
                        </ul>
                    </div>
                    <div className={styles.item}>
                        <ul>
                            <li>locationn</li>
                            <li>pereriv</li>
                            <li>colla</li>
                            <li>fanta</li>
                            <li>limonad</li>
                        </ul>
                    </div>
                    <div className={styles.item}>
                        <ul>
                            <li>locationn</li>
                            <li>pereriv</li>
                            <li>colla</li>
                            <li>fanta</li>
                            <li>limonad</li>
                        </ul>
                    </div>
                    <div className={styles.item}>
                        <ul>
                            <li>FOLLOW</li>
                        </ul>
                        <div className={styles.icons}>
                            <FacebookFilled/>
                            <InstagramFilled/>
                            <LinkedinFilled/>
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.footer}>
                <div className={styles.data}>
                    <p>2024-PATTIO TIME FINE DINNG RESTORANT</p>
                    <p>PRIVICE VAN GARDEN HALL</p>
                </div>
            </div>
        </div>
    )
        ;
};

export default Footer;