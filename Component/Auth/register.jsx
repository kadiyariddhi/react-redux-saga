import React from "react";
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import authActions from '../../Redux/Auth/action'

const Register = () => {
    const dispatch = useDispatch();
    const onFinish = (values) => {
        dispatch(authActions.signupRequest(values));
    };

    const onFinishFailed = (errorInfo) => {
    };

    return (
        <div className={'login-form-container'}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        SignUp
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )

}

export default Register;