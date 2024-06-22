import React from 'react';
import Hall from '@/components/halls/Halls'
import styles from '../../styles/Halls.module.css'
const Halls = () => {

    const arr = [
        {titel:"ՀԱՐՍԱՆՅԱՑ ՍՐԱՀ",qanak:"Քանակ 300-350", image:"https://www.gottable.in/public/frontend/mobile-new/images/rest-detail-img.jpg"},
        {titel:"ԿՆՈՒՆՔԻ և ԾՆՆԴՅԱՆ ՍՐԱՀ",qanak:"Քանակ 100-150", image:"https://img.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_140725-8504.jpg",},
        {titel:"ՓՈՔՐ ԱՌԻԹՆԵՐԻ ՍՐԱՀ",qanak:"Քանակ 50-80", image:"https://media.istockphoto.com/id/1162961471/photo/bar-without-guests.jpg?s=612x612&w=0&k=20&c=OPBVyx9axFg7eO5WUbArVkEu-pzDMJLIN5ELH0augpY=",},
    ]
    return (
        <div className={styles.continer}>
            {
                arr.map((item,index) => <Hall key={index} item={item}/>)
            }
        </div>
    );
};

export default Halls;