import React from 'react';
import styles from '../../styles/Registreishn.module.css';
import {Form, Input, Button} from 'antd';
import {FacebookOutlined, InstagramOutlined, YoutubeOutlined} from "@ant-design/icons";

const {TextArea} = Input;

const Register = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className={styles.containerRegistreishn}>
            <div className={styles.registreishnForm}>
                <div className={styles.contact}>
                    <div className={styles.text}>
                        <p>CONTACT US</p>
                        <h1>Get 100% Free Course Contact With Us!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit
                            massa mi. Aliquam hendrerit urna pellentesque
                        </p>
                    </div>
                    <div className={styles.icon}>
                        <FacebookOutlined />
                        <InstagramOutlined />
                        <YoutubeOutlined />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <h2>Drop Us a Line...</h2>
                    <div>
                        <Form
                            form={form}
                            name="contact"
                            onFinish={onFinish}
                            layout="vertical"
                            style={{ maxWidth: 600, margin: '0 auto' }}
                        >
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[{ required: true, message: 'Please input your name!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="phone"
                                label="Phone"
                                rules={[{ required: true, message: 'Please input your phone number!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="message"
                                label="Message"
                                rules={[{ required: true, message: 'Please input your message!' }]}
                            >
                                <TextArea rows={4} />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>

            </div>
            <div className={styles.map}>
                <iframe className={styles.iframs}
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7040.497655953678!2d44.488487166349955!3d40.21119739292075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1719065235136!5m2!1sru!2sam"
                />
            </div>
        </div>
    );
};

export default Register;