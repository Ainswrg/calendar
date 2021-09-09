import moment, { Moment } from 'moment';

export const rules = {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  required: (message: string = 'Required') => ({
    required: true,
    message,
  }),
  isDateAfter: (message: string) => () => ({
    validator(_: any, value: Moment) {
      if (value.isSameOrAfter(moment())) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(message));
    },
  }),
};
