import { getTime } from 'date-fns';

export const isPastSevenDays = (date) => {
  const recentDate = new Date().getTime();
  const dynamicDate = getTime(new Date(date));

  const diffInTime = recentDate - dynamicDate;
  const diffInDays = diffInTime / (1000 * 3600 * 24);

  return Math.floor(diffInDays);
};
