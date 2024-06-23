import React from 'react';
import styles from '../../styles/Halls.module.css'
import Item from "@/components/halls/item";
import Slider from "react-slick";

const Halls = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div className={styles.container}>
            <h1>Սրահներ</h1>
                <Slider {...settings}>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </Slider>
        </div>
    );
};

export default Halls;