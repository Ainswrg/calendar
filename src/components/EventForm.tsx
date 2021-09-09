import { FC, useState } from 'react';
import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { Moment } from 'moment';
import { rules } from '../utils/rules';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';
import { formatDate } from '../utils/date';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface EventFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

export const EventForm: FC<EventFormProps> = ({ guests, submit }) => {
  const { Option } = Select;
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: '',
  } as IEvent);

  const { user } = useTypedSelector((state) => state.auth);

  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date.toDate()) });
    }
  };

  const submitForm = () => {
    submit({ ...event, author: user.username });
  };

  return (
    <Form onFinish={submitForm}>
      <Form.Item label="Description" name="description" rules={[rules.required()]}>
        <Input
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
          value={event.description}
        />
      </Form.Item>

      <Form.Item
        label="Event date"
        name="date"
        rules={[rules.required(), rules.isDateAfter("Can't create an event in the past")]}
      >
        <DatePicker onChange={(date) => selectDate(date)} />
      </Form.Item>

      <Form.Item label="Select guest" name="guest" rules={[rules.required()]}>
        <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
          {guests.map((guest) => {
            return (
              <Option key={guest.username} value={guest.username}>
                {guest.username}
              </Option>
            );
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
