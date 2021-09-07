import React from 'react';
import { Button, Form, Input } from 'antd';
import { rules } from '../utils/rules';

export const LoginForm = () => {
  return (
    <Form>
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
