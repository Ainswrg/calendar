export const rules = {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  required: (message: string = 'Required') => ({
    required: true,
    message,
  }),
};
