import { differenceInHours, differenceInMinutes, fromUnixTime } from 'date-fns';

export const getTimeDifference = (timestamp: number): string => {
    const convertedDate = fromUnixTime(timestamp);
    const diffInHours = differenceInHours(new Date(), convertedDate);

    return diffInHours > 0 ? `${diffInHours} hours ago` : `${differenceInMinutes(new Date(), convertedDate)} minutes ago`;
};
