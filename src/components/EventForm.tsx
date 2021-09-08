/* eslint-disable array-callback-return */
import { FC } from 'react';
import { Form, Input } from 'antd';
import { rules } from '../utils/rules';

export const EventForm: FC = () => {
  return (
    <Form>
      <Form.Item label="Event Name" name="description" rules={[rules.required()]}>
        <Input />
      </Form.Item>
    </Form>
  );
};
