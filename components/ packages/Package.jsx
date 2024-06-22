import React from 'react';
import {Card} from "antd";

const Package = (props) => {
    return (
        <div>
            <Card title={props.item.name} bordered={true} style={{ width: 300 }}>
                <p>Arax</p>
                <p>jrexen</p>
                <p>xorovac</p>
                <p>salat</p>
                <p>zakuski</p>
                <p>ikra</p>

                <div style={{
                    display:"flex",
                    color:"gray",
                    justifyContent: "space-around",
                    borderTop:  "1px solid gray ",
                }}>

                </div>
                <div><h3>{props.item.value}</h3></div>
            </Card>

        </div>
    );
};

export default Package;