import { format, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';

export const getFormattedDate = (
  date: Date | string | number = new Date(),
  givenFormat: string = 'MMM dd, yyyy',
  options: {
    locale?: Object
  } = { locale: enUS },
) => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : new Date(date);
  return format(parsedDate, givenFormat, options);
};