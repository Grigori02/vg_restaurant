import React from 'react';
import styles from 'styles/Food.module.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Item from "@/components/foods/item";

const Foods = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div className={styles.containerFood}>
            <h1>ՖԻՐՄԱԻՆ ՈՒՏԵՍՏՆԵՐ</h1>
            <Slider {...settings}>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </Slider>
        </div>
    );
};

export default Foods;