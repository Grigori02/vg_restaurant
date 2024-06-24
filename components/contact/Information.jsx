import React from 'react';
import styles from '../../styles/Information.module.css'
import {EnvironmentOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
const Information = () => {
    return (
        <div className={styles.container}>
            <div className={styles.items}>
                <div className={styles.item}>
                    <div className={styles.call}>
                        <PhoneOutlined/>
                    </div>
                    <div className={styles.callText}>
                        <ul>
                            <li>Call Us On</li>
                            <li>+415-864-8728-99</li>
                            <li>+415-864-8728-99</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.call}>
                        <MailOutlined/>
                    </div>
                    <div className={styles.callText}>
                        <ul>
                            <li>Email Us</li>
                            <li>support@tourigo.com</li>
                            <li>support@tourigo.com</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.call}>
                        <EnvironmentOutlined/>
                    </div>
                    <div className={styles.callText}>
                        <ul>
                            <li>Our Location</li>
                            <li>1426 Center StreetBend</li>
                            <li>97702, California, USA</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;