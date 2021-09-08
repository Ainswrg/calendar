/* eslint-disable array-callback-return */
import { FC } from 'react';
import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { rules } from '../utils/rules';
import { IUser } from '../models/IUser';

interface EventFormProps {
  guests: IUser[];
}

export const EventForm: FC<EventFormProps> = ({ guests }) => {
  const { Option } = Select;
  return (
    <Form>
      <Form.Item label="Event Name" name="description" rules={[rules.required()]}>
        <Input />
      </Form.Item>
      <Form.Item label="Event date" name="date" rules={[rules.required()]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Event date" name="date" rules={[rules.required()]}>
        <Select>
          {guests.map((guest) => {
            <Option key={guest.username} value={guest.username}>
              {guest.username}
            </Option>;
          })}
        </Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};
