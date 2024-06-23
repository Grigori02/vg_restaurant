import React from 'react';
import Package from '@/components/ packages/Package'
import styles from '../../styles/Packages.module.css'

const Packages = () => {

    const arr = [
        {name:"ՓԱԹԵԹ-1",value:"8500AMD"},
        {name:"ՓԱԹԵԹ-2",value:"12000AMD"},
        {name:"ՓԱԹԵԹ-3",value:"15000AMD"},
        {name:"ՓԱԹԵԹ-4",value:"18000AMD"},
        {name:"ՓԱԹԵԹ-5",value:"20000AMD"},
    ]

    return (
        <div className={styles.container}>
            <h1>Փաթեթներ</h1>
            <p>Բոլոր փաթեթները հնարավորություն ունեն փոփոխման</p>
            <div className={styles.row}>
                {
                    arr.map((item, index) => <Package key={index} item={item}/>)
                }

            </div>

        </div>

    );
};

export default Packages;