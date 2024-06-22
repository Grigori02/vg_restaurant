import React from 'react';
import styles from 'styles/Food.module.css'
import {Divider} from "antd";
const Foods = () => {
    return (
        <div className={styles.continerFood}>
            <h1>ՖԻՐՄԱԻՆ ՈՒՏԵՍՏՆԵՐ</h1>
            <div className={styles.continer}>
                <div className={styles.item}>
                    <img
                        src="https://media.post.rvohealth.io/wp-content/uploads/2022/09/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.jpg"
                        alt=""/>
                </div>
                <div className={styles.item}>
                    <img src="https://ichef.bbci.co.uk/images/ic/832xn/p0gzbmpd.jpg" alt=""/>
                </div>
                <div className={styles.item}>
                    <img
                        src="https://media.cnn.com/api/v1/images/stellar/prod/220511094011-01-body-fried-foods-churros.jpg?q=w_1110,c_fill"
                        alt=""/>
                </div>
                <div className={styles.item}>
                    <img
                        src="https://www.macquariecentre.com.au/getmedia/611ebf83-8695-43ad-b78d-ca87902f9b74/L_Restaurant_Shared_Lunch_1.jpg"
                        alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Foods;