import { Calendar } from 'antd';
import React, { FC } from 'react';
import { IEvent } from '../models/IEvent';

interface EventCalendarProps {
  events: IEvent[];
}

export const EventCalendar: FC<EventCalendarProps> = () => {
  return (
    <Calendar />
  );
};
