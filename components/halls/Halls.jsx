import React from 'react';
import {Card} from "antd";

const Hall = (props) => {
    return (
        <div>
            <Card
                hoverable
                style={{width: 500, height: 500}}

                cover={<img
                    alt="example"
                    src={props?.item?.image}
                    style={{width: 500, height: 400, objectFit: 'cover' }}
                />}
            >
                <div style={{
                    display: "flex",
                    color: "gray",
                    justifyContent: "space-around",
                    borderTop: "1px solid gray ",
                }}>

                </div>
                <div><h3>{props.item.titel}</h3></div>
                <div><h5>{props.item.qanak}</h5></div>
            </Card>
        </div>
    );
};

export default Hall;