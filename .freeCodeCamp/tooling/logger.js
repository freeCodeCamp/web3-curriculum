import { Logger } from 'logover';

export const logover = new Logger({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info'
});
