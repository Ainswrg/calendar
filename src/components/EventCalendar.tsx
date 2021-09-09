import { Calendar } from 'antd';
import { Moment } from 'moment';
import React, { FC } from 'react';
import { IEvent } from '../models/IEvent';
import { formatDate } from '../utils/date';

interface EventCalendarProps {
  events: IEvent[];
}

export const EventCalendar: FC<EventCalendarProps> = ({ events }) => {
  function dateCellRender(value: Moment) {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = events.filter((ev) => ev.date === formatedDate);
    return (
      <div>
        {currentDayEvents.map((ev, index) => (
          <div key={index}>{ev.description}</div>
        ))}
      </div>
    );
  }

  // eslint-disable-next-line react/jsx-no-bind
  return <Calendar dateCellRender={dateCellRender} />;
};
